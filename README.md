# Portfolio

Source for my personal site: [gautham-8.netlify.app](https://gautham-8.netlify.app/).

Built with Vue 3, Vite and Tailwind CSS, deployed on Netlify.

## Running it locally

```sh
pnpm install
pnpm dev
```

`pnpm build` writes the production site to `dist/`.

## Where things live

- `src/data/profile.js`: about text, experience, education, awards, certifications and skills.
- `src/data/projects.js`: projects. Set `featured: true` to show one on the home page.
- `src/views/`: the three pages (home, `/projects`, `/skills`).
- `public/_redirects`: lets Netlify serve `/projects` and `/skills` on a direct visit.

Tags on projects and roles power the filters on `/projects` and `/skills`, so adding a project only means adding an entry to `projects.js`.
