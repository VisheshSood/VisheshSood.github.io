# design-sync notes

- **Tokens-only sync, by the user's choice (2026-09-25).** The site's components are `.astro`, not React, so nothing ships as a component. Only the brand foundation syncs: `src/styles/global.css` (tokens + base + classes) and the Google Fonts Archivo/Inter import. Porting components to React was offered and declined.
- **How the CSS gets in:** `.design-sync/entry.mjs` is the `--entry`. It imports `fonts.css` then `../src/styles/global.css`, and esbuild emits both as `_ds_bundle.css`. `cfg.cssEntry` points at `tokens-only.css`, a comment-only marker, because the converter only enters tokens-only mode when `cssEntry` is set (`lib/source-kit.mjs`). Don't use `tokensGlob`: it only reads from a `tokensPkg` in node_modules.
- **Fonts** load at runtime from Google Fonts (`fonts.css`), matching `BaseLayout.astro`. That's why `runtimeFontPrefixes` lists Archivo and Inter.
- **The render check was run with `--no-render-check`.** There are 0 component previews, so there's nothing for it to render. Playwright isn't installed on this machine.
- Build and re-sync command, from the repo root:
  `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules .ds-sync/node_modules --entry ./.design-sync/entry.mjs --out ./ds-bundle --no-render-check [--remote .design-sync/.cache/remote-sync.json]`
  `.ds-sync/node_modules` needs `esbuild ts-morph @types/react react react-dom`.

- **@kind annotations must go in `tokens-only.css`, not `global.css`.** esbuild strips every comment from `global.css` when it builds `_ds_bundle.css`, but `cfg.cssEntry` (`tokens-only.css`) is appended raw. So a `/* @kind spacing */` on `--gutter` in `global.css` never reached Claude Design and the warning kept coming back. The override there repeats the exact `global.css` value, so nothing changes visually. Keep the two values in sync.

## Known render warns

- `[FONT_REMOTE] "Arial Narrow"` is expected. It's the second fallback in `--font-head` (a system font), not a brand font, so it doesn't need to ship.
- `[RENDER_SKIPPED]` is expected. See the `--no-render-check` bullet above.
- `[DTS_REACT]` (@types/react not found) and `[ZERO_MATCH]` are expected. There are no components, so no props get extracted.

## Re-sync risks

- `conventions.md` lists every token and class in `global.css` by name. If you add, rename, or remove one there, update `conventions.md` too, then re-sync.
- If the Google Fonts weights in `BaseLayout.astro` change, update `fonts.css` to match.
- If the site ever gains React components, this needs a real package-shape sync, not this tokens-only setup.
