"use client";

import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/Profile.png";
import { useLanguage } from "@/context/language-context";
import { dictionary, siteConfig } from "@/data/content";
import { projects } from "@/data/projects";
import { ProjectMedia } from "@/components/project-media";

const stack = ["Java", "Spring Boot", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Next.js", "Git", "Inteligência Artificial"];

export default function Home() {
  const { locale } = useLanguage();
  const copy = dictionary.home;
  const pt = locale === "pt";
  const featured = projects.filter(project => ["jurisflow", "physio-hub", "bibliotech"].includes(project.slug));
  return <div className="portfolio-home">
    <section className="hero page-shell">
      <div className="hero-copy animate-rise"><p className="eyebrow"><span className="status-dot"/>{copy.availability[locale]}</p><p className="hero-intro">{copy.greeting[locale]}</p><h1>Gustavo<br/><span>Leonardi<span className="period">.</span></span></h1><p className="hero-role">{siteConfig.role[locale]}</p><p className="hero-description">{copy.tagline[locale]}</p><div className="hero-actions"><Link className="primary-action" href="/projetos">{copy.ctaProjects[locale]} <span>↗</span></Link><Link className="secondary-action" href="/contato">{copy.ctaContact[locale]} <span>→</span></Link></div><div className="hero-social"><span>Belo Horizonte, BR</span><i/><a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      <div className="hero-visual animate-rise"><div className="portrait-halo"/><div className="portrait-frame"><Image src={profileImage} alt={pt ? "Retrato de Gustavo Leonardi" : "Portrait of Gustavo Leonardi"} fill preload sizes="(max-width: 720px) 290px, 380px" quality={90} className="portrait-image"/></div><div className="floating-tag tag-top">✳ SOFTWARE ENGINEERING</div><div className="floating-tag tag-bottom"><span className="status-dot"/>{pt ? "CONSTRUINDO SOLUÇÕES REAIS" : "BUILDING REAL SOLUTIONS"}</div></div>
    </section>
    <section className="expertise-strip"><div className="page-shell expertise-inner"><small>{pt ? "TECNOLOGIAS & FERRAMENTAS" : "TECHNOLOGIES & TOOLS"}</small><div>{stack.slice(0, 6).map(item => <span key={item}>{item}</span>)}</div></div></section>
    <section className="section-block page-shell"><div className="section-heading"><div><p className="section-kicker">/ 01 — {pt ? "TRABALHOS SELECIONADOS" : "SELECTED WORK"}</p><h2>{pt ? "Projetos que" : "Work that"}<br/><em>{pt ? "viraram realidade." : "became real."}</em></h2></div><Link href="/projetos" className="text-link">{pt ? "Todos os projetos" : "All projects"} ↗</Link></div><div className="featured-grid">{featured.map((project, index) => <article className="project-card" key={project.slug}><div className="featured-image"><ProjectMedia project={project} locale={locale} featured/><span className="project-number">0{index + 1}</span></div><div className="project-info"><div><p className="project-type">{project.category[locale]}</p><h3>{project.name}</h3><p>{project.description[locale]}</p></div><div className="project-tags">{project.technologies.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div></div></article>)}</div></section>
    <section className="about-band"><div className="page-shell about-layout"><div><p className="section-kicker">/ 02 — {pt ? "SOBRE MIM" : "ABOUT ME"}</p><h2>{copy.aboutTitle[locale]}</h2></div><div className="about-text"><p>{copy.aboutBody[locale]}</p><p>{copy.goalsBody[locale]}</p><Link className="text-link" href="/experiencias">{pt ? "Conheça minha trajetória" : "Explore my journey"} ↗</Link></div></div></section>
    <section className="section-block page-shell"><div className="section-heading"><div><p className="section-kicker">/ 03 — {pt ? "COMPETÊNCIAS" : "TOOLKIT"}</p><h2>{pt ? "Tecnologia é meio." : "Technology is a tool."}<br/><em>{pt ? "Resolver é o objetivo." : "Solving is the goal."}</em></h2></div></div><div className="skills-cloud">{stack.map((item, index) => <span className={index < 4 ? "strong" : ""} key={item}>{item}<b>↗</b></span>)}</div></section>
    <section className="closing-section"><div className="page-shell"><p className="section-kicker">/ 04 — {pt ? "VAMOS CONVERSAR" : "LET'S CONNECT"}</p><h2>{pt ? "Tem uma ideia ou uma oportunidade?" : "Have an idea or an opportunity?"}</h2><Link className="closing-action" href="/contato">{pt ? "Vamos construir algo juntos" : "Let's build something together"} <span>↗</span></Link></div></section>
  </div>;
}
