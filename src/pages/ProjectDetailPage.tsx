import { ArrowLeft, ArrowRight, ArrowUpRight, AudioLines, CreditCard, ShoppingBag, Smartphone, TabletSmartphone, Truck, UtensilsCrossed } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../content/projects'
import { Contact } from '../components/Common'
import { ProjectArt } from '../components/ProjectArt'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const index = projects.findIndex(p => p.slug === slug)
  const project = projects[index]
  if (!project) return <NotFoundPage/>
  const next = projects[(index + 1) % projects.length]
  const caseMeta = project.meta ?? [
    ...(project.role ? [{ label: 'Role', value: project.role }] : []),
    ...(project.employer ? [{ label: 'Employer', value: project.employer }] : []),
    ...(project.period ? [{ label: 'Period', value: project.period }] : []),
  ]
  const caseAttribution = project.attribution ?? `Work ${project.slug === 'fms' ? 'undertaken' : 'completed'} while employed at ${project.employer ?? 'the listed organization'}. ${project.slug === 'fms' ? 'Remote work for a Saudi fleet-management platform. ' : ''}These are my contributions within a wider product team.`

  return <>
    <article className="case-study container">
      <Link className="back-link" to="/#work"><ArrowLeft size={16}/> All selected work</Link>
      <div className="case-overview">
        <div className="case-heading">
          <p className="eyebrow">{project.name} / {project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-lead">{project.summary}</p>
        </div>
        <ProjectArt kind={project.visual} large/>
      </div>
      {caseMeta.length > 0 && <dl className="case-meta">{caseMeta.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>}
      <p className="case-attribution">{caseAttribution}</p>
      {project.mobileApps && <section id="mobile-apps" className="app-showcase" aria-labelledby="app-showcase-title">
        <div className="app-showcase-heading">
          <div><p className="eyebrow">MOBILE APP PORTFOLIO</p><h2 id="app-showcase-title">{project.mobileAppsTitle}</h2></div>
          <p>{project.mobileAppsIntro}</p>
        </div>
        <div className="app-build-grid">{project.mobileApps.map(app => {
          const PlatformIcon = app.platform === 'Android' ? Smartphone : TabletSmartphone
          const ProductIcon = app.art === 'language' ? AudioLines : app.art === 'marketplace' ? ShoppingBag : app.art === 'fleet' ? Truck : app.art === 'finance' ? CreditCard : UtensilsCrossed
          return <article className={`app-build app-build-${app.art}`} key={`${app.name}-${app.platform}`}>
            <div className={`app-build-art${app.screenshot ? ' has-screenshot' : ''}`}>
              <span className="app-build-platform"><PlatformIcon size={18}/>{app.platform}</span>
              {app.screenshot ? <>
                <img className="app-build-screenshot" src={app.screenshot} alt={app.screenshotAlt ?? `${app.name} app screen.`} loading="lazy" />
                {app.screenshotCaption && <span className="app-screenshot-caption">{app.screenshotCaption}</span>}
              </> : <>
                <div className="app-product-mark" aria-hidden="true"><ProductIcon size={28}/></div>
                <span className="app-art-caption">Conceptual product mark</span>
              </>}
            </div>
            <div className="app-build-copy">
              <p className="eyebrow">{app.name.toUpperCase()} / {app.platform.toUpperCase()}</p>
              <h3>{app.name}</h3><p>{app.summary}</p>
              {app.linkUrl && app.linkLabel ? <a className="app-store-link" href={app.linkUrl} target="_blank" rel="noopener noreferrer">{app.linkLabel}<ArrowUpRight size={16}/></a> : <p className="app-archive-note">Archived app screen · no longer listed</p>}
            </div>
          </article>
        })}</div>
      </section>}
      <div className="case-content">
        <aside>
          <p className="eyebrow">IN THIS CASE STUDY</p>
          <nav aria-label="Case study sections">
            {project.mobileApps && <Link to={`/projects/${project.slug}#mobile-apps`}>Mobile app portfolio</Link>}
            <Link to={`/projects/${project.slug}#challenge`}>The context</Link>
            <Link to={`/projects/${project.slug}#contributions`}>My contributions</Link>
            <Link to={`/projects/${project.slug}#approach`}>Engineering approach</Link>
            <Link to={`/projects/${project.slug}#outcome`}>The outcome</Link>
          </nav>
        </aside>
        <div className="case-body">
          <section id="challenge">
            <p className="eyebrow">01 / CONTEXT</p><h2>The problem space</h2><p>{project.challenge}</p>
          </section>
          <section id="contributions">
            <p className="eyebrow">02 / CONTRIBUTIONS</p><h2>What I worked on</h2>
            <ol className="contribution-list">{project.contributions.map((item, i) => <li key={item.title}>
              <span aria-hidden="true">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div>
            </li>)}</ol>
          </section>
          <section id="approach">
            <p className="eyebrow">03 / ENGINEERING</p><h2>The engineering approach</h2><p>{project.approach}</p>
            <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </section>
          <section id="outcome">
            <p className="eyebrow">04 / OUTCOME</p><h2>Delivered with the team</h2><p>{project.outcome}</p>
          </section>
        </div>
      </div>
      <Link className="next-project" to={`/projects/${next.slug}`}>
        <div><span className="eyebrow">NEXT CASE STUDY</span><h2>{next.name} <ArrowUpRight size={24}/></h2><p>{next.category}</p></div><ArrowRight size={28}/>
      </Link>
    </article>
    <Contact compact/>
  </>
}

export function NotFoundPage() {
  return <section className="not-found container">
    <p className="eyebrow">404 / PAGE NOT FOUND</p><h1>A small detour.</h1>
    <p>This page doesn’t exist. There’s plenty to explore back at home.</p>
    <Link className="button primary" to="/">Back to the portfolio <ArrowRight size={17}/></Link>
  </section>
}
