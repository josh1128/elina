"use client";

import { motion } from "framer-motion";
import { cover } from "@/data/book";

export default function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center text-center">
      <div className="relative rounded-2xl bg-page px-10 py-16 shadow-page ring-1 ring-ink/5 sm:px-16 sm:py-20">
        {/* thin inner border, like a keepsake card */}
        <div className="pointer-events-none absolute inset-3 rounded-xl border border-blush/40" />

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-serif text-5xl font-medium leading-tight text-ink sm:text-6xl"
        >
          {cover.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mx-auto mt-5 max-w-sm font-body text-lg leading-relaxed text-ink-soft"
        >
          {cover.subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpen}
          className="mt-10 rounded-full bg-blush px-10 py-3 font-serif text-lg tracking-wide text-page shadow-md transition-colors hover:bg-blush-deep"
        >
          {cover.openLabel}
        </motion.button>
      </div>
    </div>
  );
}
