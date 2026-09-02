"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import HTMLFlipBookImport from "react-pageflip";
import BookPage from "@/components/BookPage";

// react-pageflip's types mark several optional props as required; relax them.
const HTMLFlipBook = HTMLFlipBookImport as unknown as ComponentType<any>;
import Lightbox from "@/components/Lightbox";
import FinalSurprise from "@/components/FinalSurprise";
import { pages } from "@/data/book";

export default function Flipbook() {
  const bookRef = useRef<any>(null);
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState<{ src: string; alt?: string } | null>(null);
  const [surpriseOpen, setSurpriseOpen] = useState(false);

  const total = pages.length;

  const flipNext = useCallback(() => {
    bookRef.current?.pageFlip()?.flipNext();
  }, []);
  const flipPrev = useCallback(() => {
    bookRef.current?.pageFlip()?.flipPrev();
  }, []);

  // Left / right arrow keys turn the pages.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoom || surpriseOpen) return; // let overlays own the keyboard
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
      <div className="w-full max-w-[1120px]">
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
          maxShadowOpacity={0.3}
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
              onZoom={openZoom}
              onSurprise={() => setSurpriseOpen(true)}
              hard={i === 0 || i === total - 1}
            />
          ))}
        </HTMLFlipBook>
      </div>

      {/* Controls: previous / counter / next */}
      <div className="mt-6 flex items-center gap-5">
        <button
          type="button"
          onClick={flipPrev}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-page text-ink shadow ring-1 ring-ink/10 transition-colors hover:bg-cream disabled:opacity-40"
          aria-label="Previous page"
        >
          ‹
        </button>

        <span className="min-w-[64px] text-center font-body text-sm tracking-wide text-ink-soft">
          {Math.min(current + 1, total)} / {total}
        </span>

        <button
          type="button"
          onClick={flipNext}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-page text-ink shadow ring-1 ring-ink/10 transition-colors hover:bg-cream disabled:opacity-40"
          aria-label="Next page"
        >
          ›
        </button>
      </div>

      <p className="mt-3 font-body text-xs italic text-ink-soft/70">
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
