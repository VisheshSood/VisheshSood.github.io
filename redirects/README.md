# Redirects (server-side, Apache)

- `legacy.map`: old URL path -> current path (`GONE` = 410). Apache reads it as a RewriteMap and re-reads it automatically when the file changes, so adding a redirect = edit, commit, push.
- `apache-innovativegloves-redirects.conf`: the rules. A copy lives on the server at `/etc/apache2/innovativegloves-redirects.conf` and is included from both innovativegloves.net vhosts.
- `redirect-map.csv`: the reviewed map with status, evidence and confidence per URL.
- `test-redirects.py redirect-map.csv`: checks every mapping live (status, destination, one hop, no loops).
