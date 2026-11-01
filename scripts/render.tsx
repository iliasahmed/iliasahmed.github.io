import { renderToString } from 'react-dom/server'
import { createPath, Router, type Navigator } from 'react-router-dom'
import App from '../src/App'

function preventNavigation() { throw new Error('Cannot navigate during pre-rendering') }

// Match HashRouter's hrefs so hydration and opening links in new tabs preserve
// GitHub Pages routes. MemoryRouter would emit /projects/... paths instead.
const navigator: Navigator = {
  createHref: to => `#${typeof to === 'string' ? to : createPath(to)}`,
  go: preventNavigation,
  push: preventNavigation,
  replace: preventNavigation,
}

export function render() { return renderToString(<Router location="/" navigator={navigator} static><App/></Router>) }
