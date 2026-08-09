// PUBLIC form config, safe to commit.
// The SECRETS (Turnstile secret key + email app password) live ONLY in
// php-mailer/config.php on the server, which is gitignored and never public.
//
// Fill these two in once you have them:
//   MAILER_ENDPOINT   = the URL where php-mailer/send.php is hosted on your PHP host
//   TURNSTILE_SITEKEY = the Cloudflare Turnstile "site key" (public half; NOT the secret key)
export const MAILER_ENDPOINT = "/mailer/send.php";

// Turnstile SITE key (public half — safe to commit). Its matching SECRET key must
// go ONLY in php-mailer/config.php on the server, never in git.
export const TURNSTILE_SITEKEY = "0x4AAAAAAEK4dxVBYSPTXHr2";
