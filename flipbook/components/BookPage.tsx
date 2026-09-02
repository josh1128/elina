"use client";

import { forwardRef } from "react";
import PageContent from "@/components/PageContent";
import type { Page } from "@/data/book";

type Props = {
  page: Page;
  onZoom: (src: string, alt?: string) => void;
  onSurprise?: () => void;
  hard?: boolean;
};

// react-pageflip passes a ref to each page; it must be a forwardRef component.
const BookPage = forwardRef<HTMLDivElement, Props>(function BookPage(
  { page, onZoom, onSurprise, hard },
  ref
) {
  return (
    <div
      ref={ref}
      className="h-full w-full bg-page"
      data-density={hard ? "hard" : "soft"}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-3 rounded-lg border border-soft-blue/55" />
        <div className="pointer-events-none absolute inset-y-3 left-3 w-4 bg-gradient-to-r from-dusty/10 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-5 h-px w-12 -translate-x-1/2 bg-soft-blue/55" />

        <div className="relative min-h-0 flex-1">
          <PageContent page={page} onZoom={onZoom} onSurprise={onSurprise} />
        </div>
      </div>
    </div>
  );
});

export default BookPage;
