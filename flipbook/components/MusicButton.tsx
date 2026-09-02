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
        setPlaying(false);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-soft-blue/80 bg-page/90 px-4 py-2 font-body text-sm text-navy shadow-coastal backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white"
      aria-pressed={playing}
    >
      <span className="text-dusty" aria-hidden>{playing ? "❚❚" : "♪"}</span>
      <span>{playing ? "Pause" : music.label}</span>
    </button>
  );
}
