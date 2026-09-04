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

export const cover = {
  title: "Our Story ❤️",
  subtitle: "A little collection of our favourite memories.",
  openLabel: "Open",
};

export const music = {
  enabled: true,
  src: "/music/song.mp3",
  label: "Play our song",
};

export const surprise = {
  buttonLabel: "One last thing...",
  lines: ["If I had to choose again,", "I'd still choose you.", "Every time. ❤️"],
};

export type Page =
  | {
      type: "title";
      title: string;
      subtitle?: string;
      theme?: "lake" | "volleyball" | "meals" | "adventures";
    }
  | { type: "letter"; heading?: string; body: string; signature?: string }
  | { type: "text"; body: string }
  | { type: "firsts"; title: string; items: { date: string; label: string }[] }
  | {
      type: "cat-collage";
      title?: string;
      subtitle?: string;
      photos: { src: string; alt?: string; objectPosition?: string }[];
    }
  | {
      type: "photo";
      src: string;
      caption?: string;
      date?: string;
      alt?: string;
      framed?: boolean;
    }
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

export const pages: Page[] = [
  {
    type: "letter",
    heading: "Elina,",
    body: `I can write a book about you. Words can't express how much I love you, so I show it through my actions instead. You are such an amazing person and you bring me comfort. I want to appreciate you for coming into my life and making a positive impact.

Before I met you, I was so focused on myself and my goals that I thought I could never fully love someone. After meeting you, I am now confident that I can finally be vulnerable. I am now able to express my feelings without feeling judged.

Before asking you to be my girlfriend, I made a promise to myself to take care of you, support you, and love you in ways that you deserve. In return, I want you to live your life to the fullest. Be as happy and healthy as you can and I will support you every step of the way.

Take pride in yourself. You are beautiful, caring, spontaneous, kind and funny. I am in awe whenever I am with you. Read this flip book in case you miss me. I love you always.`,
    signature: "Forever yours,\nJosh",
  },

  { type: "title", title: "Our Story ❤️", subtitle: "For us." },

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

  {
    type: "letter",
    heading: "July 5, 2026",
    body: `This was our first hike together. I remember missing you so much that day because you had gone raving the night before, and I kept wishing I was there with you, giving you shoulder rides.

When you told me you still wanted to hike with me after spending the whole night raving, that’s when I knew you were just as crazy as I am. It’s hard to find someone who can match my energy, especially since I’m such an adrenaline junkie.

In that moment, I knew we were going to have so much fun together, going on hikes, chasing adventures, and making a lot of crazy memories along the way.`,
  },

  {
    type: "photo-caption",
    src: "/photos/photo1.jpg",
    caption: "The beginning.",
    date: "Just the two of us, and a whole view",
  },

  {
    type: "photo-caption",
    src: "/photos/photo2.jpg",
    caption: "One of my favourite days with you.",
  },

  {
    type: "title",
    title: "Lake Trip",
    subtitle: "June 20, 2026 • Cultus Lake",
    theme: "lake",
  },

  {
    type: "photo-note",
    src: "/photos/photo3.jpg",
    date: "June 20, 2026",
    body: `I remember being extremely nervous for the Cultus trip. I wanted it to be perfect so I planned it for days.

I really enjoyed laying down with you and walking around talking about the different types of houses. Imagine how nice it would be to live in a comfy house like that one day by the beach with 2 cats.

I’m looking forward to doing more lake trips with you.`,
    alt: "Cultus Lake selfie together",
    objectPosition: "center 42%",
    featured: true,
  },

  {
    type: "photo",
    src: "/photos/photo4.jpg",
    alt: "Picnic together at Cultus Lake",
  },

  {
    type: "title",
    title: "Volleyball",
    subtitle: "My favourite R2 partner 🏐",
    theme: "volleyball",
  },

  {
    type: "photo-note",
    src: "/photos/photo5.jpg",
    caption: "You will always be my R2 partner. 🏐",
    body: `Ever since I played against you, I’ve wanted to get to know you. You were a breath of fresh air, and I was thinking to myself what my first words were going to be, but you beat me to it. I got shy and forgot to ask for your Instagram, but I was lucky enough to find you on my own.

Let’s get better at the sport together and win many tournaments. I promise you that we will win the BBL tournament one day since I know how much you like the shirt.

You will always be my R2 partner. I will always be your biggest supporter, and no one will get as hyped as me when you get a kill.`,
    alt: "Volleyball game day",
  },

  {
    type: "photo-caption",
    src: "/photos/photo6.jpg",
    caption: "You.",
  },

  {
    type: "title",
    title: "Meals together",
    subtitle: "Our favourite dates, one plate at a time.",
    theme: "meals",
  },

  {
    type: "collage",
    heading: "The meals we still talk about.",
    photos: [{ src: "/photos/photo7.jpg" }, { src: "/photos/photo8.jpg" }],
  },

  {
    type: "collage",
    photos: [{ src: "/photos/photo9.jpg" }, { src: "/photos/photo10.jpg" }],
  },

  { type: "text", body: "Every day with you is my favourite kind of day." },

  {
    type: "photo-caption",
    src: "/photos/photo11.jpg",
    caption: "Slow afternoons.",
  },

  {
    type: "photo-note",
    src: "/photos/photo12.jpg",
    date: "July 31, 2026",
    caption: "Your birthday. ♡",
    body: `Your birthday was one of the most memorable days for me because I got the chance to plan it for you.

I drove 2 hours that day picking up stuff, and seeing you happy made me really happy too.

I always want to make you happy.`,
    alt: "Elina's birthday",
    featured: true,
  },

  {
    type: "collage",
    photos: [{ src: "/photos/photo13.jpg" }, { src: "/photos/photo14.jpg" }],
  },

  {
    type: "collage",
    heading: "Some of my favourite memories.",
    photos: [{ src: "/photos/photo15.jpg" }, { src: "/photos/photo16.jpg" }],
  },

  {
    type: "photo",
    src: "/photos/photo17.jpg",
    alt: "Marathon day together",
  },

  {
    type: "letter",
    heading: "May 3, 2026",
    body: `Running this marathon was tough. Before I met you, I would train 5 days a week, sometimes 80 km per week to be able to run this race.

Throughout the race, I was cramping and I thought I wasn’t able to finish. But when I thought about you, it gave me the extra push to finish.

I was more excited to see you that day than getting the actual medal. Even though I was limping and had no energy, I would make time to see you.`,
  },

  {
    type: "letter",
    heading: "Before your flight ♡",
    body: `I wanted to write you another letter before your flight.

Elina, I’m crazy about you. Every second, I’m always kissing you. I crave your touch, your lips, and your hugs. I wasn’t like this before.

When I first heard that you weren’t ready to be in a relationship, I thought about all of my shortcomings and how, despite all of my efforts, I still couldn’t get you to be my girlfriend. Knowing that, I would do it all again. I would wait for you. I would wait as long as I had to. Even if you didn’t say yes, I wouldn’t be mad. It’s because I enjoyed every moment we spent together—the mundane moments, the special moments, including our first date, Cultus Lake, and your birthday. It was all worth it to me.

Throughout the time we’ve been together, you’ve told me about your unwanted feelings of jealousy and insecurity. I just want you to know that you’re the only girl I think about and the only girl I look at. You inspire me to become a better person. I will always tell you that you are the most beautiful person I know, even if you don’t believe it. If I didn’t strongly believe that, why else would I put so much effort into doing things that make you happy?

My heart aches when you aren’t around. I get sad when you’re sad, but I also smile when you’re happy. You’re not only beautiful on the outside, but on the inside as well.

You told me that your mom didn’t always show how proud she was of you, but deep down, I know she is proud of you. I can see something similar in my dad as well. I know how happy he is to have me as his son, even though he may not always show it through his words.

Just know that I am always proud of you. I am proud of how caring you are toward others and the way you keep trying to step outside of your comfort zone. You don’t know how happy you made me when you told me you were going to do the marathon. I can’t wait to achieve so many great milestones with you.

Lastly, I want you to know that I will spend as long as I have to making you happy and being that source of excitement and comfort for you. When we have problems, promise me that we will work through them together. We don’t quit when things get hard, because I know for a fact that I will never quit on you.

I want to grow old with you, continue making memories, and achieve all of our dreams together. I want you to make new friends, go to raves, try new hobbies, and play as much volleyball as possible. I am never going to stop you from doing all the things you want to do, because your happiness is my top priority.

Text me as much as you can when you’re in China. I’ll pick up whenever you call me.

I love you, and I will never stop loving you. It is such a privilege getting to know you these past couple of months and growing closer together. You have my heart, my eyes, and most importantly, my butt HAHA.

I love you, baby.`,
  },

  {
    type: "title",
    title: "More adventures with you. ♡",
    subtitle: "Pottery • Volleyball • Knitting • Hiking • Travelling",
    theme: "adventures",
  },

  { type: "final", title: "And we're only getting started." },

  {
    type: "cat-collage",
    title: "All our little memories. ♡",
    subtitle: "and maybe two cats one day",
    photos: [
      { src: "/photos/our-first-cover.jpg", alt: "Our story cover memory" },
      { src: "/photos/photo1.jpg" },
      { src: "/photos/photo2.jpg" },
      { src: "/photos/photo3.jpg", objectPosition: "center 42%" },
      { src: "/photos/photo4.jpg", objectPosition: "center 8%" },
      { src: "/photos/photo5.jpg" },
      { src: "/photos/photo6.jpg" },
      { src: "/photos/photo7.jpg" },
      { src: "/photos/photo8.jpg" },
      { src: "/photos/photo9.jpg" },
      { src: "/photos/photo10.jpg" },
      { src: "/photos/photo11.jpg" },
      { src: "/photos/photo12.jpg" },
      { src: "/photos/photo13.jpg" },
      { src: "/photos/photo14.jpg" },
      { src: "/photos/photo15.jpg" },
      { src: "/photos/photo16.jpg" },
      { src: "/photos/photo17.jpg" },
    ],
  },

  { type: "end", title: "To be continued... ❤️" },
];
