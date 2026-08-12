<?php
declare(strict_types=1);

// -----------------------------------------------------------------------------
// Website contact / sample form endpoint.
// Validates the submission + Cloudflare Turnstile, then sends via the shared
// mailer (mailer.php), which the ERP can also reuse.
// -----------------------------------------------------------------------------

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => 'Mailer is not configured yet.']);
    exit;
}
require __DIR__ . '/mailer.php';
$config = require $configPath;

// --- CORS: only allow our own site origins ---
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins'], true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') { http_response_code(204); exit; }
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// --- Inputs ---
$name     = trim((string)($_POST['name'] ?? ''));
$email    = trim((string)($_POST['email'] ?? ''));
$message  = trim((string)($_POST['message'] ?? $_POST['details'] ?? ''));
$formType = trim((string)($_POST['form'] ?? 'Website'));
$token    = (string)($_POST['cf-turnstile-response'] ?? '');
$honey    = trim((string)($_POST['company_website'] ?? ''));

// Promo popup: an email-only signup that just notifies the team of interest.
$isPromo  = strcasecmp($formType, 'Promo') === 0;

// --- Honeypot: bots fill this hidden field. Silently drop. ---
if ($honey !== '') { echo json_encode(['ok' => true]); exit; }

// --- Validate (presence + sane length caps to blunt abuse) ---
if ($isPromo) {
    // Only an email is required from the promo popup.
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 254) {
        http_response_code(422);
        echo json_encode(['ok' => false, 'error' => 'Please enter a valid email address.', 'fields' => ['email']]);
        exit;
    }
} else {
    $bad = [];
    if ($name === '' || mb_strlen($name) > 100)          $bad[] = 'name';
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)
        || mb_strlen($email) > 254)                       $bad[] = 'email';
    if ($message === '' || mb_strlen($message) > 5000)   $bad[] = 'message';
    if ($bad) {
        http_response_code(422);
        echo json_encode(['ok' => false, 'error' => 'Please complete all fields.', 'fields' => $bad]);
        exit;
    }
}

// --- Rate limit BEFORE the Turnstile call, per-IP and globally. -------------
// Even with a solved captcha, no single IP (or the box as a whole) can be used
// to blast mail. Storage is a throwaway dir in the system temp path, so it
// needs no special permissions and never touches the repo or the ERP.
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
if (!rate_ok('ip:' . $ip, 5, 3600) || !rate_ok('global', 100, 3600)) {
    http_response_code(429);
    header('Retry-After: 3600');
    echo json_encode(['ok' => false, 'error' => 'Too many requests. Please try again later, or email sales@innovativeglove.com directly.']);
    exit;
}

// --- Verify Cloudflare Turnstile. Skipped for the promo popup, which stays
//     frictionless and leans on the honeypot + rate limiting above instead. ---
if (!$isPromo) {
    if ($token === '') {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Please complete the anti-spam check.']);
        exit;
    }
    if (!verifyTurnstile($config['turnstile_secret'], $token, $_SERVER['REMOTE_ADDR'] ?? null)) {
        http_response_code(403);
        echo json_encode(['ok' => false, 'error' => 'Anti-spam check failed. Please try again.']);
        exit;
    }
}

if ($isPromo) {
    // Promo popup: notify the team ONLY (no copy to the visitor).
    $body =
        "A visitor signed up through the website promo popup and is interested in " .
        "the 50% Off Selected Gloves promotion.\n\n" .
        "Interested email: {$email}\n" .
        "Source: " . ($origin !== '' ? $origin : 'website') . "\n";

    $ok = ig_send_mail([
        'to'       => $config['mail_to'],   // internal team (Vishesh + RSood)
        'reply_to' => $email,
        'subject'  => 'Promo signup: interested in 50% Off Selected Gloves',
        'text'     => $body,
    ]);
} else {
    // --- One email: team in To, customer in Cc + thanked ---
    $safeName = str_replace(["\r", "\n"], ' ', $name);
    $body =
        "Hi {$safeName},\n\n" .
        "Thank you for reaching out to Innovative Gloves. We've received your enquiry " .
        "and a member of our team will get back to you shortly.\n\n" .
        "For your reference, here is what you sent us:\n\n" .
        "Enquiry type: {$formType}\n" .
        "Name: {$name}\n" .
        "Email: {$email}\n\n" .
        "Message:\n{$message}\n\n" .
        "Kind regards,\n" .
        "Innovative Gloves\n" .
        "sales@innovativeglove.com\n" .
        "www.innovativegloves.net\n";

    $ok = ig_send_mail([
        'to'            => $config['mail_to'],   // internal team
        'cc'            => [$email],             // customer gets a copy
        'reply_to'      => $email,
        'reply_to_name' => $name,
        'subject'       => 'Thank you for contacting Innovative Gloves',
        'text'          => $body,
    ]);
}

if ($ok) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not send your message. Please email sales@innovativeglove.com directly.']);
}

/**
 * Sliding-window rate limiter backed by one small file per key in the system
 * temp dir. Returns true if this hit is allowed (and records it), false if the
 * key has already used up $max hits within the last $window seconds.
 */
function rate_ok(string $key, int $max, int $window): bool
{
    $dir = sys_get_temp_dir() . '/ig_mailer_rl';
    if (!is_dir($dir)) { @mkdir($dir, 0700, true); }
    $file = $dir . '/' . hash('sha256', $key);
    $now  = time();

    $fh = @fopen($file, 'c+');
    if ($fh === false) { return true; } // fail-open: never block a real customer on a temp-fs hiccup
    @flock($fh, LOCK_EX);

    $raw   = stream_get_contents($fh) ?: '';
    $times = array_filter(
        array_map('intval', array_filter(explode("\n", $raw), 'strlen')),
        static fn(int $t): bool => $t > $now - $window
    );

    $allowed = count($times) < $max;
    if ($allowed) { $times[] = $now; }

    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, implode("\n", $times));
    @flock($fh, LOCK_UN);
    fclose($fh);

    return $allowed;
}

/** Server-side validation of the Turnstile token with Cloudflare. */
function verifyTurnstile(string $secret, string $token, ?string $ip): bool
{
    $ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => http_build_query(array_filter([
            'secret'   => $secret,
            'response' => $token,
            'remoteip' => $ip,
        ])),
        CURLOPT_TIMEOUT => 10,
    ]);
    $res = curl_exec($ch);
    curl_close($ch);
    if ($res === false) return false;
    $data = json_decode($res, true);
    return is_array($data) && !empty($data['success']);
}
