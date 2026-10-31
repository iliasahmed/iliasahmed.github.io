import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../content/profile'
export function SectionHeading({ number, label, title, text }: { number: string; label: string; title: ReactNode; text?: string }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div>{text && <p className="section-intro">{text}</p>}</div>
}
export function Contact({ compact = false }: { compact?: boolean }) {
  return <section id="contact" className={`contact-section ${compact ? 'compact-contact' : ''}`}><div className="container contact-inner"><div className="contact-top"><p className="eyebrow">HAVE SOMETHING IN MIND?</p><span>Dhaka, Bangladesh · Working internationally</span></div><h2>Good software starts<br/>with a <em>conversation.</em></h2><p>Tell me what you’re building, where you’re stuck,<br className="desktop-break"/> or what you’d like to make better.</p><a className="contact-email" href={profile.inquiry}>{profile.email}<ArrowUpRight/></a><div className="contact-social"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15}/></a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15}/></a></div></div></section>
}
