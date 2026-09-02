// ============================================================================
//  EDIT EVERYTHING HERE — you never need to touch the React components.
//
//  • Change photos    -> put images in /public/photos and update `src`
//  • Change captions  -> edit `caption`
//  • Change text      -> edit `title`, `subtitle`, `body`, `lines`
//  • Change dates     -> edit `date`
//  • Reorder pages    -> move items around in the `pages` array
//  • Add / remove     -> copy a block, change its fields, done
//
//  Photo paths are relative to /public, e.g. "/photos/photo1.jpg".
// ============================================================================

// ---- The opening cover (shown before the book is opened) -------------------
export const cover = {
  title: "Our Story ❤️",
  subtitle: "A little collection of our favourite memories.",
  openLabel: "Open",
};

// ---- Background music (optional) -------------------------------------------
// Put a file at /public/music/song.mp3. Set enabled to false to hide the button.
export const music = {
  enabled: true,
  src: "/music/song.mp3",
  label: "Play our song",
};

// ---- The final surprise on the last message page ---------------------------
export const surprise = {
  buttonLabel: "One last thing...",
  lines: ["If I had to choose again,", "I'd still choose you.", "Every time. ❤️"],
};

// ---- Page types ------------------------------------------------------------
export type Page =
  | { type: "title"; title: string; subtitle?: string }
  | { type: "letter"; heading?: string; body: string; signature?: string }
  | { type: "text"; body: string }
  | { type: "firsts"; title: string; items: { date: string; label: string }[] }
  | { type: "photo"; src: string; caption?: string; date?: string; alt?: string }
  | {
      type: "photo-caption";
      src: string;
      caption: string;
      date?: string;
      alt?: string;
    }
  | {
      type: "photo-note";
      src: string;
      body: string;
      caption?: string;
      date?: string;
      alt?: string;
      objectPosition?: string;
      featured?: boolean;
    }
  | {
      type: "collage";
      heading?: string;
      photos: { src: string; alt?: string; objectPosition?: string }[];
    }
  | {
      type: "collage-note";
      date: string;
      body: string;
      photos: { src: string; alt?: string; objectPosition?: string }[];
    }
  | { type: "final"; title: string; body?: string }
  | { type: "end"; title: string };

// ---- The pages, in order ---------------------------------------------------
export const pages: Page[] = [
  // Page 1 — opening letter
  {
    type: "letter",
    heading: "Elina,",
    body: `I can write a book about you. Words can't express how much I love you, so I show it through my actions instead. You are such an amazing person and you bring me comfort. I want to appreciate you for coming into my life and making a positive impact.

Before I met you, I was so focused on myself and my goals that I thought I could never fully love someone. After meeting you, I am now confident that I can finally be vulnerable. I am now able to express my feelings without feeling judged.

Before asking you to be my girlfriend, I made a promise to myself to take care of you, support you, and love you in ways that you deserve. In return, I want you to live your life to the fullest. Be as happy and healthy as you can and I will support you every step of the way.

Take pride in yourself. You are beautiful, caring, spontaneous, kind and funny. I am in awe whenever I am with you. Read this flip book in case you miss me. I love you always.`,
    signature: "Forever yours,\nJosh",
  },

  // Page 2 — title
  { type: "title", title: "Our Story ❤️", subtitle: "For us." },

  // Page 3 — Our Firsts timeline
  {
    type: "firsts",
    title: "Our Firsts",
    items: [
      { date: "April 22", label: "When we first met" },
      { date: "April 26", label: "First hangout" },
      { date: "May 16", label: "First date" },
      { date: "May 18", label: "First workout together" },
      { date: "June 20", label: "First lake trip" },
      { date: "June 27", label: "First R2 tournament" },
      { date: "July 5", label: "First hike" },
      { date: "July 31", label: "Your birthday" },
      { date: "August 8", label: "First R4 tournament" },
      { date: "August 18", label: "First movie night" },
      { date: "August 27", label: "First concert" },
    ],
  },

  // Page 4 — first hike note, facing the photo on page 5
  {
    type: "letter",
    heading: "July 5, 2026",
    body: `This was our first hike together. I remember missing you so much that day because you had gone raving the night before, and I kept wishing I was there with you, giving you shoulder rides.

When you told me you still wanted to hike with me after spending the whole night raving, that’s when I knew you were just as crazy as I am. It’s hard to find someone who can match my energy, especially since I’m such an adrenaline junkie.

In that moment, I knew we were going to have so much fun together, going on hikes, chasing adventures, and making a lot of crazy memories along the way.`,
  },

  // Page 5 — the beginning
  {
    type: "photo-caption",
    src: "/photos/photo1.jpg",
    caption: "The beginning.",
    date: "Just the two of us, and a whole view",
  },

  // Page 6 — close selfie
  {
    type: "photo-caption",
    src: "/photos/photo2.jpg",
    caption: "One of my favourite days with you.",
  },

  // Page 7 — Cultus Lake photos
  {
    type: "collage",
    photos: [
      {
        src: "/photos/photo3.jpg",
        alt: "Cultus Lake selfie together",
        objectPosition: "center 42%",
      },
      {
        src: "/photos/photo4.jpg",
        alt: "Picnic together at Cultus Lake",
        objectPosition: "center 8%",
      },
    ],
  },

  // Page 8 — Cultus Lake note
  {
    type: "letter",
    heading: "June 20, 2026",
    body: `I remember being extremely nervous for the Cultus trip. I wanted it to be perfect so I planned it for days.

I really enjoyed laying down with you and walking around talking about the different types of houses. Imagine how nice it would be to live in a comfy house like that one day by the beach with 2 cats.

I’m looking forward to doing more lake trips with you.`,
  },

  // Page 9 — volleyball
  {
    type: "photo-note",
    src: "/photos/photo5.jpg",
    caption: "You will always be my R2 partner. 🏐",
    body: `Ever since I played against you, I’ve wanted to get to know you. You were a breath of fresh air, and I was thinking to myself what my first words were going to be, but you beat me to it. I got shy and forgot to ask for your Instagram, but I was lucky enough to find you on my own.

Let’s get better at the sport together and win many tournaments. I promise you that we will win the BBL tournament one day since I know how much you like the shirt.

You will always be my R2 partner. I will always be your biggest supporter, and no one will get as hyped as me when you get a kill.`,
    alt: "Volleyball game day",
  },

  // Page 10 — her, golden hour
  {
    type: "photo-caption",
    src: "/photos/photo6.jpg",
    caption: "You.",
  },

  // Page 11 — food collage
  {
    type: "collage",
    heading: "The meals we still talk about.",
    photos: [{ src: "/photos/photo7.jpg" }, { src: "/photos/photo8.jpg" }],
  },

  // Page 12 — food collage
  {
    type: "collage",
    photos: [{ src: "/photos/photo9.jpg" }, { src: "/photos/photo10.jpg" }],
  },

  // Page 13 — text
  { type: "text", body: "Every day with you is my favourite kind of day." },

  // Page 14 — cafe candid
  {
    type: "photo-caption",
    src: "/photos/photo11.jpg",
    caption: "Slow afternoons.",
  },

  // Page 15 — picnic in the park
  {
    type: "photo-caption",
    src: "/photos/photo12.jpg",
    caption: "Sunlight and good company.",
  },

  // Page 16 — drinks collage
  {
    type: "collage",
    photos: [{ src: "/photos/photo13.jpg" }, { src: "/photos/photo14.jpg" }],
  },

  // Page 17 — favourite memories
  {
    type: "collage",
    heading: "Some of my favourite memories.",
    photos: [{ src: "/photos/photo15.jpg" }, { src: "/photos/photo16.jpg" }],
  },

  // Page 18 — full marathon photo on the left side of the spread
  {
    type: "photo",
    src: "/photos/photo17.jpg",
    alt: "Marathon day together",
  },

  // Page 19 — marathon note on the right side of the spread
  {
    type: "letter",
    heading: "May 3, 2026",
    body: `Running this marathon was tough. Before I met you, I would train 5 days a week, sometimes 80 km per week to be able to run this race.

Throughout the race, I was cramping and I thought I wasn’t able to finish. But when I thought about you, it gave me the extra push to finish.

I was more excited to see you that day than getting the actual medal. Even though I was limping and had no energy, I would make time to see you.`,
  },

  // Page 20 — final message
  { type: "final", title: "And we're only getting started." },

  // Page 21 — the end
  { type: "end", title: "To be continued... ❤️" },
];
