import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'
const container = document.getElementById('root')!
const app = <React.StrictMode><HashRouter><App/></HashRouter></React.StrictMode>
// The home page is pre-rendered for indexing. Detail hashes are rendered afresh.
if (container.hasChildNodes() && (!window.location.hash || window.location.hash === '#/' || window.location.hash.startsWith('#/#'))) hydrateRoot(container, app)
else createRoot(container).render(app)
