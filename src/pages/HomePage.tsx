import { ArrowDown, ArrowRight, ArrowUpRight, Braces, MapPin, Smartphone, Layers3, TabletSmartphone, PanelsTopLeft, Radio, Sparkles, ShieldCheck, GitBranch, UsersRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile, stats } from '../content/profile'
import { projects } from '../content/projects'
import { services, process } from '../content/services'
import { skills } from '../content/skills'
import { experience, education } from '../content/experience'
import { Contact, SectionHeading } from '../components/Common'
import { ProjectArt } from '../components/ProjectArt'
const expertiseIcons: Record<(typeof skills)[number]['category'], LucideIcon> = {
  'Android development': Smartphone,
  'Architecture & data': Layers3,
  'iOS development': TabletSmartphone,
  'Cross-platform': PanelsTopLeft,
  'Real-time communication': Radio,
  'AI & mobile intelligence': Sparkles,
  'Testing & quality': ShieldCheck,
  'Delivery & product': GitBranch,
  'Technical leadership': UsersRound,
}
function Hero() {
  return <section className="hero container" aria-labelledby="hero-title">
    <p className="eyebrow">{profile.headline}</p>
    <div className="hero-copy">
      <h1 id="hero-title">I build mobile apps and <span><span className="nowrap">full-stack</span> software.</span></h1>
      <p className="hero-description">I’m Ilias Ahmed, a software engineer with 10+ years of experience. I help businesses build reliable Android and iOS apps using native development or Flutter, connect complex systems, and take software from idea to launch.</p>
      <div className="hero-actions"><a className="button primary" href={profile.inquiry}>Discuss your project <ArrowUpRight size={18}/></a><Link className="button text-button" to="/#work">Explore my work <ArrowDown size={16}/></Link></div>
      <p className="hero-location"><MapPin size={14}/> Dhaka, Bangladesh · Working internationally</p>
    </div>
    <div className="proof-row">{stats.map(stat => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
  </section>
}
function FeaturedWork() {
  return <section id="work" className="section container">
    <SectionHeading label="01 / SELECTED WORK" title="The work behind the experience." text="A closer look at mobile products I’ve helped build, modernize, and deliver with product teams."/>
    <div className="project-grid">{projects.map(project => <Link className="project-card" key={project.slug} to={`/projects/${project.slug}`} aria-label={`Read ${project.name} case study`}>
      <ProjectArt kind={project.visual}/>
      <div className="project-info">
        <p className="project-category">{project.category}</p>
        <div className="project-title"><h3>{project.name}</h3><ArrowUpRight size={20}/></div>
        <p className="project-summary">{project.contributionSummary}</p>
        <div className="tag-list">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-attribution">{project.meta ? project.meta.map(item => <p key={item.label}>{item.label}: {item.value}</p>) : <><p>{project.role}</p><p>{project.employer}</p><p>{project.period}</p></>}</div>
        <span className="project-read">Read case study <ArrowRight size={15}/></span>
      </div>
    </Link>)}</div>
    <p className="work-note">Employer case studies identify their employment context. Other product contributions are labelled on their case study pages.</p>
  </section>
}
function Services() {
  return <section id="services" className="section services-section"><div className="container"><SectionHeading label="SERVICES" title="How I can help" text="Whether you’re starting something new or improving an existing product, I can help with the parts that matter."/><div className="services-grid">{services.map(service => <article className="service-card" key={service.title}><h3>{service.title}</h3><p>{service.text}</p><span className="service-detail">{service.detail}</span></article>)}</div><div className="service-bottom"><span>One engineer. A connected view of your product.</span><a href={profile.inquiry}>Let’s find the right approach <ArrowRight size={17}/></a></div></div></section>
}
function Expertise() {
  return <section id="expertise" className="section container">
    <SectionHeading label="CAPABILITIES" title="Technical expertise" text="The technologies and practices I use to build, deliver, and maintain connected products."/>
    <div className="skills-grid">{skills.map(group => {
      const Icon = expertiseIcons[group.category]
      return <article className={`skill-card${group.category === 'Android development' ? ' skill-card-core' : ''}`} key={group.category}>
        <div className="skill-card-heading"><span className="skill-icon"><Icon size={21} aria-hidden="true"/></span>{group.category === 'Android development' && <span className="skill-focus">CORE EXPERTISE</span>}</div>
        <h3>{group.category}</h3><p>{group.description}</p>
        <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
      </article>
    })}</div>
    <div className="fullstack-note"><Braces size={24}/><div><h3>Beyond the mobile screen</h3><p>Full-stack applications, REST APIs, backend integrations, and databases — planned as part of one connected product.</p></div><a href={profile.inquiry} aria-label="Discuss a full-stack project"><ArrowUpRight size={24}/></a></div>
  </section>
}
function Process() {
  return <section id="process" className="section process-section"><div className="container"><div className="process-shell">
    <div className="process-heading"><div><p className="eyebrow">COLLABORATION</p><h2>How I work</h2></div><div className="process-intro"><p>A clear, collaborative path from understanding the problem to supporting the product after release.</p><a href={profile.inquiry}>Discuss your project <ArrowUpRight size={17}/></a></div></div>
    <ol className="process-grid">{process.map(([title, text], i) => <li key={title}><span className="process-marker" aria-hidden="true">0{i + 1}</span><div className="process-card"><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
  </div></div></section>
}
function About() {
  return <section id="about" className="section about-section"><div className="container"><div className="about-panel">
    <div className="about-copy"><p className="eyebrow">ABOUT</p><h2>Engineering for products people rely on.</h2><p>I’m Ilias Ahmed, a software engineer based in Dhaka, Bangladesh. My work spans language services, commerce, mobility, and fleet operations.</p><p>I work with international product teams across mobile, frontend, and backend development. I’ve also led mobile engineering teams of up to seven developers.</p>
      <dl className="about-facts"><div><dt>Experience</dt><dd>10+ years building production software</dd></div><div><dt>Team leadership</dt><dd>Mobile teams of up to seven developers</dd></div><div><dt>Working with</dt><dd>International, cross-functional teams</dd></div></dl>
      <div className="about-actions"><a className="button primary" href="/Ilias-Ahmed-CV.pdf" download>Download my CV <ArrowDown size={15}/></a><a className="inline-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17}/></a></div>
      <details className="education"><summary>Education <span>+</span></summary>{education.map(item => <p key={item}>{item}</p>)}</details>
    </div>
    <div className="about-experience"><div className="experience-heading"><div><p className="eyebrow">CAREER HISTORY</p><h3>Experience in context</h3></div><span>2016 — Present</span></div><div className="experience">{experience.map((job, i) => <article className={`experience-item${i === 0 ? ' experience-item-current' : ''}`} key={job.company}><div className={`timeline-dot ${i === 0 ? 'current' : ''}`}/><p className="experience-date">{job.date}</p><h4>{job.company}</h4><p className="experience-role">{job.role}</p><p>{job.detail}</p></article>)}</div></div>
  </div></div></section>
}
export function HomePage() { return <><Hero/><FeaturedWork/><Services/><Expertise/><Process/><About/><Contact/></> }
