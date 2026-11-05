"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { RATES, SHORT_HOURS, WHATSAPP, pkr } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icons";
import DirectPerks from "./DirectPerks";

type Unit = "stay" | "night" | "month";
const ROOMS: { id: string; label: string; rate: number; unit: Unit }[] = [
  { id: "1bed", label: "1 Bed Room — Full Night", rate: RATES.oneBedNight, unit: "night" },
  { id: "2bed", label: "2 Bed Apartment — Full Night", rate: RATES.twoBedNight, unit: "night" },
  { id: "1bedh", label: `1 Bed Room — Short Stay (${SHORT_HOURS})`, rate: RATES.oneBedShort, unit: "stay" },
  { id: "2bedh", label: `2 Bed Apartment — Short Stay (${SHORT_HOURS})`, rate: RATES.twoBedShort, unit: "stay" },
  { id: "couple", label: "Couples / Honeymoon Room — Night", rate: RATES.oneBedNight, unit: "night" },
  { id: "1bedm", label: "1 Bed — Monthly", rate: RATES.oneBedMonth, unit: "month" },
  { id: "2bedm", label: "2 Bed Apartment — Monthly", rate: RATES.twoBedMonth, unit: "month" },
];
const PER: Record<Unit, string> = { stay: SHORT_HOURS, night: "night", month: "month" };

// Local date as YYYY-MM-DD (toISOString would shift to UTC and show the wrong day in Pakistan)
const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const nice = (s: string) =>
  s ? new Date(s + "T00:00:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }) : "-";
const nice12 = (t: string) => {
  if (!t) return "-";
  const [h, m] = t.split(":").map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
};

// Booking form: room type, date, nights/months (or arrival time for short stays) and guests
// → shows a live price estimate and opens WhatsApp with the request filled in.
export default function QuickBook({ title = "Book your room in 30 seconds", defaultRoom = "1bed" }: { title?: string; defaultRoom?: string }) {
  const [roomId, setRoomId] = useState<string>(defaultRoom);
  const [checkin, setCheckin] = useState("");
  const [today, setToday] = useState("");
  const [qty, setQty] = useState(1);
  const [time, setTime] = useState("14:00");
  const [guests, setGuests] = useState("2");
  const [promo, setPromo] = useState("");

  useEffect(() => {
    const t = iso(new Date());
    setToday(t);
    setCheckin(t);
  }, []);

  const room = ROOMS.find((r) => r.id === roomId) ?? ROOMS[0];
  const monthly = room.unit === "month";
  const short = room.unit === "stay";

  const checkout = useMemo(() => {
    if (!checkin) return "";
    const d = new Date(checkin + "T00:00:00");
    if (short) return iso(d);
    if (monthly) d.setMonth(d.getMonth() + qty);
    else d.setDate(d.getDate() + qty);
    return iso(d);
  }, [checkin, qty, monthly, short]);

  const n = short ? 1 : qty;
  const total = room.rate * n;
  const unitLabel = short ? `stay (${SHORT_HOURS})` : monthly ? (n === 1 ? "month" : "months") : n === 1 ? "night" : "nights";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = [
      "Assalam o Alaikum, I want to book at Grand Empire Hotel, Bahria Town Phase 4.",
      `*Room:* ${room.label}`,
      `*Date:* ${nice(checkin)}`,
      short ? `*Arrival time:* ${nice12(time)}` : `*${monthly ? "Months" : "Nights"}:* ${qty}`,
      short ? "" : `*Check-out:* ${nice(checkout)}`,
      `*Guests:* ${guests}`,
      `*Estimated total:* ${pkr(total)} (${pkr(room.rate)} / ${PER[room.unit]})`,
      promo.trim() ? `*Promo code:* ${promo.trim().toUpperCase()}` : "",
      "Please confirm availability.",
    ]
      .filter(Boolean)
      .join("\n");
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
              <span>Room &amp; stay type</span>
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
                    {r.label} — {pkr(r.rate)}
                  </option>
                ))}
              </select>
            </label>
            <label className="qb-field">
              <span>{short ? "Date" : "Check-in date"}</span>
              <input type="date" name="checkin" required min={today} value={checkin} onChange={(e) => setCheckin(e.target.value)} />
            </label>
            {short ? (
              <label className="qb-field">
                <span>Arrival time</span>
                <input type="time" name="time" required value={time} onChange={(e) => setTime(e.target.value)} />
              </label>
            ) : (
              <label className="qb-field">
                <span>{monthly ? "Months" : "Nights (days)"}</span>
                <select name="qty" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                  {Array.from({ length: monthly ? 12 : 30 }, (_, i) => i + 1).map((k) => (
                    <option key={k} value={k}>
                      {k} {monthly ? (k === 1 ? "month" : "months") : k === 1 ? "night" : "nights"}
                    </option>
                  ))}
                </select>
              </label>
            )}
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
              <Icon name="calendar" small /> {short ? `${nice(checkin)} · from ${nice12(time)}` : `${nice(checkin)} → ${nice(checkout)}`}
            </span>
            <span>
              {short ? `1 ${unitLabel}` : `${n} ${unitLabel} × ${pkr(room.rate)}`} = <strong>{pkr(total)}</strong>
            </span>
            <label className="qb-field qb-promo" style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <span>Promo code</span>
              <input name="promo" value={promo} onChange={(e) => setPromo(e.target.value)} placeholder="Optional" style={{ minHeight: 36, width: 130, padding: "6px 10px" }} />
            </label>
            <span className="qb-note">Estimate · breakfast included on night stays · instant reply</span>
          </div>
          <DirectPerks />
        </form>
      </div>
    </section>
  );
}
