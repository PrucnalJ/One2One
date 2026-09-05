# One2One Insurance Advisors website

Static site for One2One Insurance Advisors, 3925 Reed Blvd, Suite 202, Murrysville, PA. Built with Astro.
Replaces the single-page MailerLite landing page at one2oneadvisor.com.

## Run locally

```
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the built site
```

## Pages

| URL           | Purpose                                                                 |
| ------------- | ----------------------------------------------------------------------- |
| `/`           | Home: hero, services, why independent, how it works, team, FAQ, newsletter, contact form |
| `/medicare/`  | Medicare 101: Parts A to D, Advantage vs. Supplement table, enrollment dates, services |
| `/about/`     | Team bios, story, values, areas served                                  |
| `/faq/`       | All FAQs with FAQPage schema                                             |
| `/contact/`   | Office details, hours, form, map                                        |
| `/privacy/`   | Privacy policy                                                          |
| `/thank-you/` | Contact form confirmation (noindex)                                     |
| `/subscribed/`| Newsletter confirmation (noindex)                                       |

## Where things live

- `src/data/site.ts` is the single source of truth: name, address, phone, hours, social links, team, services, steps, FAQs, Medicare reference content, and the announcement bar. Edit content here.
- `src/layouts/Base.astro` holds the head tags, fonts, and the schema.org InsuranceAgency markup.
- `src/components/` holds the header, footer, FAQ accordion, CTA band, newsletter block, team card, and contact form.
- `src/styles/global.css` holds design tokens (navy and sky blue from the logo, gold accent) and shared components.
- `public/images/` holds the logo and photos. See CREDITS.md there: all photos are stock placeholders.

## Items marked TODO

Search the repo for `TODO` to find placeholders that need real information from Chris:

- Office hours (the old site listed none; Mon to Fri 9 to 5 is a guess).
- Social profile URLs (Facebook, X, Instagram icons are hidden until filled in).
- CMS disclaimer numbers: how many organizations and how many products One2One represents. This
  statement is required on third-party Medicare marketing materials.
- Founding year, and Jen's last name if she wants it shown.
- Real photos and team headshots.

## Forms

Both forms (`schedule-call` and `newsletter`) use Netlify Forms and need no backend. Submissions
appear in the Netlify dashboard under Forms, and you can set email notifications there.

The old site collected newsletter signups in MailerLite. To keep using MailerLite, either
export Netlify submissions periodically, or replace the newsletter forms in
`src/components/Newsletter.astro` and `src/components/Footer.astro` with the MailerLite embed code.

## Hosting

Designed for Netlify (free tier). Connect the GitHub repo, set build command `npm run build` and
publish directory `dist`, then point one2oneadvisor.com DNS at Netlify. `netlify.toml` already
sets caching and security headers.

## Design notes

- Fonts: Newsreader (headings) and Figtree (body) from Google Fonts. Body text is 17px for readability.
- Colors come from the logo: navy `#1a1c42` and sky blue `#88bde0`, with a gold accent for the main
  call-to-action on dark backgrounds.
- Scroll-in animations respect `prefers-reduced-motion` and only run when JavaScript is available,
  so content is never hidden.
