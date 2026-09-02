"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { surprise } from "@/data/book";

const HEARTS = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  left: 6 + Math.random() * 88,
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
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-cream/95 p-6 text-center backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          {HEARTS.map((h) => (
            <motion.span
              key={h.id}
              initial={{ y: "105vh", opacity: 0 }}
              animate={{
                y: "-15vh",
                x: [0, h.drift, 0],
                opacity: [0, 0.6, 0.6, 0],
              }}
              transition={{
                duration: h.duration,
                delay: h.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ left: `${h.left}%`, fontSize: h.size }}
              className="pointer-events-none absolute text-dusty"
              aria-hidden
            >
              ♡
            </motion.span>
          ))}

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="relative z-10 rounded-[28px] border border-soft-blue/70 bg-page/80 px-8 py-10 shadow-page backdrop-blur-md sm:px-12"
          >
            <p className="mb-5 font-body text-xs uppercase tracking-[0.28em] text-dusty">one last thing</p>
            {surprise.lines.map((line, i) => (
              <p
                key={i}
                className="font-serif text-3xl leading-snug text-navy sm:text-4xl"
              >
                {line}
              </p>
            ))}

            <div className="mx-auto mt-7 flex items-center justify-center gap-3 text-dusty/75" aria-hidden>
              <span className="h-px w-10 bg-soft-blue" />
              <span>♡</span>
              <span className="h-px w-10 bg-soft-blue" />
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-navy px-7 py-2 font-body text-sm text-white shadow-coastal transition-all hover:-translate-y-0.5 hover:bg-blush-deep"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
