"use client";

import { forwardRef } from "react";
import type { CSSProperties } from "react";
import PageContent from "@/components/PageContent";
import type { Page } from "@/data/book";
import { getSeasonPalette } from "@/lib/season";

type Props = {
  page: Page;
  index: number;
  total: number;
  onZoom: (src: string, alt?: string) => void;
  onSurprise?: () => void;
  hard?: boolean;
};

function CatPaw() {
  return (
    <svg viewBox="0 0 42 42" className="h-full w-full" aria-hidden>
      <ellipse cx="11" cy="12" rx="4.2" ry="5.3" fill="currentColor" />
      <ellipse cx="20" cy="8" rx="4.2" ry="5.3" fill="currentColor" />
      <ellipse cx="29" cy="11" rx="4.2" ry="5.3" fill="currentColor" />
      <ellipse cx="34" cy="20" rx="3.8" ry="4.8" fill="currentColor" />
      <path
        d="M12.5 27.8C12.5 20.9 16.7 16.5 22 16.5C27.3 16.5 31.5 20.9 31.5 27.8C31.5 33.7 27.3 36 22 36C16.7 36 12.5 33.7 12.5 27.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

// react-pageflip passes a ref to each page; it must be a forwardRef component.
const BookPage = forwardRef<HTMLDivElement, Props>(function BookPage(
  { page, index, total, onZoom, onSurprise, hard },
  ref
) {
  const season = getSeasonPalette(index, total);
  const seasonalStyle = {
    background: `linear-gradient(145deg, ${season.page} 0%, ${season.pageGlow} 100%)`,
    "--season-ink": season.ink,
    "--season-ink-soft": season.inkSoft,
    "--season-accent": season.accent,
  } as CSSProperties;

  const pawLayouts: CSSProperties[][] = [
    [
      { left: "5%", top: "18%", transform: "rotate(-20deg)" },
      { right: "6%", bottom: "14%", transform: "rotate(18deg)" },
    ],
    [
      { right: "7%", top: "24%", transform: "rotate(16deg)" },
      { left: "7%", bottom: "10%", transform: "rotate(-12deg)" },
    ],
    [
      { left: "6%", top: "35%", transform: "rotate(-8deg)" },
      { right: "5%", bottom: "24%", transform: "rotate(22deg)" },
    ],
    [
      { right: "6%", top: "13%", transform: "rotate(12deg)" },
      { left: "5%", bottom: "22%", transform: "rotate(-18deg)" },
    ],
  ];
  const pagePaws = pawLayouts[index % pawLayouts.length];

  return (
    <div
      ref={ref}
      className="seasonal-page h-full w-full"
      style={seasonalStyle}
      data-density={hard ? "hard" : "soft"}
      data-season={season.label}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden p-6 sm:p-8">
        {pagePaws.map((pawStyle, pawIndex) => (
          <div
            key={pawIndex}
            className={`page-cat-paw page-cat-paw-${pawIndex + 1}`}
            style={{ ...pawStyle, color: season.accent }}
            aria-hidden
          >
            <CatPaw />
          </div>
        ))}

        <div
          className="pointer-events-none absolute inset-3 rounded-lg border transition-colors duration-700"
          style={{ borderColor: season.border }}
        />
        <div
          className="pointer-events-none absolute inset-y-3 left-3 w-4 transition-all duration-700"
          style={{
            backgroundImage: `linear-gradient(to right, ${season.spine}, transparent)`,
          }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-5 h-px w-12 -translate-x-1/2 transition-colors duration-700"
          style={{ backgroundColor: season.border }}
        />

        <div
          className="season-ornament pointer-events-none absolute right-6 top-4 font-serif text-lg opacity-55 transition-colors duration-700 sm:right-7"
          style={{ color: season.accent }}
          aria-hidden
        >
          {season.ornament}
        </div>

        <div className="relative z-10 min-h-0 flex-1">
          <PageContent page={page} onZoom={onZoom} onSurprise={onSurprise} />
        </div>
      </div>
    </div>
  );
});

export default BookPage;
