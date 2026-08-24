import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "Primeiro projeto",
    name: "Bibliotech",
    date: "2025-06",
    description: {
      pt: "Desenvolvimento full-stack para um SAAS de controle de empréstimos, usuários e multas de uma biblioteca",
      en: "Full-stack development for a SAAS control of loans, users and fines of a library",
    },
    technologies: ["React", "Node.js", "Java", "SpringBoot", "TypeScript", "MySQL"],
    githubUrl: "https://github.com/gusLeonardi/bibliotech",
    image: "../images/projects/bibliotech.png"
  },
  {
    slug: "Segundo Projeto",
    name: "Jurisflow",
    date: "2026-03",
    description: {
      pt: "Sistema jurídico de busca de jurisprudência, controle de clientes, prazos e revisão de documentos com Inteligência Artificial",
      en: "Legal system featuring case law search, client management, deadline tracking, and AI-powered document review.",
    },
    technologies: ["React", "Vite", "PostgreSQL", "Java", "Docker", "TypeScript"],
    githubUrl: "https://github.com/gusLeonardi/plf-es-2026-1-ti3-5533100-jurisflow",
    image: "../images/projects/jurisflow.png"
  },
  {
    slug: "Terceiro Projeto",
    name: "Emissor NFSe padrão nacional",
    date: "2026-07",
    description: {
      pt: "Migração de um sistema de emissão de NFSe municipal, para o padrão nacional, com Danfse.",
      en: "Migration from a municipal NFSe issuance system to the national standard, including Danfse.",
    },
    technologies: ["PHP", "MySQL", "WinSCP", "ScriptCase"],
    image: "../images/projects/NFSe.png"
  },
];
