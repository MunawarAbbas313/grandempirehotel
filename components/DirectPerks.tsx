import { Icon } from "./Icons";

// "Book direct" perks — shown near booking forms to convert visitors into direct bookings.
export default function DirectPerks() {
  const perks: [Parameters<typeof Icon>[0]["name"], string][] = [
    ["tag", "Direct rate — no third-party booking fees"],
    ["coffee", "Free breakfast on every night stay"],
    ["clock", "Instant WhatsApp confirmation, 24/7"],
    ["shield", "No hidden charges · same-day booking"],
  ];
  return (
    <ul className="direct-perks" aria-label="Benefits of booking direct">
      {perks.map(([icon, t]) => (
        <li key={t}>
          <Icon name={icon} small /> {t}
        </li>
      ))}
    </ul>
  );
}
