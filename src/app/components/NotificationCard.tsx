import { LightboxImage } from "./LightboxImage";
import type { NotificationItem } from "../data/types";

export function NotificationCard({
  number,
  item,
}: {
  number: number;
  item: NotificationItem;
}) {
  return (
    <div className="border-2 border-foreground bg-card">
      <h3 className="border-b-2 border-foreground px-6 py-3 uppercase tracking-wide">
        Notification {number}: {item.name}
      </h3>
      <div className="grid items-start gap-6 p-6 md:grid-cols-2">
        <LightboxImage
          src={item.image.src}
          alt={item.image.alt}
          className="w-full border-2 p-1"
        />
        <div className="space-y-4 leading-relaxed">
          <dl className="space-y-2 border-l-2 border-foreground bg-muted/40 px-4 py-3">
            {item.copy.map(({ label, text, quoted = true }) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </dt>
                <dd>{quoted ? `"${text}"` : text}</dd>
              </div>
            ))}
          </dl>
          <ul className="space-y-2">
            {item.rationale.map((point) => (
              <li key={point} className="flex items-start">
                <span className="mr-2">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}