import { clsx } from "clsx";
import { LightboxImage } from "./LightboxImage";

export type FindingStatus = "Add" | "Remove" | "Update";

export interface Finding {
  finding: string;
  status: FindingStatus;
  recommendation: string;
}

export interface FindingImage {
  src: string;
  alt: string;
  caption?: string;
}

interface FindingsTableProps {
  title: string;
  images: FindingImage[];
  findings: Finding[];
  narrowImage?: boolean;
}

const cellLabel =
  "mb-1 block text-xs uppercase tracking-widest text-muted-foreground md:hidden";

const headCell =
  "border-b-2 border-foreground p-6 text-left font-bold uppercase tracking-wide";

export function FindingsTable({
  title,
  images,
  findings,
  narrowImage = false,
}: FindingsTableProps) {
  return (
    <div className="border-2 border-foreground bg-card">
      <h3 className="border-b-2 border-foreground px-6 py-3 uppercase tracking-wide">
        {title}
      </h3>

      <div
        className={clsx(
          "grid gap-6 border-b-2 border-foreground p-6",
          images.length > 1 && "md:grid-cols-2",
        )}
      >
        {images.map((img) => (
          <figure
            key={img.src}
            className={clsx(
              "border-2 border-foreground bg-background",
              narrowImage && "mx-auto w-full md:w-3/4",
            )}
          >
            <LightboxImage
              src={img.src}
              alt={img.alt}
              className="w-full p-2"
            />
            {img.caption && (
              <figcaption className="border-t-2 border-foreground px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
                {img.caption} (click to enlarge)
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <table className="block w-full text-left md:table">
        <caption className="sr-only">
          {title}: findings and recommendations
        </caption>
        <thead className="hidden md:table-header-group">
          <tr>
            <th
              scope="col"
              className={clsx(
                headCell,
                "w-[44%] md:border-r-2",
              )}
            >
              Finding
            </th>
            <th
              scope="col"
              className={clsx(
                headCell,
                "w-[12%] md:border-r-2",
              )}
            >
              Status
            </th>
            <th
              scope="col"
              className={clsx(headCell, "w-[44%]")}
            >
              Recommendation
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {findings.map((f, i) => (
            <tr
              key={i}
              className="group block border-b-2 border-foreground last:border-b-0 md:table-row md:border-b-0"
            >
              <td className="block px-6 py-3 align-top md:table-cell md:border-b-2 md:border-r-2 md:border-foreground md:group-last:border-b-0">
                <span className={cellLabel}>Finding</span>
                <p className="tracking-wide">
                  <span className="mr-1 font-bold">
                    {i + 1}.
                  </span>
                  {f.finding}
                </p>
              </td>
              <td className="block px-6 py-3 align-top md:table-cell md:border-b-2 md:border-r-2 md:border-foreground md:group-last:border-b-0">
                <span className={cellLabel}>Status</span>
                <span className="inline-block border border-foreground bg-background px-2 py-0.5 text-sm uppercase tracking-wide">
                  {f.status}
                </span>
              </td>
              <td className="block px-6 py-3 align-top md:table-cell md:border-b-2 md:border-foreground md:group-last:border-b-0">
                <span className={cellLabel}>
                  Recommendation
                </span>
                <p className="tracking-wide">
                  {f.recommendation}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}