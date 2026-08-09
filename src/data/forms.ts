// PUBLIC form config, safe to commit.
// The SECRETS (Turnstile secret key + email app password) live ONLY in
// php-mailer/config.php on the server, which is gitignored and never public.
//
// Fill these two in once you have them:
//   MAILER_ENDPOINT   = the URL where php-mailer/send.php is hosted on your PHP host
//   TURNSTILE_SITEKEY = the Cloudflare Turnstile "site key" (public half; NOT the secret key)
export const MAILER_ENDPOINT = "https://REPLACE-WITH-YOUR-PHP-HOST/mailer/send.php";
export const TURNSTILE_SITEKEY = "REPLACE-WITH-YOUR-TURNSTILE-SITE-KEY";
