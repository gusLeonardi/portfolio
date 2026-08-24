import type { Locale } from "@/lib/types";

export const siteConfig = {
  name: "Gustavo Leonardi",
  role: {
    pt: "Estudante de Engenharia de Software | Desenvolvedor Full-Stack",
    en: "Software Engineering Student | Full-Stack Developer",
  },
  email: "gustavo@mayer.inf.br",
  whatsapp: "5531993995552",
  linkedin: "https://www.linkedin.com/in/gustavo-leonardi-220aa0242/",
  github: "https://github.com/gusLeonardi",
};

export const dictionary = {
  nav: {
    about: { pt: "Sobre Mim", en: "About Me" },
    projects: { pt: "Projetos", en: "Projects" },
    experience: { pt: "Experiências", en: "Experience" },
    contact: { pt: "Contato", en: "Contact" },
  },

  home: {
    greeting: {
      pt: "Olá, eu sou",
      en: "Hi, I'm",
    },

    tagline: {
      pt: "Desenvolvo aplicações web e soluções de software, buscando unir código bem estruturado, interfaces funcionais e soluções para problemas reais.",
      en: "I develop web applications and software solutions, combining well-structured code, functional interfaces, and practical solutions to real-world problems.",
    },

    ctaProjects: {
      pt: "Ver projetos",
      en: "View projects",
    },

    ctaContact: {
      pt: "Fale comigo",
      en: "Get in touch",
    },

    aboutTitle: {
      pt: "Sobre mim",
      en: "About me",
    },

    aboutBody: {
      pt: "Sou estudante de Engenharia de Software e tenho interesse em desenvolvimento full-stack, com maior afinidade pelo back-end. Ao longo da graduação, venho desenvolvendo projetos utilizando tecnologias como Java, Spring Boot, React, TypeScript e bancos de dados relacionais. Gosto de entender o problema antes de partir para o código e buscar soluções organizadas, eficientes e fáceis de manter. Atualmente, procuro oportunidades de estágio onde possa aplicar meus conhecimentos, aprender com profissionais mais experientes e contribuir para projetos reais.",
      en: "I am a Software Engineering student interested in full-stack development, with a stronger focus on back-end development. Throughout my degree, I have been building projects using technologies such as Java, Spring Boot, React, TypeScript, and relational databases. I enjoy understanding the problem before writing code and finding solutions that are organized, efficient, and easy to maintain. I am currently looking for internship opportunities where I can apply my knowledge, learn from experienced professionals, and contribute to real-world projects.",
    },

    focusTitle: {
      pt: "Áreas de atuação",
      en: "Focus areas",
    },

    focusItems: {
      pt: [
        "Desenvolvimento Front-end",
        "Desenvolvimento Back-end",
        "Arquitetura de Software",
        "Engenharia de Software",
        "Inteligência Artificial",
      ],
      en: [
        "Front-end Development",
        "Back-end Development",
        "Software Architecture",
        "Software Engineering",
        "Artificial Intelligence",
      ],
    },

    goalsTitle: {
      pt: "Objetivos",
      en: "Goals",
    },

    goalsBody: {
      pt: "Quero evoluir profissionalmente como engenheiro de software, aprofundando meus conhecimentos em desenvolvimento back-end e full-stack. Busco fazer parte de uma equipe onde possa enfrentar novos desafios, aprender continuamente e contribuir para a construção de soluções de qualidade.",
      en: "I want to grow professionally as a software engineer, deepening my knowledge of back-end and full-stack development. I am looking to be part of a team where I can take on new challenges, continuously learn, and contribute to building high-quality software solutions.",
    },
  },

  projects: {
    title: {
      pt: "Projetos",
      en: "Projects",
    },

    subtitle: {
      pt: "Linha do tempo dos projetos que desenvolvi, do mais antigo ao mais recente.",
      en: "A timeline of the projects I have developed, from oldest to most recent.",
    },

    technologies: {
      pt: "Tecnologias",
      en: "Technologies",
    },

    repository: {
      pt: "Repositório",
      en: "Repository",
    },

    liveDemo: {
      pt: "Ver online",
      en: "Live demo",
    },

    imagePlaceholder: {
      pt: "Imagem/GIF do projeto",
      en: "Project image/GIF",
    },
  },

  experience: {
    title: {
      pt: "Experiências",
      en: "Experience",
    },

    subtitle: {
      pt: "Experiências profissionais, projetos e atividades que fazem parte da minha trajetória na área de tecnologia.",
      en: "Professional experiences, projects, and activities that are part of my journey in technology.",
    },
  },

  contact: {
    title: {
      pt: "Contato",
      en: "Contact",
    },

    subtitle: {
      pt: "Vamos conversar? Envie uma mensagem ou entre em contato comigo por um dos canais abaixo.",
      en: "Let's talk. Send me a message or get in touch through one of the channels below.",
    },

    formName: {
      pt: "Nome",
      en: "Name",
    },

    formEmail: {
      pt: "E-mail",
      en: "Email",
    },

    formMessage: {
      pt: "Mensagem",
      en: "Message",
    },

    formSubmit: {
      pt: "Enviar mensagem",
      en: "Send message",
    },

    formSending: {
      pt: "Enviando...",
      en: "Sending...",
    },

    formSuccess: {
      pt: "Mensagem enviada com sucesso! Responderei em breve.",
      en: "Message sent successfully! I'll get back to you soon.",
    },

    formError: {
      pt: "Não foi possível enviar a mensagem agora. Tente novamente ou utilize um dos canais ao lado.",
      en: "The message could not be sent right now. Please try again or use one of the contact channels.",
    },

    errorRequired: {
      pt: "Preencha este campo.",
      en: "This field is required.",
    },

    errorEmail: {
      pt: "Informe um e-mail válido.",
      en: "Enter a valid email address.",
    },

    errorMinLength: {
      pt: "Escreva uma mensagem um pouco maior.",
      en: "Please write a slightly longer message.",
    },
  },

  footer: {
    rights: {
      pt: "Todos os direitos reservados.",
      en: "All rights reserved.",
    },

    builtWith: {
      pt: "Desenvolvido com Next.js e Tailwind CSS.",
      en: "Built with Next.js and Tailwind CSS.",
    },
  },
} as const;

export function t<T extends Record<Locale, string>>(
  field: T,
  locale: Locale,
): string {
  return field[locale];
}