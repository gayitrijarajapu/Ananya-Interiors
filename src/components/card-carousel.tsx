"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export function CardCarousel({ children, label, variant }: {
  children: ReactNode;
  label: string;
  variant: "category" | "project";
}) {
  const id = useId();
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const list = track.current;
    if (!list) return;

    const update = () => {
      const start = list.scrollLeft <= 1;
      const end = list.scrollLeft + list.clientWidth >= list.scrollWidth - 1;
      setEdges((previous) => previous.start === start && previous.end === end ? previous : { start, end });
    };

    update();
    list.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(list);
    return () => {
      list.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  function move(direction: -1 | 1) {
    const list = track.current;
    if (!list || list.children.length < 2) return;
    const first = list.children[0].getBoundingClientRect();
    const second = list.children[1].getBoundingClientRect();
    list.scrollBy({ left: direction * (second.left - first.left) });
  }

  return (
    <div className={`card-carousel card-carousel-${variant}`}>
      <ul id={id} ref={track} className="card-track" aria-label={label}>
        {children}
      </ul>
      <div className="carousel-controls">
        <button type="button" aria-label={`Previous ${label}`} aria-controls={id} disabled={edges.start} onClick={() => move(-1)}><ChevronLeft size={19} aria-hidden /></button>
        <button type="button" aria-label={`Next ${label}`} aria-controls={id} disabled={edges.end} onClick={() => move(1)}><ChevronRight size={19} aria-hidden /></button>
      </div>
    </div>
  );
}
