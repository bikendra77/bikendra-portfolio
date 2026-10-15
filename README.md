# Bikendra Giri — Developer Portfolio

A single-page developer portfolio built with React + Vite. Dark, futuristic visual
identity (near-black background, cyan/violet accents, orbital hero illustration),
fully responsive, and built to be deployed as a static site.

## Stack

- React 18
- Vite 5
- Plain CSS (no framework) — design tokens in `src/styles/global.css`
- [lucide-react](https://lucide.dev/) for icons

No backend, no database — this is a static front-end site.

## Project structure

```
bikendra-portfolio/
├── index.html
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Projects.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── data/
    │   └── projects.js   ← edit project info here
    └── styles/
        ├── global.css
        └── components.css
```

## Getting started

```bash
npm install
npm run dev
```

This starts a local dev server (Vite will print the URL, usually `http://localhost:5173`).

### Production build

```bash
npm run build
```

Outputs a static, deployable site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Updating your content

Everything project-related lives in one place: `src/data/projects.js`. To add a live
demo link or fix a description, edit the relevant project object — every card reads
from this file, so nothing else needs to change.

A few profile details are intentionally left for you to fill in:

- **LinkedIn URL** — `src/components/Contact.jsx`, the `LINKEDIN_URL` constant. Replace
  it with your real profile link, or delete the LinkedIn `<a>` block in the same file if
  you'd rather not include it.
- **Student Management System repository** — the repository URL currently in
  `projects.js` (`bikendra77/student-management-system`) returned a 404 when this site
  was built, so the project card uses a conservative description and flags the link as
  unverified. Double check the URL and update the entry once the repo is confirmed.

## Deploying

### Vercel

1. Push this project to a GitHub repository.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

### Netlify

1. Push this project to a GitHub repository.
2. In Netlify, "Add new site" → "Import an existing project" → pick the repo.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

Either platform will give you a live URL and automatic redeploys on every push to
`main`.

## Notes

- This is a single page with anchor-based navigation (`#projects`, `#about`, etc.), so
  no client-side router or custom 404 page is included — there's nothing for a router
  to 404 on.
- Respects `prefers-reduced-motion`: orbital animation, floating cards, and scroll
  reveals are disabled for users who have that setting on.
- The contact "form" is a `mailto:` link plus a copy-to-clipboard button — no backend.
  If you want an actual in-page form later, you'd need a service like Formspree, Netlify
  Forms, or a small serverless function to receive submissions.
