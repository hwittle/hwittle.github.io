import { useState, useEffect } from "react";
import { projects } from "../data/projects";

export function RotatingHeadline() {
  const headlines = projects.map((p) => p.title);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % headlines.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(timer);
  }, [headlines.length]);

  return (
    <div className="flex flex-col items-center mt-6 md:mt-8">
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
        Inside This Issue
      </div>
      <div
        className={`text-sm md:text-base uppercase tracking-wide transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {headlines[index]}
      </div>
    </div>
  );
}