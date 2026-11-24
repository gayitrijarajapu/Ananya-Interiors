"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = video.current;
    if (player && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      void player.play().catch(() => {
        // The poster remains visible when autoplay is blocked.
      });
    }
  }, []);

  return (
    <video
      ref={video}
      className="hero-image hero-video"
      src="/videos/hero-interiors.mp4"
      poster="/images/hero-video-poster.webp"
      preload="metadata"
      muted
      loop
      playsInline
      aria-hidden="true"
    />
  );
}
