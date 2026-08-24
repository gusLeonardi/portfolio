# Portfólio Profissional

Portfólio profissional bilíngue (**Português/Inglês**) e responsivo,
desenvolvido para o **Laboratório 1 da disciplina Projeto de Software
--- Engenharia de Software, PUC Minas**.

O site apresenta informações profissionais, projetos desenvolvidos,
experiências e formas de contato. A aplicação também possui alternância
entre tema claro e escuro e formulário de contato com envio de e-mail
por meio de uma API própria.

## 🌐 Site publicado

**Portfólio:** https://portfolio-delta-liart-63.vercel.app

## 🎨 Protótipo

Os wireframes e o protótipo da interface foram desenvolvidos no Figma.

**Figma:**
https://www.figma.com/design/DV5dIJR6QSNuIARWeF3Suw/Prototipo-Portfolio?node-id=0-1

## 👥 Equipe

-   Felipe Costa
-   Sofia Fernandes
-   Arthur Martins
-   Gustavo Leonardi

> Cada integrante possui seu próprio portfólio e repositório,
> compartilhando apenas a estrutura e os componentes-base desenvolvidos
> pela equipe.

## 🚀 Funcionalidades

-   Interface bilíngue em Português e Inglês;
-   Tema claro e escuro;
-   Layout responsivo para diferentes tamanhos de tela;
-   Página **Sobre Mim** com apresentação, áreas de atuação e objetivos
    profissionais;
-   Página **Projetos** com linha do tempo;
-   Tecnologias utilizadas em cada projeto;
-   Links para repositórios públicos dos projetos, quando disponíveis;
-   Imagens dos projetos em funcionamento;
-   Página **Experiências** com histórico profissional;
-   Página **Contato** com e-mail, WhatsApp, LinkedIn e GitHub;
-   Formulário de contato com validação;
-   Envio de e-mails pelo back-end utilizando Resend;
-   Proteção básica contra spam utilizando honeypot.

## 🛠️ Tecnologias

-   **Next.js** --- framework React full-stack com App Router e API
    Routes.
-   **React** --- biblioteca para construção das interfaces.
-   **TypeScript** --- tipagem estática.
-   **Tailwind CSS** --- estilização, responsividade e temas
    claro/escuro.
-   **Resend** --- envio de e-mails pelo formulário de contato.
-   **Vercel** --- hospedagem e deploy da aplicação.

## 📦 Principais dependências

-   Next.js
-   React
-   React DOM
-   TypeScript
-   Tailwind CSS
-   Resend

As versões utilizadas podem ser consultadas no arquivo `package.json`.

## 📁 Estrutura de diretórios

``` text
src/
├── app/
│   ├── page.tsx
│   ├── projetos/
│   ├── experiencias/
│   ├── contato/
│   └── api/
│       └── contact/
├── components/
├── context/
├── data/
└── lib/
```

## 💻 Como executar localmente

### Pré-requisitos

-   Node.js 20 ou superior
-   npm
-   Git

### 1. Clone o repositório

``` bash
git clone https://github.com/gusLeonardi/portfolio.git
cd portfolio
```

### 2. Instale as dependências

``` bash
npm install
```

### 3. Configure o formulário de contato

Crie um arquivo `.env.local` na raiz do projeto:

``` env
RESEND_API_KEY=sua_chave_do_resend
CONTACT_EMAIL_TO=seu_email
```

> Nunca envie o arquivo `.env.local` ou sua `RESEND_API_KEY` para o
> GitHub.

### 4. Execute a aplicação

``` bash
npm run dev
```

Acesse `http://localhost:3000`.

## 🔧 Outros comandos

``` bash
npm run build
npm run start
npm run lint
```

## 📸 Capturas de tela

  -------------------------------------------------------------------------------------
  Sobre Mim                                Projetos
  ---------------------------------------- --------------------------------------------
  ![Página Sobre                           ![Página
  Mim](./docs/screenshots/sobre-mim.jpg)   Projetos](./docs/screenshots/projetos.jpg)

  -------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------
  Experiências                                         Contato
  ---------------------------------------------------- ------------------------------------------
  ![Página                                             ![Página
  Experiências](./docs/screenshots/experiencias.jpg)   Contato](./docs/screenshots/contato.jpg)

  -----------------------------------------------------------------------------------------------

## ☁️ Deploy

A aplicação está hospedada na **Vercel** e integrada ao repositório do
GitHub. Novos commits enviados para a branch de produção geram
automaticamente um novo deploy.

**Aplicação publicada:** https://portfolio-delta-liart-63.vercel.app

Para o formulário funcionar em produção, configure na Vercel:

``` env
RESEND_API_KEY
CONTACT_EMAIL_TO
```

## 📚 Projeto acadêmico

Projeto desenvolvido para a disciplina **Projeto de Software**, do curso
de **Engenharia de Software da PUC Minas**, como parte do Laboratório 1
--- Portfólio Profissional.
