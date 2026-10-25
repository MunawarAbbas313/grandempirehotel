import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon, WhatsAppIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, Cta, Rich } from "@/components/Sections";
import { POSTS, getPost, readingTime } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";
import { HOTEL_NAME, P, PHONE_DISPLAY, PHONE_TEL, SITE_URL, STAYS, WHATSAPP_BOOK, breadcrumbSchema } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) return {};
  return pageMeta({
    path: `/blog/${post.slug}`,
    title: post.title.length > 65 ? post.title.replace(/:.*$/, "").replace(/\s*\(.*\)$/, "") : post.title,
    description: post.description,
    keywords: post.keywords,
    image: post.image,
    article: { published: post.date, modified: post.updated },
  });
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const url = `${SITE_URL}/blog/${post.slug}`;
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: SITE_URL + post.image.src,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: url,
    url,
    keywords: post.keywords.join(", "),
    author: { "@type": "Organization", name: HOTEL_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: HOTEL_NAME, logo: { "@type": "ImageObject", url: SITE_URL + "/images/logo.svg" } },
    about: { "@id": SITE_URL + "/#hotel" },
  };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema([{ path: "/blog", name: "Blog" }, { path: `/blog/${post.slug}`, name: post.short }])]} />
      <section className="hero page-hero">
        <div className="hero-bg">
          <Image src={post.image.src} alt="" fill priority quality={55} sizes="100vw" />
        </div>
        <div className="container hero-inner">
          <Breadcrumbs trail={[{ href: "/blog", label: "Blog" }, { label: post.short }]} />
          <h1 style={{ fontSize: "clamp(1.7rem, 4.2vw, 2.8rem)" }}>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
          <div className="hero-badges">
            <span className="badge"><Icon name="calendar" small /> <time dateTime={post.date}>{fmt(post.date)}</time></span>
            <span className="badge"><Icon name="clock" small /> {readingTime(post)} min read</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap">
          <article className="prose">
            <div className="article-img">
              <Image src={post.image.src} alt={post.title} width={post.image.w} height={post.image.h} sizes="(max-width: 960px) 100vw, 800px" />
            </div>
            {post.blocks.map((b, i) => {
              if ("h2" in b) return <h2 key={i}>{b.h2}</h2>;
              if ("h3" in b) return <h3 key={i}>{b.h3}</h3>;
              if ("ul" in b)
                return (
                  <ul key={i}>
                    {b.ul.map((li) => (
                      <li key={li}><Rich text={li} /></li>
                    ))}
                  </ul>
                );
              if ("cta" in b)
                return (
                  <div className="inline-cta" key={i}>
                    <p>
                      Stay at <strong>Grand Empire Hotel, Bahria Town Phase 4</strong> — rooms from {P.oneBedNight} with breakfast.
                    </p>
                    <div className="btn-row">
                      <Link className="btn btn-gold btn-sm" href="/contact#book">Book Now</Link>
                      <a className="btn btn-wa btn-sm" href={WHATSAPP_BOOK} target="_blank" rel="noopener"><WhatsAppIcon /> WhatsApp</a>
                    </div>
                  </div>
                );
              return <p key={i}><Rich text={b.p} /></p>;
            })}
          </article>

          <aside className="sidebar">
            <div className="side-card">
              <h2>Grand Empire rates</h2>
              <div className="side-price"><span>1 bed / night</span><strong>{P.oneBedNight}</strong></div>
              <div className="side-price"><span>2 bed / night</span><strong>{P.twoBedNight}</strong></div>
              <div className="side-price"><span>1 bed / month</span><strong>{P.oneBedMonth}</strong></div>
              <div className="side-price" style={{ marginBottom: 16 }}><span>2 bed / month</span><strong>{P.twoBedMonth}</strong></div>
              <a className="btn btn-gold btn-block" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> {PHONE_DISPLAY}</a>
            </div>
            <div className="side-card">
              <h2>Stay options</h2>
              <ul>
                {STAYS.map((s) => (
                  <li key={s.href}><Link href={s.href}>{s.label} →</Link></li>
                ))}
                <li><Link href="/hotel-with-food-bahria-town-rawalpindi">Food &amp; Dining →</Link></li>
              </ul>
            </div>
            <div className="side-card">
              <h2>More guides</h2>
              <ul>
                {others.map((p) => (
                  <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <Cta />
    </>
  );
}
