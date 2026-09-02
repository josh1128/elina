"use client";

import { useEffect, useRef, useState } from "react";
import { music } from "@/data/book";

export default function MusicButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(music.src);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        // If the file is missing or blocked, fail quietly.
        setPlaying(false);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-page/90 px-4 py-2 font-body text-sm text-ink shadow-md ring-1 ring-ink/10 backdrop-blur transition-colors hover:bg-cream"
      aria-pressed={playing}
    >
      <span aria-hidden>{playing ? "❚❚" : "♪"}</span>
      <span>{playing ? "Pause" : music.label}</span>
    </button>
  );
}
