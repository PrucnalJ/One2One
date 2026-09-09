// Prefixes a site-absolute path ("/about/", "/images/logo.png") with Astro's
// configured `base`. In production `base` is "/" so this is a no-op. It only
// matters for subpath previews such as GitHub Pages, where the site lives at
// https://prucnal-sachdev.github.io/One2One/ and every root-relative link would
// otherwise escape the subfolder. Anything that is not root-relative
// (external URLs, "#main", "tel:", "mailto:") passes through untouched.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string): string => (path.startsWith('/') ? `${base}${path}` : path);
