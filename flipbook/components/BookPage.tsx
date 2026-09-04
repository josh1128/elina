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

function ChapterScene({
  theme,
}: {
  theme: "lake" | "volleyball" | "meals" | "adventures";
}) {
  if (theme === "lake") {
    return (
      <div className="chapter-scene chapter-lake" aria-hidden>
        <span className="chapter-lake-sun" />
        <svg className="chapter-lake-mountains" viewBox="0 0 500 170" preserveAspectRatio="none">
          <path d="M0 145L92 70L145 112L218 38L290 118L356 60L500 145V170H0Z" fill="currentColor" />
        </svg>
        <span className="chapter-wave chapter-wave-1" />
        <span className="chapter-wave chapter-wave-2" />
        <span className="chapter-wave chapter-wave-3" />
      </div>
    );
  }

  if (theme === "volleyball") {
    return (
      <div className="chapter-scene chapter-volleyball" aria-hidden>
        <div className="chapter-court">
          <span className="chapter-net" />
          <span className="chapter-court-line chapter-court-line-left" />
          <span className="chapter-court-line chapter-court-line-right" />
        </div>
        <div className="chapter-volleyball-ball">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (theme === "adventures") {
    const moments = [
      { icon: "🏺", label: "Pottery", className: "left-[8%] top-[16%] -rotate-6" },
      { icon: "🏐", label: "Volleyball", className: "right-[7%] top-[18%] rotate-6" },
      { icon: "🧶", label: "Knitting", className: "left-[7%] bottom-[25%] rotate-3" },
      { icon: "🥾", label: "Hiking", className: "right-[8%] bottom-[25%] -rotate-3" },
      { icon: "✈️", label: "Travelling", className: "left-1/2 bottom-[9%] -translate-x-1/2" },
    ];

    return (
      <div className="chapter-scene" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5B77B]/30 via-[#F5D7BC]/20 to-[#9FC7D6]/30" />
        <div className="absolute right-[10%] top-[9%] h-16 w-16 rounded-full bg-[#F5A85D]/35 shadow-[0_0_42px_rgba(245,168,93,0.42)]" />

        <svg
          viewBox="0 0 500 190"
          preserveAspectRatio="none"
          className="absolute bottom-[18%] left-0 h-[34%] w-full text-[#33586B]/15"
        >
          <path d="M0 165L72 110L118 138L198 55L258 136L330 82L410 146L500 92V190H0Z" fill="currentColor" />
        </svg>

        <div className="absolute bottom-0 left-0 h-[23%] w-full bg-gradient-to-b from-[#A9D0DC]/30 via-[#7FB0C3]/24 to-[#4A7E96]/18" />
        <div className="absolute bottom-[12%] left-[8%] h-px w-[84%] bg-white/45" />
        <div className="absolute bottom-[8%] left-[16%] h-px w-[68%] bg-white/35" />

        {moments.map((moment) => (
          <div
            key={moment.label}
            className={`absolute flex min-w-[88px] flex-col items-center rounded-xl border border-white/55 bg-white/45 px-3 py-2 text-center shadow-sm backdrop-blur-[2px] ${moment.className}`}
          >
            <span className="text-2xl">{moment.icon}</span>
            <span className="mt-1 font-hand text-[0.9rem] text-[#31546A]">{moment.label}</span>
          </div>
        ))}

        <span className="absolute left-[5%] top-[8%] rotate-[-18deg] text-xl opacity-45">🐾</span>
        <span className="absolute right-[5%] top-[39%] rotate-[18deg] text-lg opacity-40">🐾</span>
        <span className="absolute left-[10%] bottom-[8%] rotate-[12deg] text-lg opacity-40">🐾</span>
        <span className="absolute right-[11%] bottom-[7%] rotate-[-12deg] text-xl opacity-45">🐾</span>
      </div>
    );
  }

  return (
    <div className="chapter-scene chapter-meals" aria-hidden>
      <div className="chapter-plate">
        <span className="chapter-plate-heart">♡</span>
      </div>
      <div className="chapter-fork">
        <span /><span /><span /><span />
      </div>
      <div className="chapter-spoon" />
      <div className="chapter-steam chapter-steam-1" />
      <div className="chapter-steam chapter-steam-2" />
      <div className="chapter-steam chapter-steam-3" />
    </div>
  );
}

// react-pageflip passes a ref to each page; it must be a forwardRef component.
const BookPage = forwardRef<HTMLDivElement, Props>(function BookPage(
  { page, index, total, onZoom, onSurprise, hard },
  ref
) {
  const season = getSeasonPalette(index, total);
  const chapterTheme = page.type === "title" ? page.theme : undefined;
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
      data-chapter={chapterTheme}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden p-6 sm:p-8">
        {chapterTheme && <ChapterScene theme={chapterTheme} />}

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
