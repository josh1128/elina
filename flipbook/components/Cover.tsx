"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cover } from "@/data/book";

export default function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 14, rotateY: -3 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative aspect-[3/4] w-full max-w-[430px] overflow-hidden rounded-[28px] bg-navy shadow-page ring-1 ring-soft-blue/80"
      >
        <Image
          src="/photos/our-first-cover.jpg"
          alt="Josh and Elina — one of our first memories"
          fill
          priority
          sizes="(max-width: 640px) 92vw, 430px"
          className="object-cover object-center grayscale"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0C283E]/90 via-[#183B56]/15 to-transparent" />
        <div className="pointer-events-none absolute inset-3 rounded-[22px] border border-white/25" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start px-8 pb-9 text-left text-white sm:px-10 sm:pb-11">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-xs uppercase tracking-[0.32em] text-white/80"
          >
            Josh & Elina
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.65 }}
            className="mt-3 font-serif text-5xl font-medium uppercase leading-[0.9] tracking-[0.04em] text-white sm:text-6xl"
          >
            {cover.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.65 }}
            className="mt-4 max-w-xs font-body text-base leading-relaxed text-white/90"
          >
            {cover.subtitle}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.6 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpen}
            className="mt-7 rounded-full border border-white/40 bg-white/10 px-7 py-2.5 font-serif text-base tracking-wide text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/20"
          >
            {cover.openLabel} →
          </motion.button>

          <p className="mt-5 font-hand text-lg text-white/75">made with love ♡</p>
        </div>
      </motion.div>
    </div>
  );
}
