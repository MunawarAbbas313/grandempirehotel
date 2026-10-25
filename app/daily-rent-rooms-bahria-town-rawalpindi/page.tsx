import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import QuickBook from "@/components/QuickBook";
import { Cta, FaqSection, Features, Frame, PageHero, PriceCard, RelatedLinks, SectionHead, Tags } from "@/components/Sections";
import { pageMeta } from "@/lib/seo";
import { AMENITIES, IMG, P, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_BOOK, breadcrumbSchema, faqSchema, hotelSchema, type Faq } from "@/lib/site";

const PATH = "/daily-rent-rooms-bahria-town-rawalpindi";

export const metadata = pageMeta({
  path: PATH,
  title: `Rooms for Daily Rent in Bahria Town Rawalpindi | From ${P.oneBedNight}`,
  description: `Affordable rooms & furnished apartments for daily rent in Bahria Town Phase 4 Rawalpindi. One day / one night stay from ${P.oneBedNight} with free breakfast. Book on ${PHONE_DISPLAY}.`,
  keywords: [
    "rooms for daily rent bahria town rawalpindi", "hotel in phase 4 bahria town for one day", "cheap hotel in phase 4 bahria town for one day",
    "affordable hotel in phase 4 bahria town for one day", "budget hotel in phase 4 bahria town for one day",
    "luxury hotel in phase 4 bahria town for one day", "best hotel near phase 4 bahria town for one day",
    "4 star hotel near phase 4 bahria town for one day", "furnished apartments for daily rent in bahria town",
    "cheap apartments for daily rent in bahria town", "1 bedroom apartments for daily rent in bahria town",
    "studio apartments for daily rent in bahria town", "bahria town apartment for rent per day",
    "airbnb bahria town rawalpindi", "hotels in islamabad for night stay", "short stay bahria town rawalpindi",
  ],
  image: IMG.bedDeluxe,
});

const faqs: Faq[] = [
  ["Can I book a hotel room in Phase 4 Bahria Town for one day?", `Yes. Grand Empire Hotel offers rooms for one day / one night from ${P.oneBedNight}, including complimentary breakfast and welcome tea.`],
  ["Do you have furnished apartments for daily rent in Bahria Town?", `Yes. Our fully furnished 2-bed apartments with lounge and kitchen are available per day from ${P.twoBedNight}.`],
  ["What do I need to check in?", "A valid original CNIC (or passport for foreign guests) for every adult guest."],
  ["How do I book a room for tonight?", `Call or WhatsApp ${PHONE_DISPLAY}. Our front desk is open 24/7 and can confirm availability instantly.`],
  ["Is this a good alternative to Airbnb in Bahria Town Rawalpindi?", "Yes. You get the space of an apartment plus hotel services: daily cleaning, fresh towels, breakfast, 24/7 front desk and power backup."],
];

export default function DailyRent() {
  return (
    <>
      <JsonLd data={[hotelSchema, breadcrumbSchema([{ path: PATH, name: "Daily Stay" }]), faqSchema(faqs)]} />
      <PageHero
        img={IMG.bedDeluxe}
        trail={[{ label: "Daily Stay" }]}
        title="Rooms & Apartments for Daily Rent in Bahria Town Rawalpindi"
        lead={`Book a clean, comfortable, affordable room in Bahria Town Phase 4 for one day, one night or a weekend — breakfast included, from just ${P.oneBedNight}.`}
        badges={["One Day & One Night Stay", "Per Day Apartments", "Same-day Booking"]}
      />
      <QuickBook title="Need a room today? Check availability now" />

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <span className="eyebrow">Daily Basis Rooms</span>
            <h2>Affordable hotel in Phase 4 Bahria Town for one day</h2>
            <p>
              Need a place to stay for a day or a night? Grand Empire Hotel offers{" "}
              <strong>rooms on a daily basis in Bahria Town Rawalpindi</strong> with everything included: an attached
              washroom, fresh towels, shampoo &amp; handwash, free WiFi, 24/7 electricity and water, a{" "}
              <strong>complimentary breakfast</strong> and a warm welcome tea.
            </p>
            <p>
              Our location in the <strong>Civic Center of Bahria Town Phase 4</strong> means restaurants, shops and banks
              are steps away — and Islamabad is a short drive. It is the smart choice for guests who want a{" "}
              <strong>luxury hotel for one day at an affordable price</strong>. See our{" "}
              <Link href="/blog/hotel-in-bahria-town-for-one-day-price">one-day price guide</Link>.
            </p>
            <div className="btn-row">
              <Link className="btn btn-gold" href="/contact#book">Check Availability</Link>
              <Link className="btn btn-outline on-light" href="/rooms-and-rates">See All Rates</Link>
            </div>
          </div>
          <Frame img={IMG.bedDoor} alt="Room for daily rent in Bahria Town Phase 4 Rawalpindi" />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Daily Rates" title="Per-day prices" />
          <div className="grid-3">
            <PriceCard label="Starting from" title="1 Bed Room — One Day" amount={P.oneBedNight} per="per night" items={["Breakfast & welcome tea", "Attached washroom", "WiFi & TV"]} cta="Book 1 bed for one day" />
            <PriceCard featured ribbon="Popular" label="Starting from" title="2 Bed Apartment — Per Day" amount={P.twoBedNight} per="per night" items={["2 bedrooms + lounge", "Kitchen", "Best for families"]} cta="Book apartment per day" />
            <PriceCard label="Ask for rate" title="Weekly Stay" amount="Special" per="7+ nights" items={["Discounted nightly rate", "Housekeeping", "Food on request"]} href={WHATSAPP_BOOK} external cta="Ask weekly rate on WhatsApp" />
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="Every daily stay includes" title="Included with your room" />
          <Features items={AMENITIES.slice(0, 8)} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Easy Booking" title="Book your room in 3 steps" />
          <div className="steps" style={{ maxWidth: 720, margin: "auto" }}>
            <div className="step reveal">
              <h3>Call or WhatsApp</h3>
              <p>Contact our 24/7 front desk on <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> with your dates and number of guests.</p>
            </div>
            <div className="step reveal">
              <h3>Get instant confirmation</h3>
              <p>We confirm availability and your rate right away — same-day bookings welcome.</p>
            </div>
            <div className="step reveal">
              <h3>Check in &amp; relax</h3>
              <p>Show your CNIC at reception, enjoy your welcome tea and settle into your room.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container seo-text reveal">
          <h2>Affordable rooms for daily rent in Bahria Town Rawalpindi</h2>
          <p>
            If you are searching for <strong>affordable rooms for daily rent in Bahria Town</strong>, a{" "}
            <strong>budget hotel in Phase 4 Bahria Town for one day</strong>, or{" "}
            <strong>furnished apartments for daily rent in Bahria Town</strong>, Grand Empire Hotel is built for you.
            Unlike many listings on OLX or Airbnb, every booking includes hotel-grade cleanliness, hygiene, fresh linen, a
            24/7 service desk and uninterrupted electricity.
          </p>
          <h3>Who stays with us on a daily basis?</h3>
          <p>
            Business travellers visiting Rawalpindi and Islamabad, families attending weddings in Bahria Town, overseas
            Pakistanis, guests on a <strong>short stay in Bahria Town Rawalpindi</strong>, and visitors who want a{" "}
            <strong>hotel for a night stay near Islamabad</strong> without Islamabad prices.
          </p>
          <h3>Bahria Town apartment for rent per day</h3>
          <p>
            Our 2-bed apartments are the best <strong>Bahria Town apartment for rent per day</strong> — a private lounge,
            kitchen and two bedrooms, with hotel services. A great alternative to Airbnb in Bahria Town Phase 7 or Phase 8,
            Rawalpindi, right in Phase 4 Civic Center.
          </p>
          <Tags words={["Rooms for daily rent Bahria Town", "Hotel in Phase 4 Bahria Town for one day", "Affordable hotel for one day", "Furnished apartments daily rent Bahria Town", "1 bedroom apartment daily rent", "Studio apartment daily rent Bahria Town", "Bahria Town apartment rent per day", "Airbnb Bahria Town Rawalpindi", "Hotels in Islamabad for night stay", "Short stay Bahria Town"]} />
        </div>
      </section>

      <FaqSection title="Daily stay questions" faqs={faqs} />
      <RelatedLinks current={PATH} posts={["hotel-in-bahria-town-for-one-day-price", "hotel-vs-airbnb-bahria-town-rawalpindi", "stay-in-bahria-town-rawalpindi-when-visiting-islamabad"]} />
      <Cta title="Need a room for tonight?" />
    </>
  );
}
