# Portfólio — João Vitor Fogaça

Landing page pessoal feita com Next.js (App Router), React, TypeScript e Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde editar

- **Textos, projetos, experiências e stack:** `data/content.ts`. Os componentes só cuidam do layout.
- **Sua foto:** salve em `public/foto.jpg` e siga o comentário no topo de `components/Hero.tsx`.
- **Prints dos projetos:** salve em `public/projetos/` (ex: `public/projetos/haras.png`) e preencha o campo `image` do projeto em `data/content.ts` com `"/projetos/haras.png"`.
- **Currículo:** exporte o currículo em PDF e salve como `public/curriculo-joao-vitor-fogaca.pdf`. O botão "Baixar currículo" aparece sozinho quando o arquivo existe.

## Publicar na Vercel

1. Crie um repositório público no GitHub (ex: `portfolio`) e envie o projeto:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page do portfólio"
   git branch -M main
   git remote add origin https://github.com/joaovfog/portfolio.git
   git push -u origin main
   ```
2. Em https://vercel.com, entre com o GitHub, clique em **Add New → Project** e importe o repositório. A Vercel detecta o Next.js; é só clicar em **Deploy**.
3. Depois do primeiro deploy, em **Settings → Environment Variables**, crie `NEXT_PUBLIC_SITE_URL` com a URL final do site (ex: `https://joaovfog.vercel.app`) e faça um redeploy. Isso corrige os links de SEO (sitemap e Open Graph).
4. Opcional: em **Settings → Domains**, conecte um domínio próprio.

A cada `git push` na branch `main`, a Vercel publica a nova versão automaticamente.
