# Content editing

Use the master brief and original CV as source material. Preserve employer attribution, dates, and the distinction between team work and individual contributions.

| Content | File |
| --- | --- |
| Name, headline, email, social profiles, proof metrics | `src/content/profile.ts` |
| Project pages, roles, contributions, supported tags | `src/content/projects.ts` |
| Services and delivery process | `src/content/services.ts` |
| Public skills and private-to-source review notes | `src/content/skills.ts` |
| Employment and education | `src/content/experience.ts` |
| Homepage prose and section composition | `src/pages/HomePage.tsx` |
| Page/social metadata, structured Person data | `index.html` |
| Colors, spacing, typography, breakpoints | `src/styles/index.css` |

The `backendReview` object is not imported by public components. Confirm the depth and wording of those individual technology claims before moving any into the published skills list. Never put secrets or confidential project information in source or the frontend bundle.

## Project details

Edit the typed project record, keeping its slug stable so shared hash links keep working. `summary` introduces the domain on the detail page; `contributionSummary` gives the concise personal-contribution description on its homepage card. `challenge` describes the domain rather than an invented client brief. `contributions` states personal work. `outcome` should stay qualitative unless the CV supports a specific metric. Team leadership and former employment must not imply independent contracts or employer endorsements. The optional `mobileApps` array showcases named products and platform builds, with public links where available; keep those links tied to the correct product and clearly distinguish separate apps from platform builds. For archived app imagery, set `screenshot`, an accurate descriptive `screenshotAlt`, and a `screenshotCaption` that names the platform shown. Keep screenshots in `public/` and use local paths; never label a screen as iOS if the capture is from Android.

Original SVG diagrams in `src/components/ProjectArt.tsx` illustrate communication, commerce, operational workflows, and routing. The typed `visual` field selects a diagram. Keep the visible “Conceptual illustration” captions on both cards and detail pages. The entire project card is one accessible link; do not put additional links inside it. To add a real screenshot, first obtain public-use permission and remove confidential data. Store an optimized WebP/AVIF image under `public/images/`, add typed media fields to the project data, and render semantic images with accurate alt text, explicit dimensions, and lazy loading where appropriate. Do not use mockups as purported product screenshots.

## Visual direction

The approved direction is Dark Editorial: deep navy, restrained lavender accents, layered project cards, original conceptual diagrams, and direct headings. Keep body text around 16–18px (15–16px or larger on mobile), secondary labels around 12–14px, and case-study paragraphs in a comfortable reading column. Prefer natural heading wrapping. Keep motion limited to brief interaction feedback and respect reduced motion. Avoid oversized hero artwork, neon, noisy backgrounds, and fake product screens. Preserve the factual proof metrics, case-study attribution, and prominent contact links.

## CV

The provided three-page `Ilias Ahmed - Mobile Tech Lead.pdf` is served unchanged as `public/Ilias-Ahmed-CV.pdf`. Replace that file when updating the CV; keep the filename to preserve the download link. It is recruiter-oriented, while the website stays client-focused. To remove the public CV, remove the download anchor in `HomePage.tsx` and the corresponding asset test, then delete the public PDF.

## Social image

`public/og-image.svg` is the editable original; social platforms use `public/og-image.png` (1200×630) for wider compatibility. Export the updated SVG to the same PNG size after editing. Keep metadata consistent with any wording or URL changes.

## Check changes

Run `npm run typecheck`, `npm run lint`, `npm run build`, then `npm test`. Inspect generated screenshots and check actual mobile navigation, headings, case-study attribution, and contact details. No application backend processes contact forms: the contact action is a genuine email link.
