import type { ReactNode } from "react";

export function Masthead({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 border-y-4 border-double border-foreground py-3 text-center">
      <div className="hidden w-16 border-t-2 border-foreground md:block" />
      <p className="font-typewriter text-xs uppercase text-muted-foreground md:tracking-[0.3em]">
        {children}
      </p>
      <div className="hidden w-16 border-t-2 border-foreground md:block" />
    </div>
  );
}