<?php
// =============================================================================
//  COPY THIS FILE TO  config.php  ON THE SERVER, THEN FILL IN THE REAL VALUES.
//  config.php is gitignored — it must NEVER be committed or served publicly.
//  (Recommended: chmod 600 config.php after uploading.)
// =============================================================================
    // --- SMTP transport ---
    // TWO WAYS TO SEND (pick one):
    //
    // (A) Google Workspace SMTP RELAY, IP-authenticated  <-- use this if the
    //     server's public IP is already allow-listed in Admin console
    //     (Apps > Google Workspace > Gmail > Routing > SMTP relay service).
    //     No password needed. Leave smtp_pass empty and the mailer skips auth.
    //         'smtp_host' => 'smtp-relay.gmail.com',
    //         'smtp_port' => 587,
    //         'smtp_secure' => 'tls',
    //         'smtp_user' => '',            // not used for IP auth
    //         'smtp_pass' => '',            // EMPTY => IP-authenticated relay
    //
    // (B) Gmail SMTP for one mailbox, password-authenticated (needs an App
    //     Password + 2-Step Verification on the account):
    //         'smtp_host' => 'smtp.gmail.com',
    //         'smtp_pass' => 'THE-16-CHAR-APP-PASSWORD',
    //
    'smtp_host'   => 'smtp-relay.gmail.com',  // (A) relay — same one the ERP uses
    'smtp_port'   => 587,                     // 587 = STARTTLS ('tls');  465 = SMTPS ('ssl')
    'smtp_secure' => 'tls',
    'smtp_user'   => 'sales@innovativeglove.com',
    'smtp_pass'   => '',   // EMPTY = IP-authenticated relay (no App Password). Fill in only for Gmail SMTP (option B).

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
