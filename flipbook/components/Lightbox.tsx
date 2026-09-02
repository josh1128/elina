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
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/75 p-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-soft-blue/60 bg-page p-2 shadow-page"
          >
            <div className="relative h-[70vh] w-full overflow-hidden rounded-xl bg-cream">
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
              className="absolute right-4 top-4 rounded-full border border-soft-blue/70 bg-page/90 px-3 py-1 font-body text-sm text-navy shadow-coastal backdrop-blur hover:bg-white"
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
