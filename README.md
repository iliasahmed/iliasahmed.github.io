# Ilias Ahmed — Portfolio

Client-focused portfolio built with React, strict TypeScript, Vite, and Tailwind CSS v4's Vite plugin. Static hosting, no backend, no tracking, and no third-party font or image requests.

## Develop

Use Node.js 24 LTS and npm (the lockfile is committed).

```sh
npm ci
npm run dev
```

Run these commands in the repository root. Each cloud task has its own isolated checkout; use the existing checkout without creating a worktree unless requested.

```sh
npm run typecheck
npm run lint
npm run build
npx playwright install --with-deps chromium
npm test
npm run preview
```

`npm test` starts the production preview automatically; build first. If Chromium is already installed, use `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test` instead of installing a second browser. The cloud command sandbox may require elevated execution for the local server and browser. Do not disable TLS or package verification.

## Architecture

- `src/content/`: typed profile, projects, services, skills, and career history.
- `src/components/`: shared layout, section headings, contact section, and original conceptual illustrations.
- `src/pages/`: homepage, four data-driven case studies, and a missing-page view.
- `src/styles/index.css`: design tokens, Tailwind integration, component styles, responsive layouts, reduced-motion rules.
- `scripts/prerender.mjs` and `scripts/render.tsx`: generate the homepage HTML during the build so summaries and core content are available before JavaScript executes.
- `public/`: original favicon and social artwork, approved supplied CV, robots.txt, and sitemap.
- `tests/`: production-browser checks, responsive screenshots, navigation, assets, downloads, and routing.

Project details use hash routes such as `/#/projects/globo`. Direct visits and refreshes request the root HTML, so GitHub Pages needs no rewrite or custom 404 workaround. Homepage section links use `/#/#work`. Only the real static homepage belongs in the sitemap; hash case studies are not advertised as separately indexable pages. The homepage itself contains useful pre-rendered project summaries.

## Publish to GitHub Pages

The intended repository is `iliasahmed/iliasahmed.github.io`; the root-site Vite base is `/` and the canonical URL is `https://iliasahmed.github.io/`.

1. Commit and push these files, including `package-lock.json`, to `main`.
2. In GitHub, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Open **Actions → Validate and deploy portfolio**. A push to `main` starts it automatically; you can also choose **Run workflow**.
4. The workflow installs locked dependencies, checks TypeScript and ESLint, builds and pre-renders, runs Chromium tests, then uploads and deploys `dist/`. Resolve any environment approval required by your repository's `github-pages` protection rules.
5. After deployment succeeds, check the homepage and refresh `https://iliasahmed.github.io/#/projects/globo`.

Pull requests run validation without deploying. Only the deploy job receives `pages: write` and `id-token: write`; build uses read-only repository access. Action majors are current official releases and the Node runtime is pinned to 24 LTS. No personal access token, secret, database, or contact service is required. This implementation has not itself been pushed or deployed.

For a different project repository, update Vite's `base`, canonical/social URLs, robots.txt, sitemap, and root-relative public asset links; rebuild and test those paths before publishing.

## Update content

See [CONTENT_EDITING.md](CONTENT_EDITING.md) for file mappings and media instructions. [CONTENT_REVIEW.md](CONTENT_REVIEW.md) records facts that still require owner approval before expanding the public content. The supplied CV was read and used to verify the employment history and metrics. Full-stack capability is presented generally; unapproved backend technology claims and ShopChat are not rendered.

## Validation

Browser tests exercise widths 320, 375, 768, 1024, and 1440; mobile menu focus/Escape/selection, section navigation, direct case-study entry and refresh, Back/Forward, missing pages, PDF download, external-link attributes, no horizontal overflow, pre-rendered content, and public assets. Homepage tests fail on browser console errors. Automated axe checks cover the homepage, open mobile menu, and a case study against WCAG A/AA rules. Screenshots are written to the ignored `test-results/` directory for inspection. External destination availability, mail-client configuration, and a real GitHub Actions deployment require verification in their respective environments.
