<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// -----------------------------------------------------------------------------
// Reusable mailer for BOTH the website form and the ERP.
// Sends through the Google Workspace SMTP account defined in config.php.
//
// ERP usage (from anywhere on this server):
//   require_once '/var/www/html/mailer/mailer.php';
//   ig_send_mail([
//     'to'       => ['someone@innovativeglove.com'],
//     'subject'  => 'ERP: Order #123 shipped',
//     'text'     => "Plain-text body...",
//     // optional: 'cc', 'bcc', 'html', 'reply_to', 'from', 'from_name'
//   ]);
// Returns true on success, false on failure (details go to the PHP error log).
// -----------------------------------------------------------------------------

function ig_send_mail(array $opts): bool
{
    static $config = null;
    if ($config === null) {
        $config = require __DIR__ . '/config.php';
    }

    require_once __DIR__ . '/PHPMailer/Exception.php';
    require_once __DIR__ . '/PHPMailer/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer/SMTP.php';

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = $config['smtp_host'];
        $mail->SMTPAuth   = true;
        $mail->Username   = $config['smtp_user'];
        $mail->Password   = $config['smtp_pass'];
        $mail->SMTPSecure = $config['smtp_secure']; // 'tls' (587) or 'ssl' (465)
        $mail->Port       = (int)$config['smtp_port'];
        $mail->CharSet    = 'UTF-8';

        $mail->setFrom($opts['from'] ?? $config['mail_from'], $opts['from_name'] ?? $config['from_name']);
        foreach ((array)($opts['to']  ?? []) as $a) { if ($a) $mail->addAddress($a); }
        foreach ((array)($opts['cc']  ?? []) as $a) { if ($a) $mail->addCC($a); }
        foreach ((array)($opts['bcc'] ?? []) as $a) { if ($a) $mail->addBCC($a); }
        if (!empty($opts['reply_to'])) {
            $mail->addReplyTo($opts['reply_to'], $opts['reply_to_name'] ?? '');
        }

        $mail->Subject = str_replace(["\r", "\n"], ' ', (string)($opts['subject'] ?? ''));
        if (!empty($opts['html'])) {
            $mail->isHTML(true);
            $mail->Body    = $opts['html'];
            $mail->AltBody = $opts['text'] ?? strip_tags($opts['html']);
        } else {
            $mail->Body = (string)($opts['text'] ?? '');
        }

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log('ig_send_mail failed: ' . $mail->ErrorInfo);
        return false;
    }
}
