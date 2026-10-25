"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { RATES, WHATSAPP, pkr } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icons";

const ROOMS = [
  { id: "1bed", label: "1 Bed Room", rate: RATES.oneBedNight, unit: "night" },
  { id: "2bed", label: "2 Bed Apartment", rate: RATES.twoBedNight, unit: "night" },
  { id: "couple", label: "Couples / Honeymoon Room", rate: RATES.oneBedNight, unit: "night" },
  { id: "1bedm", label: "1 Bed — Monthly", rate: RATES.oneBedMonth, unit: "month" },
  { id: "2bedm", label: "2 Bed Apartment — Monthly", rate: RATES.twoBedMonth, unit: "month" },
] as const;

// Local date as YYYY-MM-DD (toISOString would shift to UTC and show the wrong day in Pakistan)
const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const nice = (s: string) =>
  s ? new Date(s + "T00:00:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }) : "-";

// Booking form: room type, date, nights/months and guests → opens WhatsApp with the request and estimated total.
export default function QuickBook({ title = "Book your room in 30 seconds", defaultRoom = "1bed" }: { title?: string; defaultRoom?: string }) {
  const [roomId, setRoomId] = useState<string>(defaultRoom);
  const [checkin, setCheckin] = useState("");
  const [today, setToday] = useState("");
  const [qty, setQty] = useState(1);
  const [guests, setGuests] = useState("2");

  useEffect(() => {
    const t = iso(new Date());
    setToday(t);
    setCheckin(t);
  }, []);

  const room = ROOMS.find((r) => r.id === roomId) ?? ROOMS[0];
  const monthly = room.unit === "month";

  const checkout = useMemo(() => {
    if (!checkin) return "";
    const d = new Date(checkin + "T00:00:00");
    if (monthly) d.setMonth(d.getMonth() + qty);
    else d.setDate(d.getDate() + qty);
    return iso(d);
  }, [checkin, qty, monthly]);

  const total = room.rate * qty;
  const unitLabel = monthly ? (qty === 1 ? "month" : "months") : qty === 1 ? "night" : "nights";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = [
      "Assalam o Alaikum, I want to book at Grand Empire Hotel, Bahria Town Phase 4.",
      `*Room:* ${room.label}`,
      `*Check-in:* ${nice(checkin)}`,
      `*${monthly ? "Months" : "Nights"}:* ${qty}`,
      `*Check-out:* ${nice(checkout)}`,
      `*Guests:* ${guests}`,
      `*Estimated total:* ${pkr(total)} (from ${pkr(room.rate)} / ${room.unit})`,
      "Please confirm availability.",
    ].join("\n");
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <section className="quickbook-wrap" aria-label="Book a room">
      <div className="container">
        <form className="quickbook" onSubmit={onSubmit}>
          <p className="qb-title">
            <Icon name="calendar" small /> {title}
          </p>
          <div className="qb-fields">
            <label className="qb-field qb-room">
              <span>Room type</span>
              <select
                name="room"
                value={roomId}
                onChange={(e) => {
                  setRoomId(e.target.value);
                  setQty(1);
                }}
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.label} — {pkr(r.rate)}/{r.unit}
                  </option>
                ))}
              </select>
            </label>
            <label className="qb-field">
              <span>Check-in date</span>
              <input type="date" name="checkin" required min={today} value={checkin} onChange={(e) => setCheckin(e.target.value)} />
            </label>
            <label className="qb-field">
              <span>{monthly ? "Months" : "Nights (days)"}</span>
              <select name="qty" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                {Array.from({ length: monthly ? 12 : 30 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {monthly ? (n === 1 ? "month" : "months") : n === 1 ? "night" : "nights"}
                  </option>
                ))}
              </select>
            </label>
            <label className="qb-field">
              <span>Guests</span>
              <select name="guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
                {["1", "2", "3", "4", "5", "6+"].map((g) => (
                  <option key={g} value={g}>
                    {g} {g === "1" ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="btn btn-wa qb-btn">
              <WhatsAppIcon /> Send to WhatsApp
            </button>
          </div>
          <div className="qb-summary" aria-live="polite">
            <span>
              <Icon name="calendar" small /> {nice(checkin)} → {nice(checkout)}
            </span>
            <span>
              {qty} {unitLabel} × {pkr(room.rate)} = <strong>{pkr(total)}</strong>
            </span>
            <span className="qb-note">Estimated · breakfast included on daily stays · instant reply</span>
          </div>
        </form>
      </div>
    </section>
  );
}
