<?php
// =============================================================================
//  COPY THIS FILE TO  config.php  ON THE SERVER, THEN FILL IN THE REAL VALUES.
//  config.php is gitignored — it must NEVER be committed or served publicly.
//  (Recommended: chmod 600 config.php after uploading.)
// =============================================================================
return [
    // --- SMTP account that sends the mail ---
    'smtp_host'   => 'smtp.gmail.com',   // Google Workspace: smtp.gmail.com. Otherwise your mail host's SMTP server.
    'smtp_port'   => 587,                 // 587 = STARTTLS ('tls');  465 = SMTPS ('ssl')
    'smtp_secure' => 'tls',
    'smtp_user'   => 'sales@innovativeglove.com',
    'smtp_pass'   => 'PASTE-APP-PASSWORD-HERE',   // the one-time APP PASSWORD you generate (NOT the mailbox login password)

    // --- Delivery ---
    // Team who receive each enquiry (the customer is auto-added as CC and thanked).
    'mail_to'   => ['vishesh@innovativeglove.com', 'rsood@innovativeglove.com'],
    'mail_from' => 'sales@innovativeglove.com',   // must match/allow the SMTP account above
    'from_name' => 'Innovative Gloves',

    // --- Cloudflare Turnstile SECRET key (from the Turnstile dashboard) ---
    'turnstile_secret' => 'PASTE-TURNSTILE-SECRET-KEY-HERE',

    // --- Origins allowed to POST to this endpoint (your live site) ---
    'allowed_origins' => [
        'https://www.innovativegloves.net',
        'https://innovativegloves.net',
    ],
];
