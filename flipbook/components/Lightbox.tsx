"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  src: string | null;
  alt?: string;
  onClose: () => void;
};

export default function Lightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-md bg-page p-2 shadow-2xl"
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={src}
                alt={alt ?? ""}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full bg-page/90 px-3 py-1 font-body text-sm text-ink shadow ring-1 ring-ink/10 hover:bg-cream"
              aria-label="Close"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
