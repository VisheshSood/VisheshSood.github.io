<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// -----------------------------------------------------------------------------
// Innovative Gloves — contact / sample form mailer.
// Secrets (SMTP password, Turnstile secret) live in config.php, which is
// gitignored and must never be committed or served publicly.
// -----------------------------------------------------------------------------

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => 'Mailer is not configured yet.']);
    exit;
}
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

// --- Read + trim inputs ---
$name     = trim((string)($_POST['name'] ?? ''));
$email    = trim((string)($_POST['email'] ?? ''));
$message  = trim((string)($_POST['message'] ?? $_POST['details'] ?? ''));
$formType = trim((string)($_POST['form'] ?? 'Website'));
$token    = (string)($_POST['cf-turnstile-response'] ?? '');
$honey    = trim((string)($_POST['company_website'] ?? ''));

// --- Honeypot: real users never fill this hidden field. Silently drop bots. ---
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

// --- Send via SMTP (PHPMailer) ---
require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->SMTPSecure = $config['smtp_secure']; // 'tls' (port 587) or 'ssl' (port 465)
    $mail->Port       = (int)$config['smtp_port'];
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($config['mail_from'], $config['from_name']);
    $mail->addAddress($config['mail_to']);
    $mail->addReplyTo($email, $name);

    $safeName = str_replace(["\r", "\n"], ' ', $name);
    $mail->Subject = "[{$formType}] Website enquiry from {$safeName}";
    $mail->Body    =
        "Form: {$formType}\n" .
        "Name: {$name}\n" .
        "Email: {$email}\n\n" .
        "Message:\n{$message}\n";

    $mail->send();
    echo json_encode(['ok' => true]);
} catch (Exception $e) {
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
