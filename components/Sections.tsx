import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { POSTS } from "@/lib/blog";
import { PHONE_DISPLAY, PHONE_TEL, STAYS, WHATSAPP_BOOK, type Faq, type Feature, type Img } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icons";

export type Crumb = { href?: string; label: string };

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {trail.map((c) => (
          <li key={c.label}>
            {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  img,
  trail,
  title,
  lead,
  badges,
  eyebrow,
  home,
}: {
  img: Img;
  trail?: Crumb[];
  title: ReactNode;
  lead: ReactNode;
  badges?: ReactNode[];
  eyebrow?: string;
  home?: boolean;
}) {
  return (
    <section className={`hero${home ? " hero-home" : " page-hero"}`}>
      <div className="hero-bg">
        <Image src={img.src} alt="" fill priority quality={55} sizes="100vw" />
      </div>
      <div className="container hero-inner">
        {trail && <Breadcrumbs trail={trail} />}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
        {badges && (
          <div className="hero-badges">
            {badges.map((b, i) => (
              <span className="badge" key={i}>
                {b}
              </span>
            ))}
          </div>
        )}
        <div className="btn-row">
          <Link className="btn btn-gold" href="/contact#book">
            Book Your Stay <Icon name="arrow" small />
          </Link>
          <a className="btn btn-wa" href={WHATSAPP_BOOK} target="_blank" rel="noopener">
            <WhatsAppIcon /> WhatsApp {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, as = "h2" }: { eyebrow: string; title: ReactNode; text?: ReactNode; as?: "h2" | "h3" }) {
  const H = as;
  return (
    <div className="section-head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <H className="h2">{title}</H>
      {text && <p>{text}</p>}
      <div className="gold-line" />
    </div>
  );
}

export function Features({ items, cols = "grid-4" }: { items: Feature[]; cols?: string }) {
  return (
    <div className={cols}>
      {items.map(([icon, title, desc]) => (
        <div className="feature reveal" key={title}>
          <div className="ic">
            <Icon name={icon} />
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq">
      {faqs.map(([q, a], i) => (
        <details key={q} open={i === 0}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

export function FaqSection({ title, faqs, alt }: { title: string; faqs: Faq[]; alt?: boolean }) {
  return (
    <section className={`section${alt ? " alt" : ""}`}>
      <div className="container">
        <SectionHead eyebrow="FAQ" title={title} />
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}

export function Cta({
  title = "Ready to book your stay in Bahria Town?",
  text = `Call or WhatsApp our 24/7 front desk on ${PHONE_DISPLAY} for today's best rate and instant confirmation.`,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band reveal">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="btn-row">
            <a className="btn btn-gold" href={`tel:${PHONE_TEL}`}>
              <Icon name="phone" /> Call {PHONE_DISPLAY}
            </a>
            <a className="btn btn-wa" href={WHATSAPP_BOOK} target="_blank" rel="noopener">
              <WhatsAppIcon /> Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Tags({ words }: { words: string[] }) {
  return (
    <div className="tags">
      {words.map((w) => (
        <span key={w}>{w}</span>
      ))}
    </div>
  );
}

export function CheckList({ items, twoCol }: { items: ReactNode[]; twoCol?: boolean }) {
  return (
    <ul className={`check-list${twoCol ? " two-col" : ""}`}>
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

export function PriceCard({
  label, title, amount, per, items, featured, href = "/contact#book", cta = "Book Now", twoCol, external, ribbon,
}: {
  label: string;
  title: string;
  amount: string;
  per: string;
  items: string[];
  featured?: boolean;
  href?: string;
  cta?: string;
  twoCol?: boolean;
  external?: boolean;
  ribbon?: string;
}) {
  const cls = featured ? "btn btn-gold" : "btn btn-outline on-light";
  return (
    <div className={`price-card reveal${featured ? " featured" : ""}`}>
      {ribbon && <span className="ribbon">{ribbon}</span>}
      <span className="from">{label}</span>
      <h3>{title}</h3>
      <div className="amount">{amount}</div>
      <span className="from">{per}</span>
      <CheckList items={items} twoCol={twoCol} />
      {external ? (
        <a className={cls} href={href} target="_blank" rel="noopener">{cta}</a>
      ) : (
        <Link className={cls} href={href}>{cta}</Link>
      )}
    </div>
  );
}

export function Frame({ img, alt }: { img: Img; alt: string }) {
  return (
    <div className="img-frame reveal">
      <Image src={img.src} alt={alt} width={img.w} height={img.h} sizes="(max-width: 960px) 100vw, 580px" />
    </div>
  );
}

// Internal links to the other stay pages + guides (helps Google crawl and rank every page).
export function RelatedLinks({ current, posts }: { current?: string; posts?: string[] }) {
  const stays = STAYS.filter((s) => s.href !== current);
  const extra = [
    { href: "/rooms-and-rates", label: "Rooms & Rates", desc: "Compare every room and price", icon: "tag" as const },
    { href: "/hotel-with-food-bahria-town-rawalpindi", label: "Food & Dining", desc: "Breakfast & room delivery", icon: "food" as const },
  ].filter((s) => s.href !== current);
  const guides = POSTS.filter((p) => !posts || posts.includes(p.slug)).slice(0, 3);
  return (
    <section className="section alt">
      <div className="container">
        <SectionHead eyebrow="Explore more" title="More ways to stay at Grand Empire" />
        <div className="related-grid">
          {[...stays, ...extra].slice(0, 4).map((s) => (
            <Link key={s.href} href={s.href} className="related-card reveal">
              <span className="drop-ic"><Icon name={s.icon} /></span>
              <span>
                <strong>{s.label}</strong>
                <small>{s.desc}</small>
              </span>
              <Icon name="arrow" small />
            </Link>
          ))}
        </div>
        <p className="related-guides-title">Helpful guides</p>
        <ul className="related-guides">
          {guides.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Renders blog text: supports [link text](/url) and **bold**.
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) => {
        const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return link[2].startsWith("/") ? (
            <Link key={i} href={link[2]}>{link[1]}</Link>
          ) : (
            <a key={i} href={link[2]} target="_blank" rel="noopener">{link[1]}</a>
          );
        }
        const bold = p.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i}>{bold[1]}</strong>;
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}
