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
// "title"        big serif heading + subtitle
// "letter"       a longer heartfelt note (with an optional signature)
// "text"         a short romantic line, centred
// "photo"        one large photo (+ optional caption / date)
// "photo-caption"one photo with a handwritten caption underneath
// "collage"      two photos side by side (+ optional heading)
// "final"        the closing message that reveals the surprise button
// "end"          the very last "to be continued" page
export type Page =
  | { type: "title"; title: string; subtitle?: string }
  | { type: "letter"; heading?: string; body: string; signature?: string }
  | { type: "text"; body: string }
  | { type: "photo"; src: string; caption?: string; date?: string; alt?: string }
  | {
      type: "photo-caption";
      src: string;
      caption: string;
      date?: string;
      alt?: string;
    }
  | {
      type: "collage";
      heading?: string;
      photos: { src: string; alt?: string }[];
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

  // Page 1
  { type: "title", title: "Our Story ❤️", subtitle: "For us." },

  // Page 2
  { type: "text", body: "For all the moments I never want to forget." },

  // Page 3 — large photo
  {
    type: "photo-caption",
    src: "/photos/photo1.jpg",
    caption: "The beginning.",
    date: "Where it all started",
  },

  // Page 4 — photo + caption
  {
    type: "photo-caption",
    src: "/photos/photo2.jpg",
    caption: "One of my favourite days with you.",
  },

  // Pages 5–6 — two-photo spread
  {
    type: "collage",
    photos: [{ src: "/photos/photo3.jpg" }, { src: "/photos/photo4.jpg" }],
  },

  // Page 7 — text
  { type: "text", body: "You somehow make ordinary days feel special." },

  // Page 8
  {
    type: "photo-caption",
    src: "/photos/photo5.jpg",
    caption: "Us, being us.",
  },

  // Page 9
  {
    type: "photo",
    src: "/photos/photo6.jpg",
    caption: "This one always makes me smile.",
  },

  // Page 10 — two-photo spread
  {
    type: "collage",
    photos: [{ src: "/photos/photo7.jpg" }, { src: "/photos/photo8.jpg" }],
  },

  // Page 11
  { type: "text", body: "Every day with you is my favourite kind of day." },

  // Page 12 — collage with heading
  {
    type: "collage",
    heading: "Some of my favourite memories.",
    photos: [{ src: "/photos/photo9.jpg" }, { src: "/photos/photo10.jpg" }],
  },

  // Page 13 — text
  {
    type: "text",
    body: "Thank you for all the laughs, adventures, and memories.",
  },

  // Page 14 — favourite photo of us
  {
    type: "photo-caption",
    src: "/photos/photo11.jpg",
    caption: "My favourite photo of us.",
  },

  // Page 15 — final message (reveals the surprise)
  { type: "final", title: "And we're only getting started." },

  // Page 16 — the end
  { type: "end", title: "To be continued... ❤️" },
];
