"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ADDRESS_SHORT, GOOGLE_RATING, NAV_MAIN, P, PHONE_DISPLAY, PHONE_TEL, STAYS, WHATSAPP, WHATSAPP_BOOK,
} from "@/lib/site";
import { Crown, Icon, WhatsAppIcon } from "./Icons";

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link className="brand" href="/" title="Grand Empire Hotel — home" onClick={onClick}>
      <Crown />
      <span className="brand-text">
        <span className="brand-name">GRAND EMPIRE</span>
        <span className="brand-sub">HOTEL &amp; APARTMENTS</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [staysOpen, setStaysOpen] = useState(false);
  const staysRef = useRef<HTMLLIElement>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const staysActive = STAYS.some((s) => pathname.startsWith(s.href));

  // Close menus after navigating
  useEffect(() => {
    setOpen(false);
    setStaysOpen(false);
  }, [pathname]);

  // Shrink header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile drawer is open; Esc closes menus
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setStaysOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the desktop dropdown when clicking elsewhere
  useEffect(() => {
    if (!staysOpen) return;
    const onDown = (e: MouseEvent) => {
      if (staysRef.current && !staysRef.current.contains(e.target as Node)) setStaysOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [staysOpen]);

  const close = () => setOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="tb-item">
            <Icon name="pin" small /> {ADDRESS_SHORT}
          </span>
          <span className="tb-item tb-hide-md">
            <Icon name="clock" small /> Front desk open 24/7
          </span>
          <span className="tb-right">
            <span className="tb-item tb-hide-md">
              <span className="stars">★</span> {GOOGLE_RATING} on Google
            </span>
            <a className="tb-item" href={`tel:${PHONE_TEL}`}>
              <Icon name="phone" small /> {PHONE_DISPLAY}
            </a>
            <a className="tb-item tb-wa" href={WHATSAPP} target="_blank" rel="noopener">
              WhatsApp
            </a>
          </span>
        </div>
      </div>

      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-inner">
          <Brand />

          <nav className="desk-nav" aria-label="Main navigation">
            <ul>
              {NAV_MAIN.map((item) =>
                item.children ? (
                  <li key={item.label} className={`has-drop${staysOpen ? " open" : ""}`} ref={staysRef}>
                    <button
                      type="button"
                      className={`nav-link${staysActive ? " active" : ""}`}
                      aria-expanded={staysOpen}
                      aria-haspopup="true"
                      onClick={() => setStaysOpen((o) => !o)}
                    >
                      {item.label} <Icon name="chevron" small />
                    </button>
                    <div className="dropdown" role="menu">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className="drop-item" role="menuitem">
                          <span className="drop-ic">
                            <Icon name={c.icon} />
                          </span>
                          <span>
                            <strong>{c.label}</strong>
                            <small>{c.desc}</small>
                          </span>
                        </Link>
                      ))}
                      <Link href="/rooms-and-rates" className="drop-foot" role="menuitem">
                        Compare all rooms &amp; rates <Icon name="arrow" small />
                      </Link>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`nav-link${isActive(item.href) ? " active" : ""}`}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="header-actions">
            <a className="icon-btn" href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>
              <Icon name="phone" />
            </a>
            <Link className="btn btn-gold btn-sm header-book" href="/contact#book">
              Book Now
            </Link>
            <button
              type="button"
              className={`burger${open ? " is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer-overlay${open ? " show" : ""}`} onClick={close} aria-hidden="true" />
      <aside id="mobile-drawer" className={`drawer${open ? " open" : ""}`} aria-label="Mobile menu" inert={!open}>
        <div className="drawer-head">
          <Brand onClick={close} />
          <button type="button" className="icon-btn" aria-label="Close menu" onClick={close}>
            <Icon name="close" />
          </button>
        </div>
        <nav className="drawer-nav" aria-label="Mobile navigation">
          <Link href="/" className={isActive("/") ? "active" : ""} onClick={close}>
            <Icon name="home" /> Home
          </Link>
          <Link href="/rooms-and-rates" className={isActive("/rooms-and-rates") ? "active" : ""} onClick={close}>
            <Icon name="tag" /> Rooms &amp; Rates
          </Link>
          <p className="drawer-label">Stays</p>
          {STAYS.map((s) => (
            <Link key={s.href} href={s.href} className={`sub${isActive(s.href) ? " active" : ""}`} onClick={close}>
              <Icon name={s.icon} />
              <span>
                {s.label}
                <small>{s.desc}</small>
              </span>
            </Link>
          ))}
          <p className="drawer-label">More</p>
          <Link href="/hotel-with-food-bahria-town-rawalpindi" className={isActive("/hotel-with-food") ? "active" : ""} onClick={close}>
            <Icon name="food" /> Food &amp; Dining
          </Link>
          <Link href="/about" className={isActive("/about") ? "active" : ""} onClick={close}>
            <Icon name="info" /> Hotel Details
          </Link>
          <Link href="/blog" className={isActive("/blog") ? "active" : ""} onClick={close}>
            <Icon name="book" /> Blog &amp; Guides
          </Link>
          <Link href="/contact" className={isActive("/contact") ? "active" : ""} onClick={close}>
            <Icon name="pin" /> Contact &amp; Location
          </Link>
        </nav>
        <div className="drawer-foot">
          <p className="drawer-price">
            Rooms from <strong>{P.oneBedNight}</strong> / night · breakfast included
          </p>
          <Link className="btn btn-gold btn-block" href="/contact#book" onClick={close}>
            Book Your Stay
          </Link>
          <div className="drawer-row">
            <a className="btn btn-outline btn-block" href={`tel:${PHONE_TEL}`}>
              <Icon name="phone" /> Call
            </a>
            <a className="btn btn-wa btn-block" href={WHATSAPP_BOOK} target="_blank" rel="noopener">
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
