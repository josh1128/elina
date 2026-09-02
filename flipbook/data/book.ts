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
  // A note at the very start
  {
    type: "letter",
    heading: "Elina,",
    body: `I can write a book about you. Words can't express how much I love you, so I show it through my actions instead. You are such an amazing person and you bring me comfort. I want to appreciate you for coming into my life and making a positive impact.

Before I met you, I was so focused on myself and my goals that I thought I could never fully love someone. After meeting you, I am now confident that I can finally be vulnerable. I am now able to express my feelings without feeling judged.

Before asking you to be my girlfriend, I made a promise to myself to take care of you, support you, and love you in ways that you deserve. In return, I want you to live your life to the fullest. Be as happy and healthy as you can and I will support you every step of the way.

Take pride in yourself. You are beautiful, caring, spontaneous, kind and funny. I am in awe whenever I am with you. Read this flip book in case you miss me. I love you always.`,
    signature: "Forever yours,\nJosh",
  },

  // Title
  { type: "title", title: "Our Story ❤️", subtitle: "For us." },

  // Our Firsts timeline
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

  // Opening line
  { type: "text", body: "For all the moments I never want to forget." },

  // The beginning — Deep Cove overlook
  {
    type: "photo-caption",
    src: "/photos/photo1.jpg",
    caption: "The beginning.",
    date: "Just the two of us, and a whole view",
  },

  // Close selfie
  {
    type: "photo-caption",
    src: "/photos/photo2.jpg",
    caption: "One of my favourite days with you.",
  },

  // Cultus Lake photos
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

  // Cultus Lake note
  {
    type: "letter",
    heading: "June 20, 2026",
    body: `I remember being extremely nervous for the Cultus trip. I wanted it to be perfect so I planned it for days.

I really enjoyed laying down with you and walking around talking about the different types of houses. Imagine how nice it would be to live in a comfy house like that one day by the beach with 2 cats.

I’m looking forward to doing more lake trips with you.`,
  },

  // Volleyball
  {
    type: "photo-note",
    src: "/photos/photo5.jpg",
    caption: "You will always be my R2 partner. 🏐",
    body: `Ever since I played against you, I’ve wanted to get to know you. You were a breath of fresh air, and I was thinking to myself what my first words were going to be, but you beat me to it. I got shy and forgot to ask for your Instagram, but I was lucky enough to find you on my own.

Let’s get better at the sport together and win many tournaments. I promise you that we will win the BBL tournament one day since I know how much you like the shirt.

You will always be my R2 partner. I will always be your biggest supporter, and no one will get as hyped as me when you get a kill.`,
    alt: "Volleyball game day",
  },

  // Her, golden hour
  {
    type: "photo-caption",
    src: "/photos/photo6.jpg",
    caption: "You.",
  },

  // Food collage
  {
    type: "collage",
    heading: "The meals we still talk about.",
    photos: [{ src: "/photos/photo7.jpg" }, { src: "/photos/photo8.jpg" }],
  },

  // Food collage
  {
    type: "collage",
    photos: [{ src: "/photos/photo9.jpg" }, { src: "/photos/photo10.jpg" }],
  },

  // Text
  { type: "text", body: "Every day with you is my favourite kind of day." },

  // Cafe candid
  {
    type: "photo-caption",
    src: "/photos/photo11.jpg",
    caption: "Slow afternoons.",
  },

  // Picnic in the park
  {
    type: "photo-caption",
    src: "/photos/photo12.jpg",
    caption: "Sunlight and good company.",
  },

  // Drinks collage
  {
    type: "collage",
    photos: [{ src: "/photos/photo13.jpg" }, { src: "/photos/photo14.jpg" }],
  },

  // Favourite memories — photobooth + the reflection
  {
    type: "collage",
    heading: "Some of my favourite memories.",
    photos: [{ src: "/photos/photo15.jpg" }, { src: "/photos/photo16.jpg" }],
  },

  // Text
  {
    type: "text",
    body: "Thank you for all the laughs, adventures, and memories.",
  },

  // Marathon day
  {
    type: "photo-note",
    src: "/photos/photo17.jpg",
    date: "May 3, 2026",
    caption: "My favourite photo of us.",
    body: `Running this marathon was tough. Before I met you, I would train 5 days a week, sometimes 80 km per week to be able to run this race.

Throughout the race, I was cramping and I thought I wasn’t able to finish. But when I thought about you, it gave me the extra push to finish.

I was more excited to see you that day than getting the actual medal. Even though I was limping and had no energy, I would make time to see you.`,
    alt: "Marathon day together",
  },

  // Final message (reveals the surprise)
  { type: "final", title: "And we're only getting started." },

  // The end
  { type: "end", title: "To be continued... ❤️" },
];
