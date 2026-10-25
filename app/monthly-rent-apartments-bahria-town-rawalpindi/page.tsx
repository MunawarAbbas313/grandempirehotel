import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import QuickBook from "@/components/QuickBook";
import { CheckList, Cta, FaqSection, Features, Frame, PageHero, PriceCard, RelatedLinks, SectionHead, Tags } from "@/components/Sections";
import { pageMeta } from "@/lib/seo";
import { IMG, P, PHONE_DISPLAY, breadcrumbSchema, faqSchema, hotelSchema, type Faq } from "@/lib/site";

const PATH = "/monthly-rent-apartments-bahria-town-rawalpindi";

export const metadata = pageMeta({
  path: PATH,
  title: "Furnished Flats for Monthly Rent | Bahria Town Rawalpindi",
  description: `Furnished 1-bed (${P.oneBedMonth}) & 2-bed apartments (${P.twoBedMonth}) for monthly rent in Bahria Town Phase 4 Rawalpindi. Kitchen, lounge, TV, internet & 24/7 power included.`,
  keywords: [
    "furnished apartments for monthly rent in bahria town", "1 bedroom flat for rent in bahria town rawalpindi",
    "2 bedroom apartments for monthly rent in bahria town", "1 bedroom apartments for monthly rent in bahria town",
    "cheap apartments for monthly rent in bahria town", "affordable apartments monthly rent bahria town",
    "rooms for monthly rent in bahria town", "furnished rooms for monthly rent in bahria town",
    "bachelor rooms for monthly rent in bahria town", "studio rooms for monthly rent in bahria town",
    "studio apartments for monthly rent in bahria town", "single room for rent in bahria town phase 4",
    "room for rent in bahria town islamabad", "flats on monthly basis rawalpindi",
  ],
  image: IMG.lounge,
});

const faqs: Faq[] = [
  ["What is the monthly rent for a 1 bedroom flat in Bahria Town Rawalpindi?", `Our furnished 1-bed starts from ${P.oneBedMonth} per month, including kitchen access, shared lounge, TV, internet, electricity and water.`],
  ["What is the monthly rent for a 2 bedroom apartment?", `Our 2-bed furnished apartments start from ${P.twoBedMonth} per month with private kitchen, lounge, TV and internet.`],
  ["Are utility bills included?", "Yes. 24/7 electricity, water and internet are included in the monthly rent."],
  ["Do you rent rooms to bachelors and working professionals?", "Yes. Our monthly rooms are popular with working professionals, students and corporate guests. CNIC is required."],
  ["Is there a security deposit?", `Please contact us on ${PHONE_DISPLAY} for current monthly terms.`],
];

export default function MonthlyRent() {
  return (
    <>
      <JsonLd data={[hotelSchema, breadcrumbSchema([{ path: PATH, name: "Monthly Rent" }]), faqSchema(faqs)]} />
      <PageHero
        img={IMG.lounge}
        trail={[{ label: "Monthly Rent" }]}
        title="Furnished Rooms, Flats & Apartments for Monthly Rent in Bahria Town"
        lead="Live comfortably in Bahria Town Phase 4 Rawalpindi — furnished 1-bed and 2-bed flats with kitchen, lounge, TV and internet. All bills included."
        badges={[`1 Bed from ${P.oneBedMonth}`, `2 Bed from ${P.twoBedMonth}`, "Bills Included"]}
      />
      <QuickBook title="Ask about monthly availability" defaultRoom="1bedm" />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Monthly Rates" title="Monthly rent packages" text="Fully furnished, ready to move in — no extra utility bills." />
          <div className="grid-2" style={{ alignItems: "stretch" }}>
            <PriceCard twoCol label="Starting from" title="1 Bed Room / Flat — Monthly" amount={P.oneBedMonth} per="per month" items={["Furnished bedroom", "Attached washroom", "Kitchen", "Shared lounge", "TV", "Internet", "24/7 electricity", "24/7 water"]} cta="Enquire about 1 bed monthly" />
            <PriceCard twoCol featured ribbon="Best for families" label="Starting from" title="2 Bed Apartment — Monthly" amount={P.twoBedMonth} per="per month" items={["2 furnished bedrooms", "Attached washrooms", "Private kitchen", "Private lounge", "Smart TV", "Internet", "24/7 electricity", "Housekeeping"]} cta="Enquire about 2 bed monthly" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid-2">
          <Frame img={IMG.living} alt="Furnished 2 bedroom apartment for monthly rent in Bahria Town Rawalpindi" />
          <div className="reveal">
            <span className="eyebrow">Home away from home</span>
            <h2>Furnished flats with hotel-style service</h2>
            <p>
              Our <strong>furnished apartments for monthly rent in Bahria Town</strong> are ideal for families relocating to
              Rawalpindi, corporate staff on projects, overseas Pakistanis, and professionals who want a hassle-free home.
              Move in with just your suitcase — furniture, kitchen, TV, internet and 24/7 power are ready.
            </p>
            <CheckList items={["No separate electricity, gas or internet bills", "24/7 front desk and maintenance support", "Food delivery to your apartment on request", "Walk to Civic Center shops, cafés and banks"]} />
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="Who it's for" title="Perfect for long stays" />
          <Features
            items={[
              ["kitchen", "Families", "2-bed apartments with private kitchen and lounge — space for the whole family."],
              ["desk", "Working Professionals", "Quiet rooms, fast internet and 24/7 power for work-from-home."],
              ["bed", "Bachelors & Students", "Affordable furnished rooms on monthly basis with all bills included."],
              ["calendar", "Corporate & Overseas Guests", "Flexible monthly contracts for project staff and visiting overseas families."],
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container seo-text reveal">
          <h2>Rooms &amp; flats for monthly rent in Bahria Town Rawalpindi</h2>
          <p>
            Searching for a <strong>1 bedroom flat for rent in Bahria Town Rawalpindi</strong>, a{" "}
            <strong>2 bedroom apartment for monthly rent in Bahria Town</strong>, or{" "}
            <strong>furnished rooms for monthly rent</strong>? Grand Empire Apartments in Bahria Town Phase 4 Civic Center
            offers fully furnished, well-maintained units with hotel services — cleaner and more reliable than typical OLX
            listings.
          </p>
          <h3>Affordable rooms on monthly basis</h3>
          <p>
            We offer <strong>affordable rooms for monthly rent in Bahria Town</strong> for bachelors, students and
            professionals, as well as <strong>single rooms for rent in Bahria Town Phase 4</strong> with a shared lounge and
            kitchen. Every unit includes TV, internet, 24/7 electricity and water.
          </p>
          <h3>Studio &amp; 1 bedroom apartments</h3>
          <p>
            Our 1-bed units work like a <strong>studio apartment for monthly rent in Bahria Town</strong> — a private
            furnished bedroom and washroom, with access to a kitchen and lounge. Upgrade to our 2-bed apartment for your own
            private kitchen and living room. Before you decide, use our{" "}
            <Link href="/blog/furnished-apartments-monthly-rent-bahria-town">monthly rent checklist</Link>.
          </p>
          <Tags words={["Furnished apartments monthly rent Bahria Town", "1 bedroom flat for rent Bahria Town Rawalpindi", "2 bedroom apartment monthly rent Bahria Town", "Affordable apartments monthly rent", "Rooms for monthly rent Bahria Town", "Bachelor rooms for monthly rent", "Studio rooms monthly rent", "Single room for rent Phase 4", "Furnished rooms monthly rent", "Room for rent Bahria Town Islamabad"]} />
        </div>
      </section>

      <FaqSection alt title="Monthly rent questions" faqs={faqs} />
      <RelatedLinks current={PATH} posts={["furnished-apartments-monthly-rent-bahria-town", "stay-in-bahria-town-rawalpindi-when-visiting-islamabad", "hotel-vs-airbnb-bahria-town-rawalpindi"]} />
      <Cta title="Looking for a furnished flat this month?" text={`Call or WhatsApp ${PHONE_DISPLAY} to view an apartment today.`} />
    </>
  );
}
