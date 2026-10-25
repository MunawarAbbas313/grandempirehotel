"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Img } from "@/lib/site";

export default function Gallery({ photos }: { photos: { img: Img; alt: string }[] }) {
  const [open, setOpen] = useState<{ img: Img; alt: string } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="gallery reveal">
        {photos.map((p) => (
          <a
            key={p.img.src}
            href={p.img.src}
            onClick={(e) => {
              e.preventDefault();
              setOpen(p);
            }}
          >
            <Image src={p.img.src} alt={p.alt} fill sizes="(max-width: 860px) 50vw, 25vw" />
          </a>
        ))}
      </div>
      <div
        className={`lightbox${open ? " open" : ""}`}
        role="dialog"
        aria-label="Photo viewer"
        onClick={() => setOpen(null)}
      >
        <button aria-label="Close" onClick={() => setOpen(null)}>
          ×
        </button>
        {open && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={open.img.src} alt={open.alt} onClick={(e) => e.stopPropagation()} />
        )}
      </div>
    </>
  );
}
