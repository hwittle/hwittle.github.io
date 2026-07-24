import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LightboxImage({ src, alt, className }: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={clsx("cursor-zoom-in", className)}
        onClick={() => setOpen(true)}
      />

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
            onClick={() => setOpen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white uppercase tracking-widest text-sm border border-white/60 px-3 py-1 hover:bg-white/20 transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close lightbox"
            >
              ✕ Close
            </button>
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
