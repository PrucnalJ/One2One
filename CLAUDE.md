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
- Nothing has been committed or deployed yet. This folder is not a git repo.
- The immediate goal is a temporary public URL so Darla can review the site.

Plan for the temporary URL:

1. Switch the GitHub CLI to the **PrucnalJ** account (`gh auth switch --user PrucnalJ`, or `gh auth login` if
   that account has not been added yet). The user has already created a repo for this site under that account;
   ask for the repo name or URL.
2. `git init`, commit everything, add the remote, push to `main`.
3. Deploy. Recommended: Netlify, importing the GitHub repo (netlify.toml already sets build command and publish
   dir, and both forms rely on Netlify Forms). Vercel importing the same repo also works for a preview. Avoid
   GitHub Pages unless a custom domain is attached: the site uses absolute links (`/about/`, `/images/...`) and
   would need an Astro `base` path plus link rewrites to live under `/repo-name/`.
4. Send the resulting URL to the user to forward to Darla.

Environment notes:

- The workspace path contains an ampersand, so `.npmrc` sets `script-shell` to Git Bash. Keep it.
- Vercel CLI is installed globally but not logged in. Netlify CLI is not installed.
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
- Design tokens are in `src/styles/global.css`: navy `#1a1c42` and sky blue `#88bde0` from the logo, a gold
  accent for the main call to action on dark backgrounds, Newsreader for headings, Figtree for body text.
- Do not invent testimonials, statistics, or backstory. Everything on the site traces to the old site's copy
  or to general public Medicare facts (enrollment dates, Parts A to D).
