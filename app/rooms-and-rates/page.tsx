import JsonLd from "@/components/JsonLd";
import QuickBook from "@/components/QuickBook";
import { CheckList, Cta, FaqSection, Frame, PageHero, PriceCard, RelatedLinks, SectionHead } from "@/components/Sections";
import { pageMeta } from "@/lib/seo";
import { IMG, ONE_BED_ROOMS, P, PHONE_DISPLAY, breadcrumbSchema, faqSchema, hotelSchema, type Faq } from "@/lib/site";

const PATH = "/rooms-and-rates";

export const metadata = pageMeta({
  path: PATH,
  title: `Room Rates Bahria Town Phase 4 | From ${P.oneBedNight} | Grand Empire`,
  description: `Hotel room rates in Bahria Town Phase 4 Rawalpindi: 1-bed rooms from ${P.oneBedNight}/night, 2-bed apartments from ${P.twoBedNight}. Monthly from ${P.oneBedMonth}. Breakfast included.`,
  keywords: [
    "hotel in phase 4 bahria town for one day price", "room rates bahria town rawalpindi", "affordable hotel rates rawalpindi",
    "2 bedroom apartment for rent bahria town", "1 bedroom apartment for rent bahria town", "hotel rooms price bahria town",
    "budget hotel phase 4 bahria town", "luxury hotel phase 4 bahria town", "hotel rent per night rawalpindi",
  ],
  image: IMG.bedLux,
});

const faqs: Faq[] = [
  ["How much is a room per night in Bahria Town Phase 4?", `At Grand Empire Hotel a 1-bed room starts from ${P.oneBedNight} per night and a 2-bed apartment starts from ${P.twoBedNight} per night, with complimentary breakfast.`],
  ["What is the monthly rent for a furnished apartment?", `Monthly stays start from ${P.oneBedMonth} for a 1-bed (with kitchen, shared lounge, TV and internet) and ${P.twoBedMonth} for a 2-bed apartment (with kitchen, lounge, TV and internet).`],
  ["Do rates include electricity and internet?", "Yes. 24/7 electricity, 24/7 water, internet, towels and toiletries are all included."],
  ["Are discounts available for longer stays?", `Yes, weekly and long-stay rates are available. Call or WhatsApp ${PHONE_DISPLAY} for the best rate.`],
];

export default function RoomsAndRates() {
  return (
    <>
      <JsonLd data={[hotelSchema, breadcrumbSchema([{ path: PATH, name: "Rooms & Rates" }]), faqSchema(faqs)]} />
      <PageHero
        img={IMG.bedLux}
        trail={[{ label: "Rooms & Rates" }]}
        title="Rooms & Rates — Bahria Town Phase 4 Rawalpindi"
        lead={`Transparent, affordable prices for luxury rooms and furnished apartments. Daily rooms from ${P.oneBedNight} and monthly stays from ${P.oneBedMonth}.`}
        badges={[`${ONE_BED_ROOMS} One-Bed Rooms`, "2-Bed Apartments", "Breakfast Included"]}
      />
      <QuickBook />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our Rates" title="Choose your room" text="All prices in Pakistani Rupees. Starting rates — call for current availability and offers." />
          <div className="grid-4">
            <PriceCard label="Daily · Starting from" title="1 Bed Room" amount={P.oneBedNight} per="per night" items={["King size bed", "Attached washroom", "Complimentary breakfast", "Welcome tea", "WiFi, TV, 24/7 power"]} cta="Book 1 bed room" />
            <PriceCard featured ribbon="Families" label="Daily · Starting from" title="2 Bed Apartment" amount={P.twoBedNight} per="per night" items={["2 bedrooms + lounge", "Fitted kitchen", "Smart TV & internet", "Complimentary breakfast", "Ideal for families"]} cta="Book 2 bed apartment" />
            <PriceCard label="Monthly · Starting from" title="1 Bed Monthly" amount={P.oneBedMonth} per="per month" items={["Kitchen access", "Shared lounge", "TV & internet", "24/7 electricity & water", "Housekeeping"]} href="/monthly-rent-apartments-bahria-town-rawalpindi" cta="1 bed monthly details" />
            <PriceCard label="Monthly · Starting from" title="2 Bed Monthly" amount={P.twoBedMonth} per="per month" items={["Private kitchen", "Private lounge", "TV & internet", "All bills included", "Fully furnished flat"]} href="/monthly-rent-apartments-bahria-town-rawalpindi" cta="2 bed monthly details" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="At a glance" title="Rate Card" />
          <div className="table-wrap reveal">
            <table className="rates">
              <thead>
                <tr><th scope="col">Room Type</th><th scope="col">Daily (per night)</th><th scope="col">Monthly</th><th scope="col">Includes</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>1 Bed Room</strong> ({ONE_BED_ROOMS} rooms)</td><td>From {P.oneBedNight}</td><td>From {P.oneBedMonth}</td><td>Attached washroom, breakfast (daily), kitchen &amp; shared lounge (monthly), TV, internet</td></tr>
                <tr><td><strong>2 Bed Apartment</strong></td><td>From {P.twoBedNight}</td><td>From {P.twoBedMonth}</td><td>2 bedrooms, lounge, kitchen, TV, internet, breakfast (daily)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="note mt-2">Rates may change with season and availability — call or WhatsApp {PHONE_DISPLAY} for today&apos;s best price. Lunch and dinner are available on request at extra charge. Valid CNIC / passport required at check-in.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <Frame img={IMG.bedWash} alt="1 bed hotel room with attached washroom in Bahria Town Phase 4 Rawalpindi" />
          <div className="reveal">
            <span className="eyebrow">1 Bed Rooms</span>
            <h2>Elegant 1-bed rooms</h2>
            <p>
              Our {ONE_BED_ROOMS} one-bed rooms feature tufted king-size beds, soft ambient ceiling lights, bedside lamps,
              air conditioning, a wardrobe and a modern attached washroom with glass shower. Ideal for solo travellers,
              couples and business guests looking for an <strong>affordable room in Bahria Town Rawalpindi</strong>.
            </p>
            <CheckList twoCol items={["King size bed", "Attached washroom", "Air conditioning", "Smart TV", "Free WiFi", "Towels & toiletries"]} />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid-2">
          <div className="reveal">
            <span className="eyebrow">2 Bed Apartments</span>
            <h2>Spacious 2-bed apartments</h2>
            <p>
              Our VIP service apartments give you a home away from home: two bedrooms, a stylish lounge with velvet sofas and
              a Smart TV, plus a fitted kitchen with fridge, microwave and stove. The perfect{" "}
              <strong>2 bedroom apartment for rent per day in Bahria Town</strong> for families and groups.
            </p>
            <CheckList twoCol items={["2 private bedrooms", "Living lounge", "Fitted kitchen", "Fridge & microwave", "Smart TV & WiFi", "Daily housekeeping"]} />
          </div>
          <Frame img={IMG.living} alt="2 bed apartment lounge and kitchen for rent in Bahria Town Rawalpindi" />
        </div>
      </section>

      <FaqSection title="Rates FAQ" faqs={faqs} />
      <RelatedLinks current={PATH} posts={["hotel-in-bahria-town-for-one-day-price", "affordable-hotel-bahria-town-phase-4-rawalpindi", "furnished-apartments-monthly-rent-bahria-town"]} />
      <Cta />
    </>
  );
}
