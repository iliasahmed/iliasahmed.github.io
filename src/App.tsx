import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header, Footer } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { NotFoundPage, ProjectDetailPage } from './pages/ProjectDetailPage'
import { projects } from './content/projects'
function NavigationEffects() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)
  useEffect(() => {
    const pathChanged = previousPath.current !== pathname
    previousPath.current = pathname
    const project = projects.find(p => pathname === `/projects/${p.slug}`)
    document.title = project ? `${project.name} Case Study | Ilias Ahmed` : pathname === '/' ? 'Ilias Ahmed | Mobile & Full-Stack Software Engineer' : 'Page Not Found | Ilias Ahmed'
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      target?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }) }
    } else {
      window.scrollTo(0, 0)
      if (pathChanged) document.getElementById('main-content')?.focus({ preventScroll: true })
    }
  }, [pathname, hash])
  return null
}
export default function App() { return <><a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); document.getElementById('main-content')?.focus(); document.getElementById('main-content')?.scrollIntoView() }}>Skip to content</a><Header/><main id="main-content" tabIndex={-1}><Routes><Route path="/" element={<HomePage/>}/><Route path="/projects/:slug" element={<ProjectDetailPage/>}/><Route path="*" element={<NotFoundPage/>}/></Routes></main><Footer/><NavigationEffects/></> }
