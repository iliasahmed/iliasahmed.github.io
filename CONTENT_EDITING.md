# Content editing

Use the master brief and original CV as source material. Preserve employer attribution, dates, and the distinction between team work and individual contributions.

| Content | File |
| --- | --- |
| Name, headline, email, social profiles, proof metrics | `src/content/profile.ts` |
| Four case studies, roles, contributions, supported tags | `src/content/projects.ts` |
| Services and delivery process | `src/content/services.ts` |
| Public skills and private-to-source review notes | `src/content/skills.ts` |
| Employment and education | `src/content/experience.ts` |
| Homepage prose and section composition | `src/pages/HomePage.tsx` |
| Page/social metadata, structured Person data | `index.html` |
| Colors, spacing, typography, breakpoints | `src/styles/index.css` |

The `backendReview` object is not imported by public components. Confirm the depth and wording of those individual technology claims before moving any into the published skills list. Never put secrets or confidential project information in source: the repository and frontend bundle are public.

## Project details

Edit the typed project record, keeping its slug stable so shared hash links keep working. `challenge` describes the domain rather than an invented client brief. `contributions` states personal work. `outcome` should stay qualitative unless the CV supports a specific metric. Team leadership and former employment must not imply independent contracts or employer endorsements.

The current artwork is original conceptual CSS/SVG, labelled as illustration. To add a real screenshot, first obtain public-use permission and remove confidential data. Store an optimized WebP/AVIF image under `public/images/`, add typed media fields to the project data, and render semantic images with accurate alt text, explicit dimensions, and lazy loading where appropriate. Do not use mockups as purported product screenshots.

## CV

The provided three-page `Ilias Ahmed - Mobile Tech Lead.pdf` is served unchanged as `public/Ilias-Ahmed-CV.pdf`. Replace that file when updating the CV; keep the filename to preserve the download link. It is recruiter-oriented, while the website stays client-focused. To remove the public CV, remove the download anchor in `HomePage.tsx` and the corresponding asset test, then delete the public PDF.

## Social image

`public/og-image.svg` is the editable original; social platforms use `public/og-image.png` (1200×630) for wider compatibility. Export the updated SVG to the same PNG size after editing. Keep metadata consistent with any wording or URL changes.

## Check changes

Run `npm run typecheck`, `npm run lint`, `npm run build`, then `npm test`. Inspect generated screenshots and check actual mobile navigation, headings, case-study attribution, and contact details. No application backend processes contact forms: the contact action is a genuine email link.
