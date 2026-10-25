import Link from "next/link";
import { PAGES } from "@/lib/site";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Sorry, this page doesn&apos;t exist</h1>
        <p>Try one of these pages instead:</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          {PAGES.slice(0, 6).map((p) => (
            <Link key={p.href} className="btn btn-outline on-light btn-sm" href={p.href}>
              {p.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
