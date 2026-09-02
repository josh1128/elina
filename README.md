# Elina Flipbook

A simple romantic flipbook built with Next.js and Tailwind CSS, ready for Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Customize

Edit `data/book.ts` to change the title, captions, page text, occasion, and photo paths.

The current front-cover image is embedded directly in the project from the uploaded lake photo so the site works immediately without needing an external image host.

For additional photos, add files under `public/photos/` and reference them in `data/book.ts`, e.g. `/photos/photo1.jpg`.

## Deploy to Vercel

1. Import `josh1128/elina` into Vercel.
2. Keep the default Next.js settings.
3. Click **Deploy**.

No environment variables or database are required.
