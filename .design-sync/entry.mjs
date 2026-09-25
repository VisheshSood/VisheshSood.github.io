// Tokens-only design system: the site's components are .astro (not React), so
// no components are exported. The brand stylesheet rides in via these imports
// (esbuild emits them as _ds_bundle.css, which styles.css @imports).
import './fonts.css';
import '../src/styles/global.css';
export {};
