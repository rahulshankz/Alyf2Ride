"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";
import type { GalleryImage } from "@/lib/gallery";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () =>
      setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, showPrev, showNext]);

  const active = openIndex === null ? null : images[openIndex];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative aspect-square overflow-hidden bg-charcoal-lighter text-left"
          >
            <Image
              src={withBasePath(item.src)}
              alt={item.alt}
              fill
              loading={index < 4 ? "eager" : "lazy"}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/90 via-charcoal/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="p-3 font-heading text-xs uppercase tracking-wider text-cream">
                {item.label}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 text-3xl leading-none text-cream-dim hover:text-cream"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-4 text-3xl text-cream-dim hover:text-cream sm:left-6"
          >
            &lsaquo;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-4 text-3xl text-cream-dim hover:text-cream sm:right-6"
          >
            &rsaquo;
          </button>

          <img
            src={withBasePath(active.src)}
            alt={active.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-full object-contain sm:max-w-[90vw]"
          />

          <div
            className="mt-4 flex items-center gap-3 text-cream-dim"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-heading text-sm uppercase tracking-wider text-cream">
              {active.label}
            </p>
            {active.href && (
              <Link
                href={active.href}
                className="text-sm text-rust hover:text-rust-light"
              >
                View ride &rarr;
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
