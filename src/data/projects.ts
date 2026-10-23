import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "jurisflow", name: "JurisFlow", date: "2026-03",
    category: { pt: "Legal tech + IA", en: "Legal tech + AI" },
    description: {
      pt: "Sistema de gestão jurídica desenvolvido para um cliente real. Centraliza clientes, processos, documentos, agenda e consultas de jurisprudência, além de integrar a IA generativa Gemini para revisão ortográfica e semântica e para a geração de resumos de documentos.",
      en: "Legal management system developed for a real client. It centralizes clients, cases, documents, schedules, and case-law searches, while integrating Gemini generative AI for spelling and semantic review and document summarization.",
    },
    technologies: ["React", "TypeScript", "Vite", "Java", "PostgreSQL", "Docker", "Gemini API"],
    githubUrl: "https://github.com/gusLeonardi/plf-es-2026-1-ti3-5533100-jurisflow",
    image: "/images/projects/jurisflow.png",
    imageAlt: { pt: "Dashboard do sistema de gestão jurídica JurisFlow", en: "JurisFlow legal management system dashboard" },
  },
  {
    slug: "physio-hub", name: "Physio-HUB",
    category: { pt: "Gestão de clínica", en: "Clinic management" },
    description: {
      pt: "Sistema de gestão para uma clínica de fisioterapia, com cadastros de pacientes e profissionais, controle de agendamentos e experiências específicas para pacientes, fisioterapeutas e recepção. O fluxo também contempla lembretes automáticos por e-mail para apoiar a rotina da clínica.",
      en: "Management system for a physiotherapy clinic, with patient and professional records, appointment control, and role-specific experiences for patients, physiotherapists, and reception staff. The workflow also includes automated email reminders to support the clinic's routine.",
    },
    technologies: ["React", "TypeScript", "Vite", "Node.js", "JavaScript", "PostgreSQL", "Docker"],
    image: "/images/projects/physio-hub.png",
    imageAlt: { pt: "Tela de acesso do sistema de clínica de fisioterapia Physio-HUB", en: "Physio-HUB physiotherapy clinic system sign-in screen" },
  },
  {
    slug: "bibliotech", name: "Bibliotech", date: "2025-06",
    category: { pt: "Gestão de biblioteca", en: "Library management" },
    description: {
      pt: "Sistema web para apoiar a gestão de uma biblioteca e o acesso ao acervo. A interface reúne consulta de livros e materiais, empréstimos e reservas, recursos digitais, cadastro de usuários e controle de multas em uma experiência construída com componentes React.",
      en: "Web system that supports library management and access to its collection. The interface brings together book and material searches, loans and reservations, digital resources, user records, and fine control in an experience built with React components.",
    },
    technologies: ["React", "Node.js", "Java", "Spring Boot", "TypeScript", "MySQL"],
    githubUrl: "https://github.com/gusLeonardi/bibliotech",
    image: "/images/projects/bibliotech.png",
    imageAlt: { pt: "Página inicial do sistema de biblioteca Bibliotech", en: "Bibliotech library system home page" },
  },
  {
    slug: "emissor-nfse", name: "Emissor NFSe padrão nacional", date: "2026-07",
    category: { pt: "Software fiscal", en: "Tax software" },
    description: {
      pt: "Migração de um sistema municipal de emissão de Nota Fiscal de Serviço eletrônica para o padrão nacional. O trabalho contempla a adequação do fluxo de emissão e a geração do DANFSe, preservando a integração com a operação fiscal existente.",
      en: "Migration of a municipal electronic service invoice system to Brazil's national standard. The work covers adapting the issuance workflow and generating the DANFSe while preserving integration with the existing tax operation.",
    },
    technologies: ["PHP", "MySQL", "WinSCP", "ScriptCase"],
    image: "/images/projects/NFSe.png",
    imageAlt: { pt: "Tela de emissão de NFS-e no padrão nacional", en: "National-standard electronic service invoice issuance screen" },
  },
];
