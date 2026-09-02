"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import HTMLFlipBookImport from "react-pageflip";
import BookPage from "@/components/BookPage";
import Lightbox from "@/components/Lightbox";
import FinalSurprise from "@/components/FinalSurprise";
import { pages } from "@/data/book";
import { getSeasonPalette } from "@/lib/season";

// react-pageflip's types mark several optional props as required; relax them.
const HTMLFlipBook = HTMLFlipBookImport as unknown as ComponentType<any>;

export default function Flipbook() {
  const bookRef = useRef<any>(null);
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState<{ src: string; alt?: string } | null>(null);
  const [surpriseOpen, setSurpriseOpen] = useState(false);

  const total = pages.length;
  const progress = Math.min(((current + 1) / total) * 100, 100);
  const season = getSeasonPalette(current, total);

  const flipNext = useCallback(() => {
    bookRef.current?.pageFlip()?.flipNext();
  }, []);
  const flipPrev = useCallback(() => {
    bookRef.current?.pageFlip()?.flipPrev();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoom || surpriseOpen) return;
      if (e.key === "ArrowRight") flipNext();
      if (e.key === "ArrowLeft") flipPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flipNext, flipPrev, zoom, surpriseOpen]);

  const openZoom = useCallback((src: string, alt?: string) => {
    setZoom({ src, alt });
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="relative w-full max-w-[1160px] rounded-[42px] px-2 py-3 transition-all duration-700 sm:px-4 sm:py-5"
        style={{
          background: `radial-gradient(circle at 50% 38%, ${season.ambient} 0%, transparent 68%)`,
        }}
      >
        <HTMLFlipBook
          ref={bookRef}
          width={440}
          height={580}
          size="stretch"
          minWidth={280}
          maxWidth={560}
          minHeight={380}
          maxHeight={740}
          showCover={true}
          mobileScrollSupport={true}
          maxShadowOpacity={0.24}
          drawShadow={true}
          flippingTime={700}
          useMouseEvents={true}
          clickEventForward={true}
          className="book-shadow mx-auto"
          onFlip={(e: { data: number }) => setCurrent(e.data)}
        >
          {pages.map((page, i) => (
            <BookPage
              key={i}
              page={page}
              index={i}
              total={total}
              onZoom={openZoom}
              onSurprise={() => setSurpriseOpen(true)}
              hard={i === 0 || i === total - 1}
            />
          ))}
        </HTMLFlipBook>
      </div>

      <div
        className="mt-7 flex items-center gap-5 rounded-full border bg-page/80 px-4 py-2.5 shadow-coastal backdrop-blur-md transition-all duration-700"
        style={{ borderColor: season.border }}
      >
        <button
          type="button"
          onClick={flipPrev}
          className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-white shadow-md transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-40"
          style={{ backgroundColor: season.control }}
          aria-label="Previous page"
        >
          ‹
        </button>

        <div className="min-w-[92px] text-center">
          <span
            className="block font-body text-sm tracking-[0.08em] transition-colors duration-700"
            style={{ color: season.accent }}
          >
            {Math.min(current + 1, total)} / {total}
          </span>
          <span
            className="mt-0.5 block font-serif text-[0.65rem] uppercase tracking-[0.2em] transition-colors duration-700"
            style={{ color: season.inkSoft }}
          >
            {season.label}
          </span>
        </div>

        <button
          type="button"
          onClick={flipNext}
          className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-white shadow-md transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-40"
          style={{ backgroundColor: season.control }}
          aria-label="Next page"
        >
          ›
        </button>
      </div>

      <div
        className="mt-4 h-1.5 w-56 overflow-hidden rounded-full bg-page/80 ring-1 transition-all duration-700 sm:w-72"
        style={{
          boxShadow: `0 0 0 1px ${season.border}`,
        }}
      >
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, #6F96B4 0%, ${season.progress} 100%)`,
          }}
        />
      </div>

      <p
        className="mt-3 font-body text-xs italic transition-colors duration-700"
        style={{ color: season.inkSoft }}
      >
        Click, swipe, or use ← → to turn the pages.
      </p>

      <Lightbox
        src={zoom?.src ?? null}
        alt={zoom?.alt}
        onClose={() => setZoom(null)}
      />

      <FinalSurprise
        open={surpriseOpen}
        onClose={() => setSurpriseOpen(false)}
      />
    </div>
  );
}
