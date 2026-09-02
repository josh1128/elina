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
}: {
  src: string;
  alt?: string;
  onZoom: Props["onZoom"];
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onZoom(src, alt);
      }}
      className={`group relative block overflow-hidden rounded-sm bg-cream shadow-photo ring-1 ring-ink/10 ${className}`}
      aria-label="Enlarge photo"
    >
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        sizes="(max-width: 768px) 90vw, 40vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </button>
  );
}

export default function PageContent({ page, onZoom, onSurprise }: Props) {
  switch (page.type) {
    case "letter":
      return (
        <div className="flex h-full flex-col justify-center px-2 py-2">
          {page.heading && (
            <h2 className="mb-4 font-serif text-3xl text-ink">
              {page.heading}
            </h2>
          )}
          <div className="space-y-3 overflow-y-auto pr-1 font-body text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
            {page.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {page.signature && (
            <p className="mt-5 whitespace-pre-line font-hand text-2xl text-ink">
              {page.signature}
            </p>
          )}
        </div>
      );

    case "title":
      return (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-serif text-5xl font-medium leading-tight text-ink sm:text-6xl">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="mt-4 font-hand text-2xl text-blush-deep">
              {page.subtitle}
            </p>
          )}
          <span className="mt-8 h-px w-16 bg-blush/60" />
        </div>
      );

    case "text":
      return (
        <div className="flex h-full items-center justify-center px-4 text-center">
          <p className="font-serif text-3xl leading-snug text-ink sm:text-[2rem]">
            {page.body}
          </p>
        </div>
      );

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
                <p className="font-hand text-2xl text-ink">{page.caption}</p>
              )}
              {page.date && (
                <p className="mt-1 font-body text-sm italic text-ink-soft">
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
            <p className="font-hand text-2xl text-ink">{page.caption}</p>
            {page.date && (
              <p className="mt-1 font-body text-sm italic text-ink-soft">
                {page.date}
              </p>
            )}
          </div>
        </div>
      );

    case "collage":
      return (
        <div className="flex h-full flex-col">
          {page.heading && (
            <h2 className="mb-4 text-center font-serif text-2xl text-ink">
              {page.heading}
            </h2>
          )}
          <div className="grid min-h-0 flex-1 grid-rows-2 gap-3">
            {page.photos.slice(0, 2).map((p, i) => (
              <Photo
                key={i}
                src={p.src}
                alt={p.alt}
                onZoom={onZoom}
                className="min-h-0"
              />
            ))}
          </div>
        </div>
      );

    case "final":
      return (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {page.title}
          </h2>
          {page.body && (
            <p className="mt-4 max-w-xs font-body text-ink-soft">{page.body}</p>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSurprise?.();
            }}
            className="mt-9 rounded-full border border-blush bg-transparent px-8 py-2.5 font-serif text-lg text-blush-deep transition-colors hover:bg-blush hover:text-page"
          >
            One last thing...
          </button>
        </div>
      );

    case "end":
      return (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <span className="mb-6 h-px w-16 bg-blush/60" />
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {page.title}
          </h2>
        </div>
      );

    default:
      return null;
  }
}
