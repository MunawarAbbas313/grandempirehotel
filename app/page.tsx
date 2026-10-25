import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { Icon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import QuickBook from "@/components/QuickBook";
import { CheckList, Cta, FaqSection, Features, Frame, PageHero, SectionHead, Tags } from "@/components/Sections";
import { POSTS } from "@/lib/blog";
import { LANDINGS } from "@/lib/landing";
import { pageMeta } from "@/lib/seo";
import {
  AMENITIES, AREAS, GOOGLE_RATING, IMG, ONE_BED_ROOMS, P, PHONE_DISPLAY, faqSchema, hotelSchema, websiteSchema,
  type Faq, type Img,
} from "@/lib/site";

export const metadata = pageMeta({
  path: "/",
  title: "Hotel in Bahria Town Phase 4 Rawalpindi | Grand Empire Hotel",
  description: `Affordable luxury hotel & apartments in Civic Center, Bahria Town Phase 4 Rawalpindi. Rooms from ${P.oneBedNight}/night, free breakfast, 24/7 power. Call ${PHONE_DISPLAY}.`,
  keywords: [
    "hotel in bahria town rawalpindi", "hotels in bahria town phase 4 rawalpindi", "best hotel in phase 4 bahria town",
    "luxury hotel in phase 4 bahria town", "affordable hotel in phase 4 bahria town", "budget hotel in phase 4 bahria town",
    "5 star hotel in phase 4 bahria town", "hotel in rawalpindi", "hotels in islamabad affordable rates",
    "hotels in bahria town islamabad", "guest house in bahria town", "apartments for rent bahria town",
    "hotel with food rawalpindi", "rooms for couples bahria town", "grand empire hotel",
  ],
  image: IMG.bedRed,
});

const faqs: Faq[] = [
  ["What are the room rates at Grand Empire Hotel Bahria Town?", `1-bed rooms start from ${P.oneBedNight} per night and 2-bed apartments start from ${P.twoBedNight} per night. Monthly stays start from ${P.oneBedMonth} (1 bed) and ${P.twoBedMonth} (2 bed). Breakfast is complimentary on daily stays.`],
  ["Where is Grand Empire Hotel located?", "We are at Plot No. 23, Street 4, Civic Center, Bahria Town Phase 4, Rawalpindi — in the heart of Bahria Town with restaurants, banks and shopping right outside, and easy access to Islamabad."],
  ["Do you offer rooms for one day or one night?", `Yes. You can book a room for a single day or night, a weekend, or longer. Call or WhatsApp ${PHONE_DISPLAY} to check availability.`],
  ["Is food available at the hotel?", "Yes. Complimentary breakfast and welcome tea are included, and lunch and dinner (fast food, continental and desi) can be delivered to your room on request."],
  ["Is the hotel suitable for families and couples?", "Yes. Our private, clean rooms and 2-bed apartments are ideal for families, married couples, honeymooners and business travellers. A valid CNIC is required at check-in."],
  ["How do I book a room quickly?", `Use the quick booking form on this page, or call / WhatsApp ${PHONE_DISPLAY}. Our 24/7 front desk replies instantly and same-day bookings are welcome.`],
];

const stays: { img: Img; alt: string; tag: string; title: string; text: string; price: string; per: string; href: string; link: string }[] = [
  { img: IMG.bedDeluxe, alt: "1 bed room for daily rent in Bahria Town Rawalpindi", tag: "Daily", title: "Rooms for Daily Rent", text: "One day, one night or a weekend — clean private rooms with breakfast.", price: P.oneBedNight, per: "/ night", href: "/daily-rent-rooms-bahria-town-rawalpindi", link: "Daily stay details" },
  { img: IMG.living, alt: "Furnished 2 bed apartment for rent in Bahria Town Phase 4", tag: "2 Bed", title: "2 Bed Apartments", text: "Full lounge, kitchen, TV and two bedrooms — perfect for families.", price: P.twoBedNight, per: "/ night", href: "/rooms-and-rates", link: "See 2 bed apartment" },
  { img: IMG.bedRed, alt: "Honeymoon suite for couples in Bahria Town Rawalpindi", tag: "Couples", title: "Couples & Honeymoon", text: "Private, romantic rooms for newlyweds and married couples.", price: P.oneBedNight, per: "/ night", href: "/couple-rooms-bahria-town-rawalpindi", link: "Couples & honeymoon stay" },
  { img: IMG.lounge, alt: "Furnished flat for monthly rent in Bahria Town Rawalpindi", tag: "Monthly", title: "Monthly Rooms & Flats", text: "Furnished with kitchen, lounge, TV & internet. All bills included.", price: P.oneBedMonth, per: "/ month", href: "/monthly-rent-apartments-bahria-town-rawalpindi", link: "Monthly rent details" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[hotelSchema, websiteSchema, faqSchema(faqs)]} />
      <PageHero
        home
        img={IMG.bedRed}
        eyebrow="Bahria Town Phase 4 · Civic Center · Rawalpindi"
        title={<>Affordable Luxury Hotel &amp; Apartments in <span>Bahria Town Rawalpindi</span></>}
        lead="Elegant rooms and fully furnished 2-bed apartments for daily, weekly and monthly stay — with complimentary breakfast, 24/7 electricity & water and fresh food delivered to your room."
        badges={[<><span className="stars">★★★★★</span> {GOOGLE_RATING} on Google</>, "Free Breakfast", "24/7 Front Desk", `Rooms from ${P.oneBedNight}`]}
      />
      <QuickBook />

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container price-strip">
          <div className="grid">
            {[
              ["1 Bed Room · Daily", P.oneBedNight, "/ night"],
              ["2 Bed Apartment · Daily", P.twoBedNight, "/ night"],
              ["1 Bed · Monthly", P.oneBedMonth, "/ month"],
              ["2 Bed · Monthly", P.twoBedMonth, "/ month"],
            ].map(([l, p, per]) => (
              <div className="cell" key={l}>
                <small>{l}</small>
                <strong>{p}</strong> <span className="per">{per}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="img-stack reveal">
            <div className="img-frame">
              <Image src={IMG.reception.src} width={IMG.reception.w} height={IMG.reception.h} sizes="(max-width: 960px) 100vw, 580px" alt="Grand Empire Hotel reception and concierge desk in Bahria Town Phase 4 Rawalpindi" />
            </div>
            <Image className="small" src={IMG.front.src} width={IMG.front.w} height={IMG.front.h} sizes="260px" alt="Grand Empire Hotel building front, Civic Center Bahria Town Rawalpindi" />
          </div>
          <div className="reveal">
            <span className="eyebrow">Welcome to Grand Empire</span>
            <h2>The best hotel in Phase 4 Bahria Town — at a price that makes sense</h2>
            <p>
              Grand Empire Hotel &amp; Apartments is a boutique hotel and VIP service apartment building in{" "}
              <strong>Civic Center, Bahria Town Phase 4, Rawalpindi</strong>. We bring 5-star style comfort — tufted king
              beds, warm ambient lighting, modern attached washrooms — at budget-friendly, affordable rates.
            </p>
            <p>
              Whether you need a <Link href="/daily-rent-rooms-bahria-town-rawalpindi">hotel room for one day</Link>, a
              private stay for a <Link href="/couple-rooms-bahria-town-rawalpindi">married couple or honeymoon</Link>, or a{" "}
              <Link href="/monthly-rent-apartments-bahria-town-rawalpindi">furnished flat on monthly rent</Link>, our
              friendly 24/7 team takes care of everything.
            </p>
            <CheckList twoCol items={[`${ONE_BED_ROOMS} elegant 1-bed rooms`, "Spacious 2-bed apartments", "Complimentary breakfast", "Food delivered to rooms", "24/7 electricity & water", "Free high-speed internet"]} />
            <div className="btn-row">
              <Link className="btn btn-gold" href="/rooms-and-rates">View Rooms &amp; Rates</Link>
              <Link className="btn btn-outline on-light" href="/about">Hotel Details</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Stay Your Way" title="Rooms & Apartments for Every Stay" text="Daily, short stay, honeymoon or monthly — choose the stay that fits you." />
          <div className="grid-4">
            {stays.map((s) => (
              <article className="card reveal" key={s.title}>
                <div className="card-img">
                  <Image src={s.img.src} alt={s.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 290px" />
                  <span className="card-tag">{s.tag}</span>
                </div>
                <div className="card-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="card-price">{s.price} <small>{s.per}</small></div>
                  <Link className="link-arrow" href={s.href}>{s.link} →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="Included With Your Stay" title="Amenities & Services" text="Everything you need for a comfortable, hygienic and worry-free stay." />
          <Features items={AMENITIES} />
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <span className="eyebrow">Hotel With Food</span>
            <h2>Fresh food delivered straight to your room</h2>
            <p>
              Start the day with our <strong>complimentary breakfast</strong>, then order lunch or dinner without leaving
              your room. Choose from <strong>desi, fast food and continental</strong> dishes — prepared fresh on request
              and delivered hot to your door.
            </p>
            <CheckList items={["Desi: karahi, handi, biryani, BBQ, daal & fresh naan", "Fast food: burgers, pizza, sandwiches, fries & shawarma", "Continental: steaks, pasta, grilled chicken & more"]} />
            <Link className="btn btn-gold" href="/hotel-with-food-bahria-town-rawalpindi">View Food Menu</Link>
          </div>
          <Frame img={IMG.lounge} alt="Apartment lounge with dining and kitchen at Grand Empire Hotel Rawalpindi" />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Gallery" title="Take a Look Inside" />
          <Gallery
            photos={[
              { img: IMG.bedLux, alt: "Luxury bedroom with king bed, Bahria Town Phase 4 hotel" },
              { img: IMG.bedRed, alt: "Honeymoon suite with red velvet bed, Rawalpindi" },
              { img: IMG.reception, alt: "Grand Empire Hotel reception" },
              { img: IMG.bedWash, alt: "Hotel room with attached washroom Bahria Town" },
              { img: IMG.bedDeluxe, alt: "Deluxe room Bahria Town Rawalpindi" },
              { img: IMG.living, alt: "2 bed apartment lounge with kitchen" },
              { img: IMG.front, alt: "Grand Empire Hotel exterior Civic Center" },
              { img: IMG.lobby, alt: "Hotel lobby Bahria Civic Center" },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Why Guests Choose Us" title="Why Grand Empire is the best hotel in Bahria Town Rawalpindi" />
          <Features
            items={[
              ["pin", "Prime Civic Center Location", "Right in Bahria Town Phase 4 Civic Center — food, banks and shopping at your doorstep, with quick access to Islamabad."],
              ["tag", "Affordable Luxury", `Premium rooms at budget-friendly rates: from ${P.oneBedNight} a night with breakfast included.`],
              ["lock", "Private & Secure", "CCTV-monitored building, 24/7 reception and private rooms for families and couples."],
              ["calendar", "Easy, Flexible Booking", "Book in seconds on WhatsApp — for one day, a weekend, a week or a month."],
            ]}
          />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Guides & Tips" title="From our blog" text="Helpful guides for planning your stay in Bahria Town Rawalpindi." />
          <div className="post-grid">
            {POSTS.slice(0, 3).map((p) => (
              <article className="card post-card reveal" key={p.slug}>
                <div className="card-img">
                  <Image src={p.image.src} alt={p.title} fill sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 380px" />
                </div>
                <div className="card-body">
                  <h3><Link className="stretched" href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                  <p>{p.excerpt}</p>
                  <Link className="link-arrow" href={`/blog/${p.slug}`}>Read: {p.short} →</Link>
                </div>
              </article>
            ))}
          </div>
          <p className="center mt-2"><Link className="btn btn-outline on-light" href="/blog">All guides &amp; articles</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container seo-text reveal">
          <h2>Best hotel in Bahria Town Phase 4 Rawalpindi — near Islamabad</h2>
          <p>
            Looking for the <Link href="/best-hotel-in-bahria-town-rawalpindi">best hotel in Bahria Town Rawalpindi</Link>, an{" "}
            <Link href="/affordable-hotel-in-bahria-town-rawalpindi">affordable hotel</Link> or a{" "}
            <strong>budget hotel in Phase 4 Bahria Town</strong> that still feels luxurious? Grand Empire Hotel &amp;
            Apartments offers well-designed rooms, VIP service apartments and furnished flats in the Civic Center of{" "}
            <strong>Bahria Town Phase 4</strong>. Many guests searching for{" "}
            <strong>hotels in Islamabad at affordable rates</strong> choose us because Bahria Town Rawalpindi is a short
            drive from Islamabad while offering better value, quieter streets and the safety of a gated community.
          </p>
          <p>
            We welcome families, business travellers, married couples and honeymooners, overseas Pakistanis visiting home,
            and anyone needing a <strong>hotel for one night stay</strong>. Prefer a home-like stay? Our{" "}
            <strong>2-bed apartments for rent per day</strong> are a great alternative to an Airbnb in Bahria Town
            Rawalpindi — with hotel services like housekeeping, breakfast and a 24/7 front desk. Read our{" "}
            <Link href="/blog/hotel-vs-airbnb-bahria-town-rawalpindi">hotel vs Airbnb comparison</Link>.
          </p>
          <h3>Convenient for guests visiting</h3>
          <div className="areas" style={{ justifyContent: "flex-start" }}>
            {AREAS.map((a) => (
              <span key={a}><Icon name="pin" small /> {a}</span>
            ))}
          </div>
          <Tags words={["Hotel in Bahria Town Rawalpindi", "Hotels in Bahria Town Phase 4", "Best hotel in Phase 4 Bahria Town", "Luxury hotel in Phase 4 Bahria Town", "Affordable hotel in Bahria Town", "Budget hotel Rawalpindi", "Hotel near Islamabad", "Guest house Bahria Town", "Apartments for rent per day Bahria Town", "Hotel with breakfast Rawalpindi", "Hotel with food delivery to rooms", "Rooms for couples Bahria Town"]} />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Popular searches" title="Find the best hotel in Bahria Town Rawalpindi" text="Whatever you're searching for — luxury, budget, family or near Islamabad — we have a stay for you." />
          <div className="related-grid">
            {LANDINGS.map((l) => (
              <Link key={l.slug} href={`/${l.slug}`} className="related-card reveal">
                <span className="drop-ic"><Icon name="star" /></span>
                <span>
                  <strong>{l.label}</strong>
                  <small>{l.eyebrow}</small>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Frequently Asked Questions" faqs={faqs} />
      <Cta />
    </>
  );
}
