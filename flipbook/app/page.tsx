"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import Cover from "@/components/Cover";
import MusicButton from "@/components/MusicButton";
import { music } from "@/data/book";

// react-pageflip touches the DOM, so load the book only on the client.
const Flipbook = dynamic(() => import("@/components/Flipbook"), {
  ssr: false,
  loading: () => (
    <p className="font-hand text-2xl text-ink-soft">Opening the book…</p>
  ),
});

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-8">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="cover"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <Cover onOpen={() => setOpened(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="book"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full"
          >
            <Flipbook />
          </motion.div>
        )}
      </AnimatePresence>

      {music.enabled && <MusicButton />}
    </main>
  );
}
