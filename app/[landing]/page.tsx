import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import QuickBook from "@/components/QuickBook";
import { Cta, FaqSection, Features, Frame, PageHero, PriceCard, RelatedLinks, Rich, SectionHead, Tags } from "@/components/Sections";
import { LANDINGS, getLanding } from "@/lib/landing";
import { pageMeta } from "@/lib/seo";
import { AMENITIES, GOOGLE_RATING, P, breadcrumbSchema, faqSchema, hotelSchema } from "@/lib/site";

type Props = { params: Promise<{ landing: string }> };

export function generateStaticParams() {
  return LANDINGS.map((l) => ({ landing: l.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const l = getLanding((await params).landing);
  if (!l) return {};
  return pageMeta({ path: `/${l.slug}`, title: l.title, description: l.description, keywords: l.keywords, image: l.image });
}

export default async function LandingPage({ params }: Props) {
  const l = getLanding((await params).landing);
  if (!l) notFound();
  const path = `/${l.slug}`;
  const others = LANDINGS.filter((x) => x.slug !== l.slug);

  return (
    <>
      <JsonLd data={[hotelSchema, breadcrumbSchema([{ path, name: l.label }]), faqSchema(l.faqs)]} />
      <PageHero
        img={l.image}
        trail={[{ label: l.label }]}
        eyebrow={l.eyebrow}
        title={l.h1}
        lead={l.lead}
        badges={[<><span className="stars">★★★★★</span> {GOOGLE_RATING} on Google</>, "Free Breakfast", "24/7 Front Desk"]}
      />
      <QuickBook />

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <span className="eyebrow">Grand Empire Hotel &amp; Apartments</span>
            <h2>{l.introTitle}</h2>
            {l.intro.map((t, i) => (
              <p key={i}><Rich text={t} /></p>
            ))}
            <div className="btn-row">
              <Link className="btn btn-gold" href="/contact#book">Book Your Room</Link>
              <Link className="btn btn-outline on-light" href="/rooms-and-rates">See Rooms &amp; Rates</Link>
            </div>
          </div>
          <Frame img={l.sideImage} alt={l.sideAlt} />
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="Highlights" title={l.highlightsTitle} />
          <Features items={l.highlights} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Starting rates" title="Rooms & prices" />
          <div className="grid-4">
            <PriceCard label="Daily" title="1 Bed Room" amount={P.oneBedNight} per="per night" items={["Breakfast included", "Attached washroom", "WiFi & TV"]} cta="Book 1 bed room" />
            <PriceCard featured ribbon="Families" label="Daily" title="2 Bed Apartment" amount={P.twoBedNight} per="per night" items={["2 bedrooms + lounge", "Kitchen", "Breakfast included"]} cta="Book apartment" />
            <PriceCard label="Monthly" title="1 Bed Monthly" amount={P.oneBedMonth} per="per month" items={["Kitchen & shared lounge", "TV & internet", "Bills included"]} href="/monthly-rent-apartments-bahria-town-rawalpindi" cta="Monthly 1 bed details" />
            <PriceCard label="Monthly" title="2 Bed Monthly" amount={P.twoBedMonth} per="per month" items={["Private kitchen & lounge", "TV & internet", "Bills included"]} href="/monthly-rent-apartments-bahria-town-rawalpindi" cta="Monthly 2 bed details" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container seo-text reveal">
          {l.sections.map((s) => (
            <div key={s.h2}>
              <h2>{s.h2}</h2>
              {s.paras.map((t, i) => (
                <p key={i}><Rich text={t} /></p>
              ))}
              {s.list && (
                <ul className="check-list">
                  {s.list.map((li) => (
                    <li key={li}><Rich text={li} /></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <h2>Included with every stay</h2>
          <ul className="check-list two-col">
            {AMENITIES.map(([, t]) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <Tags words={l.tags} />
        </div>
      </section>

      <FaqSection title={`${l.label} — FAQ`} faqs={l.faqs} />

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Popular searches" title="Find the right hotel in Bahria Town" />
          <div className="related-grid">
            {others.map((o) => (
              <Link key={o.slug} href={`/${o.slug}`} className="related-card reveal">
                <span>
                  <strong>{o.label}</strong>
                  <small>{o.eyebrow}</small>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks posts={l.posts} />
      <Cta />
    </>
  );
}
