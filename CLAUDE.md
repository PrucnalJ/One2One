# One2One Insurance Advisors website

## What this is

A brand-new static site for One2One Insurance Advisors, independent Medicare advisors owned by Chris Grieco
(Owner & Lead Advisor) and Darla Grieco (Office Manager), with advisor Jen. Office: 3925 Reed Blvd, Suite 202,
Murrysville, PA 15668. Phone (724) 575-7628. Email chris@one2oneadvisor.com.

It replaces the old single-page MailerLite landing page at https://one2oneadvisor.com. All copy, team bios,
FAQs, and contact details on the old page were carried over verbatim into `src/data/site.ts`.

Built September 2026 with Astro 7 (static output) and Netlify Forms. `npm run build` passes and emits 9 pages.
See README.md for the page list and where content lives.

## Current status and next step

- The site is finished as a first draft and has been reviewed visually at desktop and mobile widths.
- Source is on GitHub at https://github.com/PrucnalJ/One2One (branch `main`, PrucnalJ account). The GitHub CLI on
  this machine is already logged in as PrucnalJ; if it is switched to another account, run
  `gh auth switch --user PrucnalJ` before pushing.
- A temporary review copy is served by GitHub Pages at **https://prucnalj.github.io/One2One/**. The workflow in
  `.github/workflows/pages.yml` rebuilds and redeploys it on every push to `main` (about 1 to 2 minutes). It
  builds with `SITE_URL`, `BASE_PATH=/One2One`, and `PUBLIC_NOINDEX=1` so links work under the subfolder and the
  preview stays out of search results. The two forms do not submit on the preview because they rely on Netlify
  Forms; that is expected.
- Production hosting is still intended to be Netlify (import the GitHub repo; `netlify.toml` already sets the
  build command and publish dir, and both forms rely on Netlify Forms). The Netlify CLI is installed globally
  but not logged in. When the site goes live on one2oneadvisor.com, the GitHub Pages workflow can be deleted.

Environment notes:

- The workspace path contains an ampersand, so `.npmrc` sets `script-shell` to Git Bash. Keep it. The Pages
  workflow overrides that setting with `npm_config_script_shell=/bin/bash` because the Windows path does not
  exist on the Linux runner.
- To reproduce the preview build locally from Git Bash, set `MSYS2_ENV_CONV_EXCL='*'` first. Otherwise MSYS
  rewrites `BASE_PATH=/One2One` into a Windows path like `/C:/Program Files/Git/One2One`.
- Vercel CLI is installed globally but not logged in.
- Port 4321 is often occupied by another process on this machine; Astro picks the next free port.
- On Astro 7, `astro preview` runs as a background daemon. Stop it with `npx astro preview stop`.

## Open items that need answers from Chris (marked TODO in the code)

- Office hours. The old site listed none; Monday to Friday 9 to 5 is a placeholder in `src/data/site.ts`.
- Social profile URLs. The footer icons stay hidden until the strings in `site.social` are filled in.
- CMS disclaimer numbers in `site.disclaimer`: how many organizations and how many products One2One represents.
  This statement is required on third-party Medicare marketing materials and currently shows "[number]".
- Founding year, and Jen's last name if she wants it shown.
- Real photos. Every photo in `public/images/` is an Unsplash stock placeholder (see CREDITS.md there).
  Team cards show initials on purpose; do not add stock headshots for named people.

## Conventions

- Content lives in `src/data/site.ts`. Pages and components read from it; do not hard-code business details.
- Root-relative links and asset paths go through `url()` from `src/lib/url.ts` (`href={url('/about/')}`), which
  prefixes Astro's `base`. It is a no-op in production and is what makes the GitHub Pages subfolder preview work.
  Do not write bare `href="/..."` or `src="/..."` in templates.
- Design tokens are in `src/styles/global.css`: navy `#1a1c42` and sky blue `#88bde0` from the logo, a gold
  accent for the main call to action on dark backgrounds, Newsreader for headings, Figtree for body text.
- Do not invent testimonials, statistics, or backstory. Everything on the site traces to the old site's copy
  or to general public Medicare facts (enrollment dates, Parts A to D).
