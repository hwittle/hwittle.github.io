import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LightboxImage({ src, alt, className }: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      // Keep focus inside the dialog: the close button is the only control
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${alt}`}
        className="block w-full cursor-zoom-in hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 transition-opacity"
      >
        <img src={src} alt="" className={clsx(className)} />
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
            onClick={() => setOpen(false)}
          >
            <button
              ref={closeRef}
              type="button"
              className="absolute top-4 right-4 border border-white/60 px-3 py-1 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white/20"
              onClick={() => setOpen(false)}
            >
              ✕ Close
            </button>
            <img
              src={src}
              alt={alt}
              className="max-h-[85vh] max-w-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}