import Link from "next/link";
import Gallery from "@/components/Gallery";
import { Icon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { Cta, FaqSection, Features, Frame, PageHero, RelatedLinks, SectionHead } from "@/components/Sections";
import { pageMeta } from "@/lib/seo";
import {
  ADDRESS, AMENITIES, AREAS, CHECK_IN, CHECK_OUT, GOOGLE_RATING, IMG, ONE_BED_ROOMS, P, PHONE_DISPLAY, PHONE_TEL, WHATSAPP,
  breadcrumbSchema, faqSchema, hotelSchema, type Faq,
} from "@/lib/site";

const PATH = "/about";

export const metadata = pageMeta({
  path: PATH,
  title: "Hotel Details, Facilities & Policies | Grand Empire Hotel Bahria Town",
  description: `Everything about Grand Empire Hotel & Apartments, Bahria Town Phase 4 Rawalpindi: ${ONE_BED_ROOMS} rooms, 2-bed apartments, facilities, check-in ${CHECK_IN}, check-out ${CHECK_OUT}, policies & location.`,
  keywords: [
    "grand empire hotel bahria town", "hotel details bahria town rawalpindi", "hotel facilities phase 4 bahria town",
    "hotel check in time rawalpindi", "hotel policies bahria town", "vip service apartments bahria town",
    "hotel near bahria civic center", "family hotel bahria town rawalpindi",
  ],
  image: IMG.reception,
});

const faqs: Faq[] = [
  ["What are the check-in and check-out times?", `Check-in is from ${CHECK_IN} and check-out is by ${CHECK_OUT}. Early check-in or late check-out can be arranged subject to availability.`],
  ["How many rooms does Grand Empire Hotel have?", `We have ${ONE_BED_ROOMS} one-bed rooms plus fully furnished 2-bed apartments with lounge and kitchen.`],
  ["What ID is needed at check-in?", "An original CNIC for every adult guest (or passport for foreign nationals)."],
  ["Is the front desk open at night?", "Yes, our reception and concierge desk is open 24 hours a day, 7 days a week."],
];

const details: [string, string][] = [
  ["Property type", "Boutique hotel & VIP service apartments"],
  ["Address", ADDRESS],
  ["Rooms", `${ONE_BED_ROOMS} one-bed rooms + 2-bed apartments`],
  ["Daily rates", `1 bed from ${P.oneBedNight} · 2 bed from ${P.twoBedNight} per night`],
  ["Monthly rates", `1 bed from ${P.oneBedMonth} · 2 bed from ${P.twoBedMonth} per month`],
  ["Check-in / Check-out", `From ${CHECK_IN} / by ${CHECK_OUT}`],
  ["Front desk", "Open 24/7 — reception & concierge"],
  ["Breakfast", "Complimentary with daily stays, plus welcome tea"],
  ["Food", "Desi, fast food & continental — delivered to your room on request"],
  ["Utilities", "24/7 electricity backup, 24/7 hot & cold water, free internet"],
  ["In every room", "Attached washroom, towels, shampoo, handwash, TV, air conditioning"],
  ["ID required", "Original CNIC (or passport) for all adult guests"],
  ["Booking", `Call or WhatsApp ${PHONE_DISPLAY}`],
];

export default function About() {
  return (
    <>
      <JsonLd data={[hotelSchema, breadcrumbSchema([{ path: PATH, name: "Hotel Details" }]), faqSchema(faqs)]} />
      <PageHero
        img={IMG.reception}
        trail={[{ label: "Hotel Details" }]}
        title="About Grand Empire Hotel & Apartments"
        lead="A boutique hotel and VIP service apartment building in the Civic Center of Bahria Town Phase 4, Rawalpindi — affordable luxury with warm, round-the-clock service."
        badges={[<><span className="stars">★</span> {GOOGLE_RATING} on Google</>, "24/7 Reception", "Civic Center Location"]}
      />

      <section className="section">
        <div className="container">
          <div className="facts reveal">
            <div className="fact"><strong>{ONE_BED_ROOMS}</strong><span>One-bed rooms</span></div>
            <div className="fact"><strong>2-Bed</strong><span>Furnished apartments</span></div>
            <div className="fact"><strong>24/7</strong><span>Front desk, power &amp; water</span></div>
            <div className="fact"><strong>{GOOGLE_RATING}★</strong><span>Google rating</span></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <div className="reveal">
            <span className="eyebrow">Our story</span>
            <h2>Affordable luxury in the heart of Bahria Town</h2>
            <p>
              Grand Empire Hotel (Pvt.) Ltd. was created for guests who want the comfort of a premium hotel without
              premium prices. From our welcoming reception and concierge to our tufted king beds and modern washrooms,
              every detail is designed for a relaxing, hygienic stay.
            </p>
            <p>
              We serve families, business travellers, married couples and honeymooners, overseas Pakistanis and long-stay
              guests — with <Link href="/daily-rent-rooms-bahria-town-rawalpindi">daily rooms</Link>,{" "}
              <Link href="/couple-rooms-bahria-town-rawalpindi">couple-friendly rooms</Link> and{" "}
              <Link href="/monthly-rent-apartments-bahria-town-rawalpindi">furnished monthly apartments</Link>.
            </p>
          </div>
          <Frame img={IMG.front} alt="Grand Empire Hotel building in Civic Center, Bahria Town Phase 4 Rawalpindi" />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="At a glance" title="Hotel details" />
          <div className="reveal" style={{ maxWidth: 900, margin: "0 auto" }}>
            <table className="details-table">
              <tbody>
                {details.map(([k, v]) => (
                  <tr key={k}>
                    <th scope="row">{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="Facilities" title="Facilities & services" />
          <Features items={AMENITIES} />
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <span className="eyebrow">House rules</span>
            <h2>Policies</h2>
            <ul className="check-list">
              <li>Check-in from {CHECK_IN}, check-out by {CHECK_OUT} (early / late on request)</li>
              <li>Original CNIC or passport required for every adult guest</li>
              <li>Rates may vary by season and availability — confirm when booking</li>
              <li>Lunch &amp; dinner are charged separately; breakfast is complimentary on daily stays</li>
              <li>Please respect other guests&apos; privacy and keep noise low at night</li>
            </ul>
            <div className="btn-row">
              <a className="btn btn-gold" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
              <a className="btn btn-outline on-light" href={WHATSAPP} target="_blank" rel="noopener">Ask on WhatsApp</a>
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">Location</span>
            <h2>Where we are</h2>
            <p>
              <Icon name="pin" small /> {ADDRESS}. Inside the Civic Center — restaurants, cafés, banks and shops are on
              your doorstep, with convenient routes to Islamabad via the Expressway and to Rawalpindi via GT Road.{" "}
              <Link href="/contact">See the map &amp; directions</Link>.
            </p>
            <p style={{ fontWeight: 600, color: "var(--navy)" }}>Convenient for guests visiting:</p>
            <div className="areas" style={{ justifyContent: "flex-start" }}>
              {AREAS.map((a) => (
                <span key={a}><Icon name="pin" small /> {a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Gallery" title="Inside Grand Empire" />
          <Gallery
            photos={[
              { img: IMG.lobby, alt: "Hotel lobby and reception, Bahria Civic Center" },
              { img: IMG.bedLux, alt: "Luxury bedroom with king bed" },
              { img: IMG.reception, alt: "Reception and concierge desk" },
              { img: IMG.bedWash, alt: "Room with attached washroom" },
              { img: IMG.bedDeluxe, alt: "Deluxe room with tufted bed" },
              { img: IMG.living, alt: "2-bed apartment lounge and kitchen" },
              { img: IMG.bedRed, alt: "Honeymoon room with red velvet bed" },
              { img: IMG.bedDoor, alt: "1-bed room for daily rent" },
            ]}
          />
        </div>
      </section>

      <FaqSection title="Hotel details FAQ" faqs={faqs} />
      <RelatedLinks current={PATH} />
      <Cta />
    </>
  );
}
