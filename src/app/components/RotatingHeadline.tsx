import { useState, useEffect } from "react";
import { Link } from "react-router";
import { projects } from "../data/projects";

const DURATION = 10000;

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    setReduce(mq.matches);
    const onChange = (e: MediaQueryListEvent) =>
      setReduce(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

export function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduceMotion = usePrefersReducedMotion();

  const total = projects.length;
  const playing = !paused && !focused && !reduceMotion;
  const project = projects[index];

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const iconButton =
    "px-3 py-1 text-xl hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <section
      aria-label="Inside this issue"
      className="mt-6 flex flex-col items-center md:mt-8"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
        Inside This Issue
      </div>

      <div className="flex w-full max-w-xl items-center justify-between gap-2">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous project"
          className={iconButton}
        >
          ←
        </button>
        <div
          className="flex min-h-[3rem] flex-1 items-center justify-center text-center"
          aria-live={playing ? "off" : "polite"}
        >
          <Link
            to={`/projects/${project.slug}`}
            className="text-sm uppercase tracking-wide underline-offset-4 hover:opacity-60 hover:underline transition-opacity md:text-base"
          >
            {project.title}
          </Link>
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next project"
          className={iconButton}
        >
          →
        </button>
      </div>

      {!reduceMotion && (
        <div
          className="mt-2 h-0.5 w-48 bg-foreground/20"
          aria-hidden="true"
        >
          <div
            key={index}
            className="h-full origin-left bg-foreground"
            style={{
              animation: `headline-progress ${DURATION}ms linear forwards`,
              animationPlayState: playing
                ? "running"
                : "paused",
            }}
            onAnimationEnd={next}
          />
        </div>
      )}

      <div className="mt-2 flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground">
        <span>
          {index + 1} / {total}
        </span>
        {!reduceMotion && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="inline-flex items-center"
          >
            {paused ? (
              <svg
                className="h-[1em] w-[1em] text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            ) : (
              <svg
                className="h-[1em] w-[1em] text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </section>
  );
}