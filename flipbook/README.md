# Our Story ❤️ — a digital scrapbook flipbook

A clean, romantic, photo-focused flipbook. Built with Next.js, React,
Tailwind CSS, Framer Motion, and `react-pageflip`. No database, no
environment variables, deploys straight to Vercel.

---

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

To make a production build:

```bash
npm run build
npm start
```

---

## Change the content (this is the only file you need)

Everything lives in **`data/book.ts`**. You never have to edit the React
components.

In that file you can change:

- **Photos** — the `src` on each page
- **Captions** — the `caption` field
- **Text** — `title`, `subtitle`, `body`
- **Dates** — the `date` field
- **Page order** — reorder items in the `pages` array
- **The cover** — `cover.title`, `cover.subtitle`, `cover.openLabel`
- **The final surprise** — `surprise.lines`
- **Music** — `music.enabled`, `music.src`, `music.label`

Each page has a `type`. The available types are:

| type            | what it shows                                   |
| --------------- | ----------------------------------------------- |
| `title`         | big serif heading + subtitle                    |
| `letter`        | a longer heartfelt note (with optional sign-off)|
| `text`          | one short romantic line, centred                |
| `photo`         | one large photo (+ optional caption / date)     |
| `photo-caption` | one photo with a handwritten caption            |
| `collage`       | two photos stacked (+ optional heading)         |
| `final`         | closing message that reveals the surprise       |
| `end`           | the last "to be continued" page                 |

To add a page, copy an existing block, change its fields, and paste it
where you want it in the array.

---

## Replace the photos

1. Put your images in **`public/photos/`**.
2. Name them however you like (e.g. `beach.jpg`, `photo1.jpg`).
3. In `data/book.ts`, point each page's `src` at your file, e.g.
   `src: "/photos/beach.jpg"`.

Tips:

- Portrait-shaped photos (taller than wide) fit the pages best.
- The placeholder images that ship with the project are just fillers —
  replace them with your own.
- Photos are the focus of the design, so higher-quality images look best.

---

## Add your song (optional)

1. Put an MP3 at **`public/music/song.mp3`**.
2. The button appears bottom-right. It never autoplays — it only plays
   when tapped.
3. To hide the button, set `music.enabled = false` in `data/book.ts`.

---

## How it works for the reader

- **Click / tap** near the page edge to turn a page.
- **Swipe** left/right on mobile.
- **Arrow keys** ← → on desktop.
- Desktop shows **two pages side by side**; mobile shows **one**.
- **Click a photo** to enlarge it; press Escape or click away to close.
- The last page has a **"One last thing..."** button with a hidden message.

---

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to https://vercel.com, click **Add New → Project**, and import the repo.
3. Vercel auto-detects Next.js. Leave all settings as default and click
   **Deploy**. No environment variables are needed.
4. You'll get a live URL to share.

Alternatively, with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

Enjoy. ❤️
