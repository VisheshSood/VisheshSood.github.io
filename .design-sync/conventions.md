# Innovative Gloves: brand conventions

**Read this first. This design system has no React components.** `window.InnovativeGloves` is empty on purpose, because the live site (innovativegloves.net) is built from Astro components that can't ship as React. What does ship is the brand foundation: tokens, fonts, base element styles, and a small class vocabulary. Build your own JSX and style it with the classes and `var(--*)` tokens below. Never invent a colour, font, or radius that isn't listed here.

## Setup

Link `styles.css` and nothing else. It loads Archivo (headings, 600–900) and Inter (body, 400–700) from Google Fonts, then the stylesheet in `_ds_bundle.css`. No provider or wrapper is needed. Base styles are global: `body` gets Inter on white, and `h1`–`h4` render as **Archivo 800, uppercase, line-height 0.98** automatically. Don't restyle headings to sentence case, because the condensed uppercase heading is the brand.

## Look and feel

The site is light and premium. It uses white sections alternating with light grey (`--bg-2`), a single lime-green accent, and dark textured glove photos used as tiles against the light backgrounds. Green is an accent (buttons, small labels, a period at the end of a heading, underline rules). It's never a large background fill.

## Tokens (`var(--name)`)

| Role | Tokens |
|---|---|
| Brand green | `--green` #8CC63F (fills), `--green-bright` (hover), `--green-dark` #66992a (green text/links on light) |
| Surfaces | `--bg`, `--bg-2`, `--surface`, `--surface-2`, `--light-bg`, `--light-surface`, `--light-border` |
| Text | `--ink` / `--text` (#17191a), `--ink-muted`, `--text-muted`, `--text-dim` |
| Lines | `--border`, `--border-strong` |
| Dark tiles | `--tile` |
| Type | `--font-head` (Archivo), `--font-body` (Inter) |
| Layout | `--maxw` 1200px, `--gutter` (fluid 20–48px), `--radius` 4px (keep corners tight) |

## Classes

| Class | Use |
|---|---|
| `.container` | centred, `--maxw` wide, `--gutter` side padding. Wrap every section's content in it. |
| `.section` | fluid vertical section padding (44–76px) |
| `.eyebrow` | small uppercase, letter-spaced green label placed above a heading |
| `.dot` | green accent span, e.g. the trailing period in a heading |
| `.btn` + `.btn--primary` | green filled CTA (the main action) |
| `.btn` + `.btn--ghost` / `.btn--ghost-green` | dark-outline / green-outline secondary buttons. Put an `<span class="arrow">→</span>` inside and it nudges on hover. |
| `.rule` (+ `.rule--left`) | 54×3px green underline under a heading, centred or left-aligned |
| `.img-slot` / `.img-slot--dark` | striped placeholder for a photo. Its label comes from `data-label`. Use `--dark` for glove product shots. |
| `.muted` | `--text-muted` body copy |
| `.sr-only` | visually hidden text |

Anything more (cards, grids, stats) is layout glue you write yourself with these tokens.

## Where the truth lives

`_ds_bundle.css` is the whole stylesheet (tokens + base + classes, about 4 KB). Read it before styling.

## Example

```jsx
<section className="section" style={{ background: 'var(--bg-2)' }}>
  <div className="container" style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
    <div>
      <p className="eyebrow">Nitrile examination gloves</p>
      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginTop: 10 }}>Built for the long shift<span className="dot">.</span></h2>
      <hr className="rule rule--left" />
      <p className="muted" style={{ marginTop: 18, maxWidth: 460 }}>Powder-free, latex-free protection made in Hat Yai, Thailand since 2001.</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
        <a className="btn btn--primary" href="#">Request samples <span className="arrow">→</span></a>
        <a className="btn btn--ghost" href="#">View range</a>
      </div>
    </div>
    <div className="img-slot img-slot--dark" data-label="Glove photo" style={{ aspectRatio: '4 / 3', borderRadius: 'var(--radius)' }} />
  </div>
</section>
```
