import type { Specification } from "../data/types";

export function ProjectScope({
  specifications,
}: {
  specifications: Specification[];
}) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 border-l-4 border-foreground pl-4 text-3xl uppercase tracking-wide">
        Project Scope
      </h2>
      <dl className="grid gap-6 border-2 border-foreground bg-card p-6 sm:grid-cols-2">
        {specifications.map(({ label, values, groups }) => (
          <div key={label}>
            <dt className="mb-2 uppercase tracking-widest">
              {label}
            </dt>
            <dd className="space-y-3">
              {groups?.map(({ heading, values }) => (
                <div key={heading}>
                  <h4 className="mb-1 font-bold text-muted-foreground">{heading}</h4>
                  <ul className="space-y-2 leading-relaxed">
                    {values.map((value) => (
                      <li
                        key={value}
                        className="flex items-start"
                      >
                        <span className="mr-2">▸</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {values && (
                <ul className="space-y-2 leading-relaxed">
                  {values.map((value) => (
                    <li
                      key={value}
                      className="flex items-start"
                    >
                      <span className="mr-2">▸</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}