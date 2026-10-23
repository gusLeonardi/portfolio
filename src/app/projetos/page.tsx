"use client";

import { useLanguage } from "@/context/language-context";
import { dictionary } from "@/data/content";
import { projects } from "@/data/projects";
import { formatMonthYear } from "@/lib/format";
import { ProjectMedia } from "@/components/project-media";
import { ExternalLinkIcon, GithubIcon } from "@/components/icons";

export default function ProjectsPage() {
  const { locale } = useLanguage();
  const copy = dictionary.projects;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">/ Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
          <span className="font-mono text-accent">{"// "}</span>
          {copy.title[locale]}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">{copy.subtitle[locale]}</p>
      </header>

      <ol className="projects-grid mt-14">
        {projects.map((project, index) => (
          <li key={project.slug} className="project-list-card group min-w-0 overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_60px_rgba(18,48,36,0.12)]">
            <div className="project-card-media border-b border-border bg-surface-muted">
              <div className="project-card-media-inner overflow-hidden rounded-lg border border-border bg-background">
                <ProjectMedia project={project} locale={locale} />
              </div>
              <span className="absolute left-5 top-5 flex h-8 min-w-8 items-center justify-center rounded-md border border-border bg-surface/95 px-2 font-mono text-[10px] font-semibold text-accent shadow-sm backdrop-blur sm:left-6 sm:top-6">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <article className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                <span className="text-accent">{project.category[locale]}</span>
                {project.date && <><span aria-hidden className="h-1 w-1 rounded-full bg-border"/><time dateTime={project.date}>{formatMonthYear(project.date, locale)}</time></>}
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{project.name}</h2>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-[15px]">{project.description[locale]}</p>

              <div className="mt-7 border-t border-border pt-5">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">{copy.technologies[locale]}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-[11px] font-medium text-foreground">{tech}</span>
                  ))}
                </div>
              </div>

              {(project.githubUrl || project.demoUrl) && <div className="mt-auto flex flex-wrap gap-5 pt-7 text-sm font-semibold">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground transition-colors hover:text-accent">
                    <GithubIcon className="h-4 w-4" />{copy.repository[locale]}
                  </a>
                )}

                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground transition-colors hover:text-accent">
                    <ExternalLinkIcon className="h-4 w-4" />{copy.liveDemo[locale]}
                  </a>
                )}
              </div>}
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
