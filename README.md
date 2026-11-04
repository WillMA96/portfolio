# Portfolio · William Martínez Acosta

Personal portfolio built with [Astro](https://astro.build). Static site, no backend.

## Run locally

Requires Node 22 (`nvm use` picks it from `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/
```

## Where things live

- `src/data/profile.ts`: **all the content** (bio, experience, skills, projects, awards, personal section). Edit this file to change any text.
- `src/components/*.astro`: one component per section. They only loop over the data.
- `src/layouts/Base.astro`: html head, nav and footer.
- `src/styles/global.css`: the only stylesheet.
- `public/cv.pdf`: the downloadable CV.
- `public/images/`: photos. Drop files here and list them in `personal.photos` inside `profile.ts`, e.g.

```ts
photos: [
  { src: "/images/me-and-carlitos.jpg", alt: "William and his cat Carlitos", caption: "Carlitos, head of QA" },
]
```

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub.
2. **Add New → Project → Import** `WillMA96/portfolio` (works with private repos).
3. Vercel detects Astro automatically (build `astro build`, output `dist`). Click **Deploy**.
4. Every push to `main` redeploys. The site gets a `*.vercel.app` URL; a custom domain can be added in the project settings.

From the terminal instead:

```bash
npx vercel login
npx vercel --prod
```
