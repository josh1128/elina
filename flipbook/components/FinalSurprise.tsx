"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { surprise } from "@/data/book";

// A few gentle floating hearts — subtle, not a confetti storm.
const HEARTS = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  left: 6 + Math.random() * 88, // vw %
  delay: Math.random() * 2.2,
  duration: 6 + Math.random() * 4,
  size: 14 + Math.random() * 16,
  drift: (Math.random() - 0.5) * 60,
}));

export default function FinalSurprise({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-cream/95 p-6 text-center backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          {/* floating hearts */}
          {HEARTS.map((h) => (
            <motion.span
              key={h.id}
              initial={{ y: "105vh", opacity: 0 }}
              animate={{
                y: "-15vh",
                x: [0, h.drift, 0],
                opacity: [0, 0.7, 0.7, 0],
              }}
              transition={{
                duration: h.duration,
                delay: h.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ left: `${h.left}%`, fontSize: h.size }}
              className="pointer-events-none absolute text-blush"
              aria-hidden
            >
              ❤
            </motion.span>
          ))}

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="relative z-10"
          >
            {surprise.lines.map((line, i) => (
              <p
                key={i}
                className="font-serif text-3xl leading-snug text-ink sm:text-4xl"
              >
                {line}
              </p>
            ))}

            <button
              type="button"
              onClick={onClose}
              className="mt-10 rounded-full border border-blush px-7 py-2 font-body text-sm text-blush-deep transition-colors hover:bg-blush hover:text-page"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
