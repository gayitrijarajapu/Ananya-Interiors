import { Building2, MessagesSquare, Ruler } from "lucide-react";

const highlights = [
  { label: "Happy customers", value: "347+" },
  { label: "Service locations", value: "8+" },
  { label: "Homes, villas, offices, restaurants & cafés", icon: Building2 },
  { label: "Free design consultation", icon: MessagesSquare },
  { label: "Space planning", icon: Ruler },
];

export function StudioHighlights() {
  return (
    <section className="studio-highlights" aria-labelledby="studio-highlights-title">
      <div className="wrap">
        <h2 id="studio-highlights-title">Ananya Interiors at a glance.</h2>
        <ul>
          {highlights.map(({ label, value, icon: Icon }) => (
            <li key={label}>
              {value && <strong>{value}</strong>}
              {Icon && <Icon size={30} strokeWidth={1.5} aria-hidden />}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
