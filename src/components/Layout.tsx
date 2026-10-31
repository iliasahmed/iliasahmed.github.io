import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Code2, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../content/profile'
const nav = ['Work', 'Services', 'Expertise', 'About', 'Contact']
export function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLElement>(null)
  const location = useLocation()
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const links = menu.current?.querySelectorAll<HTMLAnchorElement>('a')
    links?.[0]?.focus()
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
      if (event.key === 'Tab' && links?.length) {
        if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); toggle.current?.focus() }
        else if (!event.shiftKey && document.activeElement === links[links.length - 1]) { event.preventDefault(); toggle.current?.focus() }
        else if (document.activeElement === toggle.current) { event.preventDefault(); (event.shiftKey ? links[links.length - 1] : links[0]).focus() }
      }
    }
    const desktop = window.matchMedia('(min-width: 801px)')
    const onResize = () => { if (desktop.matches) setOpen(false) }
    desktop.addEventListener('change', onResize)
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey); desktop.removeEventListener('change', onResize) }
  }, [open])
  function close() { setOpen(false) }
  return <header className="site-header"><div className="container header-inner">
    <Link to="/" className="brand" aria-label="Ilias Ahmed, home" onClick={close}><span className="monogram">ia<span>.</span></span><span>Ilias Ahmed<span className="brand-dot">.</span></span></Link>
    <nav aria-label="Main navigation" className="desktop-nav">{nav.map(item => <Link key={item} to={`/#${item.toLowerCase()}`} aria-current={location.hash === `#${item.toLowerCase()}` ? 'location' : undefined}>{item}</Link>)}</nav>
    <a className="header-contact" href={profile.inquiry}>Let’s talk <ArrowUpRight size={15}/></a>
    <button ref={toggle} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    {open && <nav ref={menu} id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{nav.map((item, i) => <Link key={item} to={`/#${item.toLowerCase()}`} onClick={close}><span>0{i + 1}</span>{item}<ArrowUpRight size={20}/></Link>)}<p>Thoughtful software. Built together.</p></nav>}
  </div></header>
}
export function Footer() {
  return <footer className="site-footer container"><Link className="footer-name" to="/">Ilias Ahmed<span>.</span></Link><p>© {new Date().getFullYear()} Ilias Ahmed</p><div><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Ilias Ahmed on GitHub"><Code2 size={18}/></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Ilias Ahmed on LinkedIn"><span className="linkedin-mark" aria-hidden="true">in</span></a><a href="#top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); document.getElementById('main-content')?.focus({ preventScroll: true }) }} aria-label="Back to top">Back to top ↑</a></div></footer>
}
