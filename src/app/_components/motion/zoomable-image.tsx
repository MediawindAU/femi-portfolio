"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ZoomableImageProps = {
  src: string;
  alt: string;
  aspect: string;
  sizes?: string;
  containerClassName?: string;
};

export function ZoomableImage({
  src,
  alt,
  aspect,
  sizes = "(min-width: 1024px) 880px, 100vw",
  containerClassName = "",
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "+" || event.key === "=")
        setScale((s) => Math.min(s + 0.25, 4));
      if (event.key === "-" || event.key === "_")
        setScale((s) => Math.max(s - 0.25, 0.5));
      if (event.key === "0") setScale(1);
    };
    window.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  function openLightbox() {
    setScale(1);
    setOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        aria-label={`Open zoomable view: ${alt}`}
        className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-[16px] bg-white shadow-sm transition-all duration-500 hover:shadow-xl ${containerClassName}`}
      >
        <div
          className="relative w-full"
          style={{ aspectRatio: aspect.replace("/", " / ") }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-contain transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </div>
        <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:scale-105 sm:translate-y-0">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
            <path d="M11 8v6" />
            <path d="M8 11h6" />
          </svg>
          <span>Click to zoom</span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Zoom view"
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setOpen(false);
              }}
              aria-label="Close zoom view"
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <div
              className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white/10 p-1 backdrop-blur"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setScale((s) => Math.max(s - 0.25, 0.5))}
                aria-label="Zoom out"
                disabled={scale <= 0.5}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 disabled:opacity-40"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setScale(1)}
                aria-label="Reset zoom"
                className="min-w-[64px] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/15 rounded-full"
              >
                {Math.round(scale * 100)}%
              </button>
              <button
                type="button"
                onClick={() => setScale((s) => Math.min(s + 0.25, 4))}
                aria-label="Zoom in"
                disabled={scale >= 4}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 disabled:opacity-40"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </button>
            </div>

            <div
              className="relative h-full w-full overflow-auto"
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className="flex min-h-full min-w-full items-center justify-center p-2 sm:p-8"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "center center",
                  transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  draggable={false}
                  className="h-auto max-h-[calc(100vh-8rem)] w-auto max-w-full select-none rounded-md bg-white object-contain shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
