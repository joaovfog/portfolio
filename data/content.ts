// Todo o conteúdo do site fica aqui. Para atualizar textos, projetos ou
// experiências, edite este arquivo; os componentes só cuidam do layout.

export const site = {
  name: "João Vitor Fogaça",
  role: "Desenvolvedor Front-end Pleno",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://joaovfog.vercel.app",
  description:
    "Desenvolvedor Front-end Pleno com 5 anos de experiência em React, Next.js, TypeScript e React Native. Disponível para trabalho remoto.",
  resumePath: "/curriculo-joao-vitor-fogaca.pdf",
};

export const contact = {
  email: "joaovitorfogaca123@gmail.com",
  whatsapp: "https://wa.me/5555991095535",
  linkedin: "https://www.linkedin.com/in/joaovfog/",
  github: "https://github.com/joaovfog",
};

export const highlights = [
  { value: "5 anos", label: "de experiência em front-end" },
  { value: "Web + mobile", label: "Next.js e React Native" },
  { value: "Inglês avançado", label: "leitura e conversação" },
];

export type Project = {
  slug: string;
  context: string;
  title: string;
  summary: string;
  decision?: string;
  bullets?: string[];
  tags: string[];
  /** Caminho em /public. Enquanto for null, aparece um espaço reservado. */
  image: string | null;
  /** Dimensões reais do arquivo, para o Next.js reservar o espaço na proporção certa. */
  imageWidth?: number;
  imageHeight?: number;
  imageAlt: string;
  imagePlaceholder: string;
};

export const projects: Project[] = [
  {
    slug: "gestao-de-haras",
    context: "Peregrina Investimentos · 2024 – atual",
    title: "Sistema de gestão de haras",
    summary:
      "Aplicação web em Next.js e app em React Native para a rotina de um haras. Formulários complexos com React Hook Form e Zod, e dados sincronizados com a API via TanStack Query.",
    decision:
      "Além do app nativo, entreguei uma versão web app, que se mostrou a solução mais vantajosa para o projeto, reaproveitando a mesma arquitetura de formulários e consumo de dados.",
    tags: ["Next.js", "TypeScript", "React Native", "TanStack Query", "React Hook Form", "Zod", "Styled-components"],
    image: "/haras.png",
    imageWidth: 1420,
    imageHeight: 802,
    imageAlt: "Tela do módulo financeiro do HarasPro, com gráficos de receitas e despesas do mês",
    imagePlaceholder: "Print do sistema, sem dados do cliente",
  },
  {
    slug: "plataforma-b2b-imobiliaria",
    context: "Projeto próprio · 2026 · em desenvolvimento",
    title: "Plataforma B2B de lançamentos imobiliários",
    summary:
      "SaaS que conecta construtoras a imobiliárias e corretores do litoral catarinense: empreendimentos, tabelas de vendas e disponibilidade de unidades em um só lugar. Desenvolvimento full-stack, da modelagem do banco à interface.",
    bullets: [
      "Banco multi-tenant com 12 tabelas e Row Level Security isolando os dados de cada organização",
      "Autenticação com magic link e layouts por perfil de acesso",
      "Design system próprio com Tailwind CSS e shadcn/ui",
    ],
    tags: ["Next.js App Router", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "shadcn/ui"],
    image: "/b2b.png",
    imageWidth: 1421,
    imageHeight: 740,
    imageAlt: "Painel da Plataforma JF no ambiente de uma construtora, com os atalhos de perfil, equipe e catálogo",
    imagePlaceholder: "Print da plataforma",
  },
  {
    slug: "academia-fit-light",
    context: "Freelance · em desenvolvimento",
    title: "Site da Academia Fit Light",
    summary:
      "Landing page em Next.js para uma academia. [Descreva o objetivo do site e o resultado quando estiver no ar.]",
    tags: ["Next.js"],
    image: "/academia.png",
    imageWidth: 1406,
    imageHeight: 804,
    imageAlt: "Página inicial do site da Academia Fit Light, com o destaque dos 25 anos e os botões de contato",
    imagePlaceholder: "Print do site",
  },
];

export const experience = [
  {
    period: "2024 – atual",
    title: "Desenvolvedor Front-end · Peregrina Investimentos",
    description:
      "Sistema de gestão de haras, web e mobile, com Next.js, React Native, TanStack Query, React Hook Form e Zod. Remoto.",
  },
  {
    period: "2021 – 2023",
    title: "Desenvolvedor Front-end · Cigam Prime",
    description:
      "Módulos de sistemas ERP web e mobile com React e React Native, Ant Design, Material UI e Styled-components.",
  },
  {
    period: "2020 – 2021",
    title: "Desenvolvedor Front-end · JF Imóveis (freelance)",
    description: "Site imobiliário com cadastro e gestão de imóveis, em Angular e Bootstrap.",
  },
  {
    period: "2019",
    title: "Estagiário Front-end · Conecta Ijuí",
    description: "Sistema CRM em Angular e Bootstrap.",
  },
];

export const stack = [
  { group: "Front-end", items: "React, Next.js, TypeScript, JavaScript, React Native, HTML e CSS" },
  { group: "Dados e formulários", items: "TanStack Query, React Hook Form, Zod e APIs REST" },
  { group: "UI", items: "Tailwind CSS, shadcn/ui, Styled-components, Material UI e Ant Design" },
  { group: "Qualidade e back-end", items: "Jest, Vitest, Git, Node.js, Supabase e PostgreSQL" },
];

export const about = [
  "Gosto de interfaces que parecem simples para quem usa e continuam simples para quem mantém: componentes bem divididos, tipagem forte e validação de dados no lugar certo.",
  "Como também trabalho com Node.js e Supabase, entendo o sistema de ponta a ponta e converso bem com times de back-end.",
  "Bacharel em Ciência da Computação pela Unijuí (2023). Inglês avançado. Moro em Cruz Alta, RS, e trabalho remoto.",
];
