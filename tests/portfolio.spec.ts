import { test, expect } from '@playwright/test'
const slugs = ['globo', 'evaly', 'fms', 'carbangla', 'qcoom', 'moneybase']
const employerSlugs = ['globo', 'evaly', 'fms', 'carbangla']
test('homepage is pre-rendered and public assets resolve', async ({ request }) => {
  const response = await request.get('/')
  const html = await response.text()
  expect(html).toContain('I build mobile apps')
  expect(html).toContain('using native development or Flutter')
  expect(html).toContain('The work behind the experience.')
  expect(html).toContain('GLOBO')
  expect(html).toContain('application/ld+json')
  expect(html).toContain('href="#/projects/globo"')
  expect(html).toContain('href="#/#work"')
  for (const path of ['/favicon.svg', '/og-image.png', '/robots.txt', '/sitemap.xml', '/Ilias-Ahmed-CV.pdf']) {
    const asset = await request.get(path)
    expect(asset.status(), path).toBe(200)
    expect((await asset.body()).length).toBeGreaterThan(20)
  }
  expect((await request.get('/Ilias-Ahmed-CV.pdf')).headers()['content-type']).toContain('application/pdf')
})
test('hydrated homepage links open case studies in new tabs using hash routes', async ({ page, context }) => {
  await page.goto('/')
  for (const slug of slugs) {
    await expect(page.locator(`a.project-card[href="#/projects/${slug}"]`)).toHaveCount(1)
  }
  const popupEvent = context.waitForEvent('page')
  await page.getByRole('link', { name: 'Read GLOBO case study' }).click({ modifiers: ['ControlOrMeta'] })
  const popup = await popupEvent
  await expect(popup).toHaveURL(/\/#\/projects\/globo$/)
  await expect(popup.locator('.case-study h1')).toBeVisible()
  await popup.reload()
  await expect(popup.locator('.case-study h1')).toBeVisible()
  await popup.close()
})
for (const width of [320, 375, 768, 1024, 1440]) {
  test(`responsive layout and navigation at ${width}px`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('I build mobile apps')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    await expect(page.locator('.hero').getByRole('link', { name: 'Discuss your project', exact: true })).toHaveAttribute('href', /mailto:iliasahmed.se@gmail.com/)
    await page.getByRole('link', { name: 'Explore my work' }).click()
    await expect(page).toHaveURL(/#\/#work$/)
    await expect(page.locator('#work')).toBeFocused()
    if (width <= 800) {
      await page.getByRole('button', { name: 'Open navigation' }).click()
      await expect(page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: /Work/ })).toBeFocused()
      await page.keyboard.press('Escape')
      await expect(page.getByRole('button', { name: 'Open navigation' })).toBeFocused()
      await page.getByRole('button', { name: 'Open navigation' }).click()
      await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: /Contact/ }).click()
      await expect(page.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false')
      await expect(page.locator('#contact')).toBeFocused()
    }
    await page.goto('/')
    await page.screenshot({ path: `test-results/home-${width}.png`, fullPage: true })
    expect(errors).toEqual([])
  })
}
for (const slug of slugs) {
  test(`${slug} direct route, refresh, section anchors and back navigation`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
    await page.goto(`/#/projects/${slug}`)
    await expect(page.locator('.case-study h1')).toBeVisible()
    if (employerSlugs.includes(slug)) await expect(page.locator('.case-attribution')).toContainText('while employed at')
    else await expect(page.locator('.case-attribution')).toContainText('does not imply endorsement')
    await page.reload()
    await expect(page.locator('.case-study h1')).toBeVisible()
    await page.screenshot({ path: `test-results/case-${slug}-desktop.png`, fullPage: true })
    await page.getByRole('link', { name: 'My contributions', exact: true }).click()
    await expect(page.locator('#contributions')).toBeFocused()
    await expect(page.locator('.case-study h1')).toBeAttached()
    await page.getByRole('link', { name: 'All selected work' }).click()
    await expect(page.locator('#work')).toBeFocused()
    await page.goBack()
    await expect(page.locator('.case-study h1')).toBeVisible()
    await page.goForward()
    await expect(page.locator('#work')).toBeFocused()
    const projectName = slug === 'globo' ? 'GLOBO' : slug === 'evaly' ? 'Evaly' : slug === 'fms' ? 'FMS' : slug === 'carbangla' ? 'CarBangla' : slug === 'qcoom' ? 'QCoom' : 'Moneybase'
    await page.getByRole('link', { name: `Read ${projectName} case study` }).click()
    await expect(page.locator('.case-study h1')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    expect(errors).toEqual([])
  })
}
test('keyboard skip link, contact links, CV download and missing routes', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Control+Home')
  await page.evaluate(() => (document.activeElement as HTMLElement)?.blur())
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  for (const link of await page.locator('a[target="_blank"]').all()) {
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    await expect(link).toHaveAttribute('href', /^https:\/\/(github.com\/iliasahmed|www.linkedin.com\/in\/iliasahmed)/)
  }
  const downloadEvent = page.waitForEvent('download')
  await page.getByRole('link', { name: 'Download my CV' }).click()
  expect((await downloadEvent).suggestedFilename()).toBe('Ilias-Ahmed-CV.pdf')
  await page.goto('/#/projects/missing')
  await expect(page.getByRole('heading', { name: 'A small detour.' })).toBeVisible()
  await page.getByRole('link', { name: 'Back to the portfolio' }).click()
  await expect(page.getByRole('heading', { level: 1 })).toContainText('I build mobile apps')
})
test('selecting the current section again restores focus after closing the mobile menu', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/#/#contact')
  await expect(page.locator('#contact')).toBeFocused()
  await page.getByRole('button', { name: 'Open navigation' }).click()
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: /Contact/ }).click()
  await expect(page.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false')
  await expect(page.locator('#contact')).toBeFocused()
})

test('case study fits on a small screen with reduced motion', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const slug of slugs) {
    await page.goto(`/#/projects/${slug}`)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  }
  await page.screenshot({ path: 'test-results/case-study-mobile.png', fullPage: true })
})

test('homepage, mobile menu and case study meet automated WCAG checks', async ({ page }) => {
  const { default: AxeBuilder } = await import('@axe-core/playwright')
  await page.goto('/')
  let audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(audit.violations).toEqual([])
  await page.setViewportSize({ width: 375, height: 812 })
  await page.getByRole('button', { name: 'Open navigation' }).click()
  audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(audit.violations).toEqual([])
  await page.keyboard.press('Escape')
  await page.goto('/#/projects/globo')
  audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(audit.violations).toEqual([])
})


test('editorial project cards show context, attribution and conceptual artwork', async ({ page }) => {
  await page.goto('/')
  const cards = [
    ['GLOBO', 'Mobile Tech Lead', 'GLOBO Language Solutions LLC', 'iOS and Android'],
    ['Evaly', 'Lead Software Engineer', 'Evaly.com.bd Ltd', 'seven mobile developers'],
    ['FMS', 'Lead Software Engineer', 'Jatri Services Ltd', 'Primary backend and frontend work'],
    ['CarBangla', 'Software Engineer / Senior Software Engineer', 'Carbangla Ltd', 'GPS tracking'],
  ]
  for (const [name, role, employer, contribution] of cards) {
    const card = page.getByRole('link', { name: `Read ${name} case study`, exact: true })
    await expect(card).toContainText(role)
    await expect(card).toContainText(employer)
    await expect(card).toContainText(contribution)
    await expect(card.getByText('Read case study', { exact: true })).toBeVisible()
    await expect(card.locator('figcaption')).toHaveText('Conceptual illustration')
    await expect(card.locator('.tag-list')).not.toBeEmpty()
    await expect(card.locator('a')).toHaveCount(0)
  }
  for (const unapproved of ['NestJS', 'MongoDB', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Vue.js', 'ShopChat']) {
    await expect(page.locator('main')).not.toContainText(unapproved)
  }
  await page.getByRole('link', { name: 'Read GLOBO case study', exact: true }).focus()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#\/projects\/globo$/)
  await expect(page.locator('main')).toBeFocused()
})

test('How I work makes the five collaboration steps easy to scan', async ({ page }) => {
  await page.goto('/')
  const process = page.locator('#process')
  await expect(process.getByRole('heading', { name: 'How I work' })).toBeVisible()
  await expect(process.locator('.process-grid > li')).toHaveCount(5)
  for (const step of ['Understand', 'Plan', 'Build', 'Test & release', 'Improve']) {
    await expect(process.locator('.process-grid')).toContainText(step)
  }
  await expect(process.getByRole('link', { name: 'Discuss your project' })).toHaveAttribute('href', 'mailto:iliasahmed.se@gmail.com?subject=Project%20Inquiry')
})

test('mobile menu keyboard loop and desktop resize preserve usable navigation', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/')
  const toggle = page.getByRole('button', { name: 'Open navigation' })
  await toggle.click()
  const menu = page.getByRole('navigation', { name: 'Mobile navigation' })
  await expect(menu.getByRole('link', { name: 'Work', exact: true })).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(page.getByRole('button', { name: 'Close navigation' })).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(menu.getByRole('link', { name: 'Contact', exact: true })).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('button', { name: 'Close navigation' })).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(menu.getByRole('link', { name: 'Work', exact: true })).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(toggle).toBeFocused()
  await toggle.click()
  await page.setViewportSize({ width: 1024, height: 900 })
  await expect(menu).toHaveCount(0)
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden')
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Services', exact: true }).click()
  await expect(page.locator('#services')).toBeFocused()
})

test('GLOBO case study showcases both mobile app builds with official store listings', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/#/projects/globo')
  await expect(page.getByRole('heading', { name: 'GLOBO mobile apps' })).toBeVisible()
  const apps = page.locator('.app-build')
  await expect(apps).toHaveCount(3)
  const ios = apps.filter({ hasText: 'iOS' })
  const android = apps.filter({ hasText: 'Android' })
  await expect(ios.getByRole('link', { name: 'View on the App Store' })).toHaveAttribute('href', 'https://apps.apple.com/us/app/globo-connect/id1444091064')
  await expect(android.getByRole('link', { name: 'View on Google Play' })).toHaveAttribute('href', 'https://play.google.com/store/apps/details?id=com.globolanguage')
  const linguist = apps.filter({ hasText: 'GLOBO GO' })
  await expect(linguist.getByRole('link', { name: 'See GLOBO release notes' })).toHaveAttribute('href', 'https://www.helloglobo.com/release-notes')
  for (const link of await page.locator('.app-store-link').all()) {
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  }
  await expect(page.getByRole('link', { name: 'Mobile app portfolio' })).toBeVisible()
  await page.getByRole('link', { name: 'Mobile app portfolio' }).click()
  await expect(page.locator('#mobile-apps')).toBeFocused()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  await page.locator('.app-showcase').screenshot({ path: 'test-results/globo-apps-mobile.png' })
})

test('Evaly case study shows the active Evaly listing and archived app screens', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 3200 })
  await page.goto('/#/projects/evaly')
  await expect(page.getByRole('heading', { name: 'Evaly & eFood mobile apps' })).toBeVisible()
  const apps = page.locator('.app-build')
  await expect(apps).toHaveCount(3)
  const android = apps.filter({ hasText: 'Android' }).filter({ hasText: 'View Google Play listing' })
  await expect(android.getByRole('link', { name: 'View Google Play listing' })).toHaveAttribute('href', 'https://play.google.com/store/apps/details?id=bd.com.evaly.evalyshop')
  const archivedBuilds = [
    ['marketplace', 'iOS', '/evaly-ios-archive.png', 'Archived Evaly iPhone screen'],
    ['food', 'Android & iOS', '/efood-archive.png', 'Archived eFood Android screen'],
  ]
  for (const [art, platform, src, altStart] of archivedBuilds) {
    const card = page.locator(`.app-build-${art}`).filter({ hasText: platform }).filter({ hasText: 'Archived app screen' })
    await expect(card).toHaveCount(1)
    await expect(card.locator('.app-build-screenshot')).toHaveAttribute('src', src)
    await expect(card.locator('.app-build-screenshot')).toHaveAttribute('alt', new RegExp(altStart))
    await expect.poll(() => card.locator('.app-build-screenshot').evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0)
    await expect(card.getByRole('link')).toHaveCount(0)
  }
  for (const asset of ['/evaly-ios-archive.png', '/efood-archive.png']) {
    expect((await page.request.get(asset)).ok()).toBe(true)
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  await page.screenshot({ path: 'test-results/evaly-apps-mobile.png' })
  await page.setViewportSize({ width: 1440, height: 1200 })
  await page.locator('.app-showcase').screenshot({ path: 'test-results/evaly-apps-desktop.png' })
})

test('QCoom case study links Android and shows the archived iOS app screen', async ({ page }) => {
  await page.goto('/#/projects/qcoom')
  await expect(page.getByRole('heading', { name: 'QCoom customer apps' })).toBeVisible()
  const android = page.locator('.app-build').filter({ hasText: 'Android' })
  await expect(android.getByRole('link', { name: 'View on Google Play' })).toHaveAttribute('href', 'https://play.google.com/store/apps/details?id=com.qcoom.qcustomer')
  const ios = page.locator('.app-build').filter({ hasText: 'iOS' }).filter({ hasText: 'Archived App Store screenshot' })
  await expect(ios.locator('.app-build-screenshot')).toHaveAttribute('src', '/qcoom-ios-archive.webp')
  await expect(ios.locator('.app-build-screenshot')).toHaveAttribute('alt', /QCoom iPhone screen/)
  expect((await page.request.get('/qcoom-ios-archive.webp')).ok()).toBe(true)
  await expect(page.locator('.case-meta')).toContainText('Android & iOS')
  await expect(page.locator('.case-meta')).not.toContainText('Employer')
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

test('FMS case study presents eJourney Driver as a Flutter app on Google Play', async ({ page }) => {
  await page.goto('/#/projects/fms')
  await expect(page.getByRole('heading', { name: 'eJourney Driver app' })).toBeVisible()
  const app = page.locator('.app-build-fleet')
  await expect(app.getByRole('heading', { name: 'eJourney Driver' })).toBeVisible()
  await expect(app).toContainText('Flutter')
  const link = app.getByRole('link', { name: 'View on Google Play' })
  await expect(link).toHaveAttribute('href', 'https://play.google.com/store/apps/details?id=ai.ejourney.driver&hl=en')
  await expect(link).toHaveAttribute('target', '_blank')
  await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
})

test('Moneybase is a separate portfolio entry with the four-month add-money contribution', async ({ page }) => {
  await page.goto('/#/projects/moneybase')
  await expect(page.getByRole('heading', { name: 'Moneybase' }).first()).toBeVisible()
  await expect(page.locator('.case-meta')).toContainText('4 months')
  await expect(page.locator('.case-attribution')).toContainText('add-money features')
  await expect(page.getByRole('heading', { name: 'Add-money features' })).toBeVisible()
  const app = page.locator('.app-build-finance')
  await expect(app.getByRole('link', { name: 'View on Google Play' })).toHaveAttribute('href', 'https://play.google.com/store/apps/details?id=com.moneybase&hl=en')
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
