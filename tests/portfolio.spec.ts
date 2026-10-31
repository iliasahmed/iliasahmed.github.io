import { test, expect } from '@playwright/test'
const slugs = ['globo', 'evaly', 'fms', 'carbangla']
test('homepage is pre-rendered and public assets resolve', async ({ request }) => {
  const response = await request.get('/')
  const html = await response.text()
  expect(html).toContain('Your next idea.')
  expect(html).toContain('Real products.')
  expect(html).toContain('GLOBO')
  expect(html).toContain('application/ld+json')
  for (const path of ['/favicon.svg', '/og-image.png', '/robots.txt', '/sitemap.xml', '/Ilias-Ahmed-CV.pdf']) {
    const asset = await request.get(path)
    expect(asset.status(), path).toBe(200)
    expect((await asset.body()).length).toBeGreaterThan(20)
  }
  expect((await request.get('/Ilias-Ahmed-CV.pdf')).headers()['content-type']).toContain('application/pdf')
})
for (const width of [320, 375, 768, 1024, 1440]) {
  test(`responsive layout and navigation at ${width}px`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Your next idea.')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    await expect(page.getByRole('link', { name: 'Discuss your project', exact: true })).toHaveAttribute('href', /mailto:iliasahmed.se@gmail.com/)
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
    await page.goto(`/#/projects/${slug}`)
    await expect(page.locator('.case-study h1')).toBeVisible()
    await expect(page.locator('.case-attribution')).toContainText('while employed at')
    await page.reload()
    await expect(page.locator('.case-study h1')).toBeVisible()
    await page.getByRole('link', { name: 'My contributions', exact: true }).click()
    await expect(page.locator('#contributions')).toBeFocused()
    await expect(page.locator('.case-study h1')).toBeAttached()
    await page.getByRole('link', { name: 'All selected work' }).click()
    await expect(page.locator('#work')).toBeFocused()
    await page.goBack()
    await expect(page.locator('.case-study h1')).toBeVisible()
    await page.goForward()
    await expect(page.locator('#work')).toBeFocused()
    await page.getByRole('link', { name: `Read ${slug === 'globo' ? 'GLOBO' : slug === 'evaly' ? 'Evaly' : slug === 'fms' ? 'FMS' : 'CarBangla'} case study` }).click()
    await expect(page.locator('.case-study h1')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
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
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Your next idea.')
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
