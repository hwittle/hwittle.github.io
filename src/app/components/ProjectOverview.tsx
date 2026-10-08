import type { ReactNode } from "react";
import { LightboxImage } from "./LightboxImage";
import type { OverviewData } from "../data/types";

interface ProjectOverviewProps extends OverviewData {
  footer?: ReactNode;
  children?: ReactNode;
}

const linkBase =
  "inline-block border-2 border-foreground px-4 py-2 text-sm uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2";
const linkPrimary =
  "bg-foreground text-background hover:bg-background hover:text-foreground";
const linkSecondary =
  "bg-transparent text-foreground hover:bg-foreground hover:text-background";

export function ProjectOverview({
  image,
  imageClassName = "aspect-[3/2] w-full object-cover object-top",
  paragraphs,
  note,
  stats,
  links,
  footer,
  children,
}: ProjectOverviewProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 border-l-4 border-foreground pl-4 text-3xl uppercase tracking-wide">
        Overview
      </h2>

      <div className="border-2 border-foreground bg-card">
        <div className="grid md:grid-cols-5">
          <figure className="border-b-2 border-foreground md:col-span-3 md:border-b-0 md:border-r-2">
            <LightboxImage
              src={image.src}
              alt={image.alt}
              className={imageClassName}
            />
            <figcaption className="border-t-2 border-foreground px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground font-bold">
              {image.caption} (click to enlarge)
            </figcaption>
          </figure>

          <div className="flex flex-col justify-center gap-4 p-6 leading-relaxed md:col-span-2">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            {note && (
              <p className="text-sm text-muted-foreground">
                {note}
              </p>
            )}
            {children}
            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {links.map(({ href, label }, i) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkBase} ${i === 0 ? linkPrimary : linkSecondary}`}
                  >
                    {label} ↗
                    <span className="sr-only">
                      {" "}
                      (opens in a new tab)
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {stats && stats.length > 0 && (
          <dl
            className="grid divide-x-2 divide-foreground border-t-2 border-foreground text-center"
            style={{
              gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
            }}
          >
            {stats.map(({ label, value }) => (
              <div key={label} className="p-4">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </dt>
                <dd className="text-xl md:text-2xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {footer && (
          <div className="border-t-2 border-foreground p-6">
            {footer}
          </div>
        )}
      </div>
    </section>
  );
}