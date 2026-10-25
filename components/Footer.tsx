import Link from "next/link";
import { POSTS } from "@/lib/blog";
import { LANDINGS } from "@/lib/landing";
import {
  ADDRESS, GOOGLE_RATING, MAP_EMBED, MAP_LINK, P, PAGES, PHONE_DISPLAY, PHONE_TEL, WHATSAPP, WHATSAPP_BOOK,
} from "@/lib/site";
import { Brand } from "./Header";
import { Icon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-cta">
            <div>
              <p className="footer-cta-title">Stay in Bahria Town Phase 4 from {P.oneBedNight} / night</p>
              <p>Breakfast included · 24/7 power &amp; water · Front desk open round the clock</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn-gold" href="/contact#book">Book Now</Link>
              <a className="btn btn-wa" href={WHATSAPP_BOOK} target="_blank" rel="noopener">
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-grid">
            <div>
              <Brand />
              <p style={{ marginTop: 18 }}>
                Affordable luxury hotel rooms and furnished VIP service apartments in Civic Center, Bahria Town Phase 4,
                Rawalpindi. Daily, weekly and monthly stays with breakfast and in-room food delivery.
              </p>
              <p>
                <span className="stars">★★★★★</span> Rated {GOOGLE_RATING} on Google
              </p>
            </div>
            <div>
              <p className="footer-title">Explore</p>
              <ul>
                {PAGES.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer-title">Guides</p>
              <ul>
                {POSTS.slice(0, 5).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`}>{p.short}</Link>
                  </li>
                ))}
              </ul>
              <p className="footer-title" style={{ marginTop: 24 }}>Contact</p>
              <ul>
                <li>
                  <Icon name="phone" small /> <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                </li>
                <li>
                  <Icon name="phone" small />{" "}
                  <a href={WHATSAPP} target="_blank" rel="noopener">WhatsApp: {PHONE_DISPLAY}</a>
                </li>
                <li>
                  <Icon name="clock" small /> Front desk open 24/7
                </li>
              </ul>
            </div>
            <div>
              <p className="footer-title">Find Us</p>
              <address className="footer-address">
                <Icon name="pin" small /> {ADDRESS}
              </address>
              <div className="footer-map">
                <iframe
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Grand Empire Hotel location map, Bahria Town Phase 4 Rawalpindi"
                />
              </div>
              <p style={{ marginTop: 10 }}>
                <a href={MAP_LINK} target="_blank" rel="noopener">Get directions on Google Maps →</a>
              </p>
            </div>
          </div>
          <nav className="footer-searches" aria-label="Popular searches">
            <p className="footer-title">Popular searches</p>
            <ul>
              {LANDINGS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/${l.slug}`}>{l.label}</Link>
                </li>
              ))}
              {POSTS.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`}>{p.short}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Grand Empire Hotel (Pvt.) Ltd. All rights reserved.</span>
            <span>Hotel &amp; Apartments in Bahria Town Phase 4, Rawalpindi</span>
          </div>
        </div>
      </footer>
      <a className="wa-float" href={WHATSAPP_BOOK} target="_blank" rel="noopener" aria-label="Chat with Grand Empire Hotel on WhatsApp">
        <WhatsAppIcon fill="#fff" />
      </a>
    </>
  );
}
