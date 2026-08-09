# Contact / Sample form mailer

The website is static (hosted on Cloudflare), so it can't run PHP. This folder is
the small PHP endpoint that receives the contact and sample forms and emails them
to `sales@innovativeglove.com`. It runs on your **PHP host** (the same kind of host
as the current site), not on Cloudflare.

## What stays secret (never in git / never public)

Only **`config.php`** holds secrets (the SMTP app password and the Turnstile secret
key). It is **gitignored** and is created directly on the server. The public keys
(Turnstile *site* key and the endpoint URL) are safe and live in
`src/data/forms.ts`.

## One-time setup

**1. Add PHPMailer** into `php-mailer/PHPMailer/` (three files):
`PHPMailer.php`, `SMTP.php`, `Exception.php` — from
<https://github.com/PHPMailer/PHPMailer> (the `src/` folder), or run
`composer require phpmailer/phpmailer` and point the `require` paths at
`vendor/phpmailer/phpmailer/src/`.

**2. Create a Cloudflare Turnstile widget** (dash.cloudflare.com → Turnstile →
Add site → domain `innovativegloves.net`). You get a **site key** (public) and a
**secret key** (private).

**3. Generate the mailbox app password** for `sales@innovativeglove.com` (e.g. a
Google Workspace *App Password*). This is the "one-time password" — not the normal
login password.

**4. Create `config.php` on the server** by copying `config.example.php` and filling
in the SMTP host/port, the app password, and the Turnstile **secret** key. Then:
```
chmod 600 config.php
```

**5. Upload** the `php-mailer/` folder to your PHP host, e.g. so it's reachable at
`https://<your-php-host>/mailer/send.php`.

**6. Point the website at it** — in `src/data/forms.ts` set:
- `MAILER_ENDPOINT` = the `send.php` URL from step 5
- `TURNSTILE_SITEKEY` = the Turnstile **site** key from step 2

Rebuild and deploy the site. Both keys here are public and fine to commit.

## Notes
- The forms POST as `application/x-www-form-urlencoded`, so no CORS preflight is
  needed; `send.php` still returns the right `Access-Control-Allow-Origin` for the
  origins listed in `config.php`.
- A honeypot field (`company_website`) plus Turnstile handle spam.
- If `send.php` and the site end up on the **same** domain later, you can shorten
  `MAILER_ENDPOINT` to a relative `/mailer/send.php`.
