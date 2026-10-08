import type { WorkflowStep } from "../data/types";

export function WorkflowSteps({ intro, steps }: { intro?: string; steps: WorkflowStep[] }) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 border-l-4 border-foreground pl-4 text-3xl uppercase tracking-wide">
        Process
      </h2>
      {intro && <p className="mb-6 leading-relaxed">{intro}</p>}
      <ol className="grid gap-6 md:grid-cols-2">
        {steps.map(({ title, detail }, i) => (
          <li key={title} className="border-2 border-foreground bg-card">
            <h3 className="flex items-baseline gap-3 border-b-2 border-foreground px-6 py-3 uppercase tracking-wide">
              <span className="text-xs tracking-widest text-muted-foreground">Step {i + 1}</span>
              {title}
            </h3>
            <p className="p-6 leading-relaxed">{detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}