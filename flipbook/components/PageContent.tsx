"use client";

import Image from "next/image";
import type { Page } from "@/data/book";

type Props = {
  page: Page;
  onZoom: (src: string, alt?: string) => void;
  onSurprise?: () => void;
};

// A single photo that enlarges on click. stopPropagation keeps the page
// from turning when the photo itself is clicked.
function Photo({
  src,
  alt,
  onZoom,
  className = "",
  objectPosition,
}: {
  src: string;
  alt?: string;
  onZoom: Props["onZoom"];
  className?: string;
  objectPosition?: string;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onZoom(src, alt);
      }}
      className={`group relative block overflow-hidden rounded-lg bg-page shadow-photo ring-1 ring-soft-blue/80 ${className}`}
      aria-label="Enlarge photo"
    >
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        sizes="(max-width: 768px) 90vw, 40vw"
        style={objectPosition ? { objectPosition } : undefined}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
      />
      <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/25" />
    </button>
  );
}

function MemoryDivider() {
  return (
    <div className="mt-7 flex items-center justify-center gap-3 text-dusty/75" aria-hidden>
      <span className="h-px w-10 bg-soft-blue" />
      <span className="text-base">♡</span>
      <span className="h-px w-10 bg-soft-blue" />
    </div>
  );
}

export default function PageContent({ page, onZoom, onSurprise }: Props) {
  switch (page.type) {
    case "letter":
      return (
        <div className="flex h-full flex-col justify-center px-2 py-2">
          {page.heading && (
            <h2 className="mb-4 font-serif text-3xl text-dusty">
              {page.heading}
            </h2>
          )}
          <div className="space-y-3 overflow-y-auto pr-1 font-body text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
            {page.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {page.signature && (
            <p className="mt-5 whitespace-pre-line font-hand text-2xl text-navy">
              {page.signature}
            </p>
          )}
        </div>
      );

    case "title":
      return (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-serif text-5xl font-medium leading-tight text-navy sm:text-6xl">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="mt-4 font-hand text-2xl text-dusty">
              {page.subtitle}
            </p>
          )}
          <MemoryDivider />
        </div>
      );

    case "text":
      return (
        <div className="flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="font-serif text-3xl leading-snug text-navy sm:text-[2rem]">
            {page.body}
          </p>
          <MemoryDivider />
        </div>
      );

    case "firsts":
      return (
        <div className="flex h-full min-h-0 flex-col px-1 py-1">
          <div className="text-center">
            <p className="font-hand text-lg text-dusty">the little beginnings ♡</p>
            <h2 className="mt-1 font-serif text-4xl leading-none text-ink sm:text-[2.7rem]">
              {page.title}
            </h2>
          </div>

          <div className="relative mx-auto mt-5 min-h-0 w-full max-w-sm flex-1 overflow-y-auto pr-1">
            <span
              className="pointer-events-none absolute bottom-1 left-[4.45rem] top-1 w-px bg-soft-blue/90"
              aria-hidden
            />
            <div className="space-y-2.5">
              {page.items.map((item, index) => (
                <div key={`${item.date}-${item.label}`} className="relative grid grid-cols-[4rem_1fr] gap-5">
                  <p className="pt-0.5 text-right font-body text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-dusty sm:text-[0.78rem]">
                    {item.date}
                  </p>
                  <span
                    className="absolute left-[4.12rem] top-[0.42rem] h-2.5 w-2.5 rounded-full border-2 border-page bg-dusty shadow-sm"
                    aria-hidden
                  />
                  <div className="min-w-0 pb-1">
                    <p className="font-body text-[0.9rem] leading-snug text-ink-soft sm:text-[0.98rem]">
                      {item.label}
                    </p>
                    {index === 0 && (
                      <p className="mt-0.5 font-hand text-sm text-dusty/80">where it all started</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "cat-collage": {
      const slots = [
        { left: "20%", top: "5%", width: "13%", height: "11%", rotate: -14 },
        { left: "27%", top: "14%", width: "13%", height: "11%", rotate: -8 },
        { left: "38%", top: "16%", width: "13%", height: "11%", rotate: -2 },
        { left: "50%", top: "16%", width: "13%", height: "11%", rotate: 2 },
        { left: "61%", top: "14%", width: "13%", height: "11%", rotate: 8 },
        { left: "68%", top: "5%", width: "13%", height: "11%", rotate: 14 },
        { left: "14%", top: "28%", width: "13%", height: "11%", rotate: -9 },
        { left: "74%", top: "28%", width: "13%", height: "11%", rotate: 9 },
        { left: "11%", top: "42%", width: "13%", height: "11%", rotate: -5 },
        { left: "77%", top: "42%", width: "13%", height: "11%", rotate: 5 },
        { left: "27%", top: "50%", width: "13%", height: "11%", rotate: -3 },
        { left: "60%", top: "50%", width: "13%", height: "11%", rotate: 3 },
        { left: "21%", top: "61%", width: "13%", height: "11%", rotate: -5 },
        { left: "66%", top: "61%", width: "13%", height: "11%", rotate: 5 },
        { left: "25%", top: "75%", width: "13%", height: "11%", rotate: -4 },
        { left: "43%", top: "81%", width: "13%", height: "11%", rotate: 0 },
        { left: "61%", top: "75%", width: "13%", height: "11%", rotate: 4 },
        { left: "81%", top: "61%", width: "13%", height: "11%", rotate: 9 },
      ];

      return (
        <div className="flex h-full min-h-0 flex-col">
          <div className="shrink-0 text-center">
            {page.title && (
              <h2 className="font-serif text-2xl leading-tight text-navy sm:text-3xl">
                {page.title}
              </h2>
            )}
            {page.subtitle && (
              <p className="mt-1 font-hand text-base text-dusty sm:text-lg">
                {page.subtitle}
              </p>
            )}
          </div>

          <div className="relative mx-auto mt-3 min-h-0 w-full max-w-[410px] flex-1 overflow-hidden rounded-2xl">
            <svg
              viewBox="0 0 500 560"
              className="pointer-events-none absolute inset-0 h-full w-full text-dusty opacity-[0.16]"
              fill="none"
              aria-hidden
            >
              <path
                d="M142 142L188 54L220 146M358 142L312 54L280 146M142 142C100 160 84 205 92 258C99 309 124 332 154 347C121 371 101 410 107 452C115 504 164 526 250 526C336 526 385 504 393 452C399 410 379 371 346 347C376 332 401 309 408 258C416 205 400 160 358 142C326 128 291 124 250 124C209 124 174 128 142 142Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M394 395C455 392 469 353 447 322C436 307 418 303 402 312"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M217 254H217.5M283 254H283.5M238 290C247 299 253 299 262 290"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>

            {page.photos.slice(0, slots.length).map((photo, index) => {
              const slot = slots[index];
              return (
                <div
                  key={`${photo.src}-${index}`}
                  className="absolute z-10"
                  style={{
                    left: slot.left,
                    top: slot.top,
                    width: slot.width,
                    height: slot.height,
                    transform: `rotate(${slot.rotate}deg)`,
                  }}
                >
                  <Photo
                    src={photo.src}
                    alt={photo.alt ?? `Memory ${index + 1}`}
                    objectPosition={photo.objectPosition}
                    onZoom={onZoom}
                    className="h-full w-full rounded-md shadow-sm ring-1 ring-white/70"
                  />
                </div>
              );
            })}

            <div className="pointer-events-none absolute left-1/2 top-[38%] z-20 -translate-x-1/2 text-center text-dusty/70" aria-hidden>
              <span className="font-hand text-lg">♡</span>
            </div>
          </div>
        </div>
      );
    }

    case "photo":
      return (
        <div className="flex h-full flex-col">
          <Photo
            src={page.src}
            alt={page.alt}
            onZoom={onZoom}
            className="min-h-0 flex-1"
          />
          {(page.caption || page.date) && (
            <div className="pt-3 text-center">
              {page.caption && (
                <p className="font-hand text-2xl text-navy">{page.caption}</p>
              )}
              {page.date && (
                <p className="mt-1 font-body text-sm italic text-dusty">
                  {page.date}
                </p>
              )}
            </div>
          )}
        </div>
      );

    case "photo-caption":
      return (
        <div className="flex h-full flex-col">
          <Photo
            src={page.src}
            alt={page.alt}
            onZoom={onZoom}
            className="min-h-0 flex-1"
          />
          <div className="pt-4 text-center">
            <p className="font-hand text-2xl text-navy">{page.caption}</p>
            {page.date && (
              <p className="mt-1 font-body text-sm italic text-dusty">
                {page.date}
              </p>
            )}
          </div>
        </div>
      );

    case "photo-note": {
      const featured = page.featured === true;

      return (
        <div
          className={`grid h-full min-h-0 gap-5 ${
            featured ? "grid-cols-[1.08fr_0.92fr]" : "grid-cols-[0.9fr_1.1fr]"
          }`}
        >
          <div className="flex min-h-0 flex-col">
            <Photo
              src={page.src}
              alt={page.alt}
              objectPosition={page.objectPosition}
              onZoom={onZoom}
              className="min-h-0 flex-1"
            />
            {page.caption && (
              <p className="mt-3 text-center font-hand text-xl leading-tight text-navy">
                {page.caption}
              </p>
            )}
          </div>

          <div className="min-h-0 overflow-y-auto pr-1">
            <div className="flex min-h-full flex-col justify-center py-1">
              {page.date && (
                <p
                  className={`font-serif text-dusty ${
                    featured
                      ? "mb-5 text-2xl sm:text-[1.8rem]"
                      : "mb-4 text-xl sm:text-2xl"
                  }`}
                >
                  {page.date}
                </p>
              )}
              <div
                className={`font-body text-ink-soft ${
                  featured
                    ? "space-y-4 text-[0.9rem] leading-[1.75] sm:text-[1rem]"
                    : "space-y-3 text-[0.73rem] leading-[1.55] sm:text-[0.82rem]"
                }`}
              >
                {page.body.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    case "collage":
      return (
        <div className="flex h-full flex-col">
          {page.heading && (
            <h2 className="mb-4 text-center font-serif text-2xl text-navy">
              {page.heading}
            </h2>
          )}
          <div className="grid min-h-0 flex-1 grid-rows-2 gap-3">
            {page.photos.slice(0, 2).map((p, i) => (
              <Photo
                key={i}
                src={p.src}
                alt={p.alt}
                objectPosition={p.objectPosition}
                onZoom={onZoom}
                className="min-h-0"
              />
            ))}
          </div>
        </div>
      );

    case "collage-note":
      return (
        <div className="grid h-full min-h-0 grid-cols-[0.92fr_1.08fr] gap-4">
          <div className="grid min-h-0 grid-rows-2 gap-3">
            {page.photos.slice(0, 2).map((p, i) => (
              <Photo
                key={i}
                src={p.src}
                alt={p.alt}
                objectPosition={p.objectPosition}
                onZoom={onZoom}
                className="min-h-0"
              />
            ))}
          </div>

          <div className="min-h-0 overflow-y-auto pr-1">
            <div className="flex min-h-full flex-col justify-center py-1">
              <p className="mb-4 font-serif text-xl text-dusty sm:text-2xl">
                {page.date}
              </p>
              <div className="space-y-3 font-body text-[0.7rem] leading-[1.55] text-ink-soft sm:text-[0.8rem]">
                {page.body.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case "final":
      return (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
            {page.title}
          </h2>
          {page.body && (
            <p className="mt-4 max-w-xs font-body text-ink-soft">{page.body}</p>
          )}
          <MemoryDivider />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSurprise?.();
            }}
            className="mt-8 rounded-full bg-navy px-8 py-2.5 font-serif text-lg text-page shadow-coastal transition-all hover:-translate-y-0.5 hover:bg-blush-deep"
          >
            One last thing...
          </button>
        </div>
      );

    case "end":
      return (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <span className="mb-6 h-px w-16 bg-soft-blue" />
          <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
            {page.title}
          </h2>
          <p className="mt-5 font-hand text-xl text-dusty">♡</p>
        </div>
      );

    default:
      return null;
  }
}
