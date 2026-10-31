import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false, watch: null }, appType: 'custom' })
try {
  const { render } = await server.ssrLoadModule('/scripts/render.tsx')
  const html = await readFile('dist/index.html', 'utf8')
  await writeFile('dist/index.html', html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
  console.log('Pre-rendered homepage with full content for search engines.')
} finally { await server.close() }
