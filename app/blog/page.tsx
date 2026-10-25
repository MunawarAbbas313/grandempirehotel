import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Cta, PageHero } from "@/components/Sections";
import { POSTS, readingTime } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";
import { HOTEL_NAME, IMG, SITE_URL, breadcrumbSchema } from "@/lib/site";

const PATH = "/blog";

export const metadata = pageMeta({
  path: PATH,
  title: "Bahria Town Rawalpindi Stay Guides & Tips | Grand Empire Blog",
  description: "Guides for staying in Bahria Town Rawalpindi: hotel prices for one day, honeymoon tips, monthly rent checklists, hotel vs Airbnb and more.",
  keywords: ["bahria town rawalpindi hotel guide", "hotel tips rawalpindi", "bahria town phase 4 guide", "where to stay near islamabad", "hotel blog pakistan"],
  image: IMG.front,
});

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${HOTEL_NAME} — Guides`,
    url: SITE_URL + PATH,
    blogPost: POSTS.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE_URL}/blog/${p.slug}`, datePublished: p.date })),
  };
  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ path: PATH, name: "Blog" }])]} />
      <PageHero
        img={IMG.front}
        trail={[{ label: "Blog" }]}
        title="Guides for Staying in Bahria Town Rawalpindi"
        lead="Honest, practical tips on hotel prices, couple-friendly stays, monthly rentals and making the most of your visit."
      />
      <section className="section">
        <div className="container">
          <div className="post-grid">
            {POSTS.map((p) => (
              <article className="card post-card reveal" key={p.slug}>
                <div className="card-img">
                  <Image src={p.image.src} alt={p.title} fill sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 380px" />
                </div>
                <div className="card-body">
                  <div className="post-meta">
                    <time dateTime={p.date}>{fmt(p.date)}</time>
                    <span>{readingTime(p)} min read</span>
                  </div>
                  <h2><Link className="stretched" href={`/blog/${p.slug}`}>{p.title}</Link></h2>
                  <p>{p.excerpt}</p>
                  <Link className="link-arrow" href={`/blog/${p.slug}`}>Read: {p.short} →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
