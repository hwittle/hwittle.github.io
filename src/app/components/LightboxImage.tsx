/**
 * LIGHTBOX IMAGE COMPONENT
 *
 * Drop-in replacement for <img> on project detail pages.
 * Clicking the image opens a full-screen lightbox overlay.
 * Close by clicking the backdrop, the × button, or pressing Escape.
 */

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LightboxImage({ src, alt, className }: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in ${className ?? ""}`}
        onClick={() => setOpen(true)}
      />

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
            onClick={close}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white uppercase tracking-widest text-sm border border-white/60 px-3 py-1 hover:bg-white/20 transition-colors"
              onClick={close}
              aria-label="Close lightbox"
            >
              ✕ Close
            </button>

            {/* Image — stop propagation so clicking the image itself doesn't close */}
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
