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

// --- Honeypot: bots fill this hidden field. Silently drop. ---
if ($honey !== '') { echo json_encode(['ok' => true]); exit; }

// --- Validate ---
$bad = [];
if ($name === '') $bad[] = 'name';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $bad[] = 'email';
if ($message === '') $bad[] = 'message';
if ($bad) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please complete all fields.', 'fields' => $bad]);
    exit;
}

// --- Verify Cloudflare Turnstile ---
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

if ($ok) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not send your message. Please email sales@innovativeglove.com directly.']);
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
