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
      <div className="relative flex h-full w-full flex-col p-6 sm:p-8">
        {/* subtle inner frame */}
        <div className="pointer-events-none absolute inset-3 rounded-md border border-ink/5" />

        <div className="min-h-0 flex-1">
          <PageContent page={page} onZoom={onZoom} onSurprise={onSurprise} />
        </div>
      </div>
    </div>
  );
});

export default BookPage;
