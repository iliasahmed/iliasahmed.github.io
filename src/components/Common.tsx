import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../content/profile'
export function SectionHeading({ label, title, text }: { label: string; title: ReactNode; text?: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{label}</p><h2>{title}</h2></div>{text && <p className="section-intro">{text}</p>}</div>
}
export function Contact({ compact = false }: { compact?: boolean }) {
  return <section id="contact" className={`contact-section ${compact ? 'compact-contact' : ''}`}><div className="container contact-inner"><div className="contact-top"><p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p><span>{profile.location} · Working internationally</span></div><h2>Have a project in mind?</h2><p>Tell me what you’re building, where you’re stuck, or what you’d like to make better.</p><div className="contact-actions"><a className="button primary" href={profile.inquiry}>Discuss your project <ArrowUpRight size={18}/></a><a className="contact-email" href={profile.inquiry}>{profile.email}<ArrowUpRight size={18}/></a></div><div className="contact-social"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16}/></a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16}/></a></div></div></section>
}
