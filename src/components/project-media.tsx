import Image from "next/image";
import type { Locale, Project } from "@/lib/types";

export function ProjectMedia({ project, locale, featured = false }: { project: Project; locale: Locale; featured?: boolean }) {
  return <Image
    src={project.image}
    alt={project.imageAlt[locale]}
    fill
    sizes={featured ? "(max-width: 720px) calc(100vw - 36px), (max-width: 1200px) 31vw, 380px" : "(max-width: 720px) calc(100vw - 36px), (max-width: 1100px) 46vw, 520px"}
    quality={90}
    className="project-image"
  />;
}
