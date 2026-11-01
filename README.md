# Ilias Ahmed — Portfolio

Client-focused portfolio built with React, strict TypeScript, Vite, and Tailwind CSS v4's Vite plugin. Static hosting, no backend, no tracking, and no third-party font or image requests.

The Dark Editorial design uses deep navy surfaces, restrained lavender accents, a direct text-led hero, and prominent illustrated case-study cards. Original conceptual diagrams describe each project domain; they are not employer product screenshots. System fonts, readable type sizes, and a narrower case-study reading column keep the content accessible without external font requests.

## Develop

Use Node.js 24 LTS and npm (the lockfile is committed).

```sh
npm ci
npm run dev
```

Run these commands in your local repository root. Use the existing checkout and preserve any local changes.

```sh
npm run typecheck
npm run lint
npm run build
npx playwright install --with-deps chromium
npm test
npm run preview
```

`npm test` starts the production preview automatically; build first. If Chromium is already installed, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its actual executable path when running `npm test`. The `/usr/bin/chromium` path is a Linux example, not a macOS default. A command sandbox may require elevated execution for the local server and browser. Do not disable TLS or package verification.

## Architecture

- `src/content/`: typed profile, projects, services, skills, and career history.
- `src/components/`: shared layout, section headings, contact section, and original SVG domain illustrations in `ProjectArt.tsx`.
- `src/pages/`: homepage, six data-driven project pages (four employer case studies and two additional mobile-app contributions), and a missing-page view.
- `src/styles/index.css`: design tokens, Tailwind integration, component styles, responsive layouts, reduced-motion rules.
- `scripts/prerender.mjs` and `scripts/render.tsx`: generate the homepage HTML during the build so summaries and core content are available before JavaScript executes. The server router emits the same hash links as the browser's `HashRouter`, including for new-tab navigation.
- `public/`: original favicon and social artwork, approved supplied CV, robots.txt, and sitemap.
- `tests/`: production-browser checks, responsive screenshots, navigation, assets, downloads, and routing.

Project details use hash routes such as `/#/projects/globo`. Direct visits and refreshes request the root HTML, so GitHub Pages needs no rewrite or custom 404 workaround. Homepage section links use `/#/#work`. Only the real static homepage belongs in the sitemap; hash case studies are not advertised as separately indexable pages. The homepage itself contains useful pre-rendered project summaries.

## Publish to GitHub Pages

The intended repository is `iliasahmed/iliasahmed.github.io`; the root-site Vite base is `/` and the canonical URL is `https://iliasahmed.github.io/`.

1. Commit and push these files, including `package-lock.json`, to `main`.
2. Ensure the repository is eligible for Pages. If **Settings → Pages** says “Upgrade or make this repository public to enable Pages”, the owner must decide whether to make the source and Git history public or use a plan supporting Pages for private repositories. Then open **Build and deployment → Source** and select **GitHub Actions**.
3. Open **Actions → Validate and deploy portfolio**. A push to `main` starts it automatically; you can also choose **Run workflow**.
4. The build job installs locked dependencies, checks TypeScript and ESLint, builds and pre-renders, runs Chromium tests, then uploads `dist/`. The deploy job configures Pages and deploys the artifact. Resolve any environment approval required by your repository's `github-pages` protection rules.
5. After deployment succeeds, check the homepage and refresh `https://iliasahmed.github.io/#/projects/globo`.

Pull requests run validation without deploying. Only the deploy job receives `pages: write` and `id-token: write`; build uses read-only repository access. Pages configuration runs in that job because it needs Pages API access. The Node runtime is pinned to 24 LTS. No personal access token, secret, database, or contact service is required.

### Deployment check — October 31, 2026

Implementation commit `9bf8403` was pushed to `main`. Its [Actions run](https://github.com/iliasahmed/iliasahmed.github.io/actions/runs/41202928516) failed at **Configure Pages** with “Resource not accessible by integration”; deployment was skipped. Repository Pages settings displayed “Upgrade or make this repository public to enable Pages”, and `https://iliasahmed.github.io/` displayed GitHub Pages' site-not-found page. The workflow now places configuration in the job with Pages permissions, but repository eligibility and Pages source setup must also be resolved before a new deployment can succeed. A successful push or local build is not proof of publication.

For a different project repository, update Vite's `base`, canonical/social URLs, robots.txt, sitemap, and root-relative public asset links; rebuild and test those paths before publishing.

## Update content

See [CONTENT_EDITING.md](CONTENT_EDITING.md) for file mappings and media instructions. [CONTENT_REVIEW.md](CONTENT_REVIEW.md) records facts that still require owner approval before expanding the public content. The supplied CV was read and used to verify the employment history and metrics. Full-stack capability is presented generally; unapproved backend technology claims and ShopChat are not rendered.

## Validation

Browser tests exercise widths 320, 375, 768, 1024, and 1440; mobile menu focus/Escape/selection, the keyboard focus loop, desktop resizing, repeated section selection, section navigation, pre-rendered hash links and native new-tab navigation, direct case-study entry and refresh, Back/Forward, missing pages, PDF download, external-link attributes, no horizontal overflow, pre-rendered content, and public assets. Project-card checks cover readable attribution, contribution summaries, conceptual labels, tags, and keyboard entry; unapproved backend technologies and ShopChat must remain absent from the public homepage. Homepage and case-study tests fail on browser console errors. Automated axe checks cover the homepage, open mobile menu, and a case study against WCAG A/AA rules. Homepage screenshots at all five widths and desktop screenshots of each case study are written to the ignored `test-results/` directory for inspection. External destination availability, mail-client configuration, and a real GitHub Actions deployment require verification in their respective environments.
