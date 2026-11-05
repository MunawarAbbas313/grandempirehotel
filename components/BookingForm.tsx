"use client";

import type { FormEvent } from "react";
import { P, SHORT_HOURS, WHATSAPP } from "@/lib/site";
import DirectPerks from "./DirectPerks";
import { WhatsAppIcon } from "./Icons";

// The form has no server: it opens WhatsApp with the guest's booking details filled in.
export default function BookingForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) || "-");
    const msg = [
      "Assalam o Alaikum, I want to book at Grand Empire Hotel.",
      `*Name:* ${v("name")}`,
      `*Phone:* ${v("phone")}`,
      `*Stay type:* ${v("stay")}`,
      `*Check-in:* ${v("checkin")}`,
      `*Check-out / arrival time:* ${v("checkout")}`,
      `*Guests:* ${v("guests")}`,
      `*Promo code:* ${v("promo")}`,
      `*Message:* ${v("message")}`,
    ].join("\n");
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <form className="contact-card form reveal" onSubmit={onSubmit}>
      <span className="eyebrow">Booking request</span>
      <h2>Book your stay</h2>
      <p style={{ color: "var(--muted)", fontSize: ".92rem" }}>
        Fill in the form — it opens WhatsApp with your details so our team can confirm instantly.
      </p>
      <div className="row">
        <div>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="03xx xxxxxxx" />
        </div>
      </div>
      <label htmlFor="stay">Stay type</label>
      <select id="stay" name="stay">
        <option>{`1 Bed Room - Full Night (${P.oneBedNight})`}</option>
        <option>{`2 Bed Apartment - Full Night (${P.twoBedNight})`}</option>
        <option>{`1 Bed Room - Short Stay ${SHORT_HOURS} (${P.oneBedShort})`}</option>
        <option>{`2 Bed Apartment - Short Stay ${SHORT_HOURS} (${P.twoBedShort})`}</option>
        <option>Couples / Honeymoon Stay</option>
        <option>Weekly Stay (7+ nights)</option>
        <option>{`1 Bed - Monthly (from ${P.oneBedMonth})`}</option>
        <option>{`2 Bed - Monthly (from ${P.twoBedMonth})`}</option>
      </select>
      <div className="row">
        <div>
          <label htmlFor="checkin">Check-in</label>
          <input id="checkin" name="checkin" type="date" />
        </div>
        <div>
          <label htmlFor="checkout">Check-out (or arrival time)</label>
          <input id="checkout" name="checkout" placeholder="e.g. 12 Nov or 3:00 PM" />
        </div>
      </div>
      <label htmlFor="guests">Guests</label>
      <select id="guests" name="guests" defaultValue="2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5+</option>
      </select>
      <label htmlFor="promo">Promo code (optional)</label>
      <input id="promo" name="promo" autoComplete="off" />
      <label htmlFor="message">Message (optional)</label>
      <textarea id="message" name="message" rows={3} placeholder="Food requests, arrival time, etc." />
      <button className="btn btn-wa" type="submit" style={{ width: "100%", justifyContent: "center" }}>
        <WhatsAppIcon /> Send Booking on WhatsApp
      </button>
      <DirectPerks />
    </form>
  );
}
