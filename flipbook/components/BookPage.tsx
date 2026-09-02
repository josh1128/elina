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

  return (
    <div
      ref={ref}
      className="seasonal-page h-full w-full"
      style={seasonalStyle}
      data-density={hard ? "hard" : "soft"}
      data-season={season.label}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden p-6 sm:p-8">
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
          className="pointer-events-none absolute right-6 top-4 font-serif text-lg opacity-55 transition-colors duration-700 sm:right-7"
          style={{ color: season.accent }}
          aria-hidden
        >
          {season.ornament}
        </div>

        <div className="relative min-h-0 flex-1">
          <PageContent page={page} onZoom={onZoom} onSurprise={onSurprise} />
        </div>
      </div>
    </div>
  );
});

export default BookPage;
