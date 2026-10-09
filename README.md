# Rahul Bangar — Portfolio

Personal portfolio site, live at **https://rahul-bangar.github.io/portfolio/**

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It ships as a static site — the production build outputs plain HTML + a single CSS file with no client-side JS framework bundle, so it loads instantly. All interactivity (scroll reveal, typing effect, project filter, animated skill bars, contact form) runs on small inline scripts.

## Tech stack

- **Astro 4** — static site generator, component-based
- **Tailwind CSS 3** — utility-first styling with custom theme tokens
- **Font Awesome 6** — icons (via CDN)
- **Google Fonts** — Sora (display) + Inter (body)
- **GitHub Actions + GitHub Pages** — CI build and deploy

The contact form uses a plain `mailto:` link (no backend, no third-party email service).

## Project structure

```
portfolio/
├── public/                 # static assets served as-is (images, PDFs, favicon)
│   └── img/                # photos, project thumbnails, badge photo
├── src/
│   ├── layouts/
│   │   └── Base.astro      # HTML shell: <head>, meta, fonts, global CSS
│   ├── components/         # one file per page section
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Education.astro
│   │   ├── Work.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   └── index.astro     # composes all sections + inline scripts
│   └── styles/
│       └── global.css      # Tailwind directives + helper classes
├── astro.config.mjs        # site + base path (/portfolio) + integrations
├── tailwind.config.mjs     # theme tokens, colors, fonts, animations
└── .github/workflows/
    └── deploy.yml           # build + deploy to GitHub Pages
```

## Local development

Requires Node.js 20+.

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:4321/portfolio/
npm run build      # production build into dist/
npm run preview    # preview the production build locally
```

> The site is served under the `/portfolio/` base path (it's a GitHub project page), so always open `http://localhost:4321/portfolio/` — not the bare root.

## Deployment

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`). On every push to the `irahull` branch, the workflow builds the site and publishes `dist/` to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

You can also trigger a deploy manually from the Actions tab (`workflow_dispatch`).

## Updating content

All content lives in the section components under `src/components/`:

| What to change            | Where                           |
| ------------------------- | ------------------------------- |
| Name, intro, typing text  | `src/components/Hero.astro`     |
| Bio, skills, tech chips   | `src/components/About.astro`    |
| Work history / timeline   | `src/components/Experience.astro` |
| Education                 | `src/components/Education.astro`  |
| Projects                  | `src/components/Work.astro`     |
| Contact details & socials | `src/components/Contact.astro`  |
| Nav links                 | `src/components/Nav.astro`      |
| Colors, fonts, animations | `tailwind.config.mjs`           |

Images, the résumé PDF, and other downloads go in `public/` and are referenced with the `/portfolio/` base prefix (handled via `import.meta.env.BASE_URL`).

### Contact form

The contact form has no backend and no third-party service. On submit, a small
script (`src/components/Contact.astro`) builds a `mailto:` link from the fields
and opens the visitor's email client with the message pre-filled. To change the
recipient, edit the `TO` constant in that component. Nothing to configure or
maintain.

## License

Personal project © Rahul Bangar.
