import type { ProcessStep } from "../data/types";

export function ProcessCards({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 border-l-4 border-foreground pl-4 text-3xl uppercase tracking-wide">
        Process
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {steps.map(({ topic, challenge, response }) => (
          <div key={topic} className="border-2 border-foreground bg-card">
            <h3 className="border-b-2 border-foreground px-6 py-3 uppercase tracking-wide">
              {topic}
            </h3>
            <dl className="space-y-4 p-6 leading-relaxed">
              <div>
                <dt className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Challenge
                </dt>
                <dd>{challenge}</dd>
              </div>
              <div>
                <dt className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Response
                </dt>
                <dd>{response}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}