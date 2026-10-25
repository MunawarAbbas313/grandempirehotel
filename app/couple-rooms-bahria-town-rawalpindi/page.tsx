import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import QuickBook from "@/components/QuickBook";
import { CheckList, Cta, FaqSection, Features, Frame, PageHero, RelatedLinks, SectionHead, Tags } from "@/components/Sections";
import { pageMeta } from "@/lib/seo";
import { IMG, P, PHONE_DISPLAY, breadcrumbSchema, faqSchema, hotelSchema, type Faq } from "@/lib/site";

const PATH = "/couple-rooms-bahria-town-rawalpindi";

export const metadata = pageMeta({
  path: PATH,
  title: "Rooms for Couples & Honeymoon | Bahria Town Rawalpindi",
  description: `Private, affordable rooms for couples, newlyweds & honeymoon in Bahria Town Phase 4 Rawalpindi. Full night or short stay, breakfast included, from ${P.oneBedNight}. Call ${PHONE_DISPLAY}.`,
  keywords: [
    "rooms for couples in bahria town rawalpindi", "private rooms for couples in bahria town rawalpindi",
    "cheap rooms for couples in bahria town rawalpindi", "affordable rooms for couples rawalpindi",
    "furnished rooms for couples in bahria town rawalpindi", "rooms for couples in bahria town rawalpindi for family",
    "honeymoon hotel rawalpindi", "honeymoon suite bahria town", "hotel for newly married couple",
    "short stay bahria town rawalpindi", "guest house in bahria town islamabad", "guest house in bahria town phase 8 rawalpindi",
  ],
  image: IMG.bedRed,
});

const faqs: Faq[] = [
  ["Do you have private rooms for couples in Bahria Town Rawalpindi?", `Yes. We offer private, clean and secure rooms for married couples and families, from ${P.oneBedNight} per night with breakfast.`],
  ["Do you offer honeymoon rooms?", "Yes. Our honeymoon-ready rooms feature king-size tufted beds, warm lighting and attached washrooms. Ask us about room decoration and in-room dinner on request."],
  ["What documents are required for couples?", "Original CNIC is required for both guests at check-in, as per hotel policy and local regulations."],
  ["Can we book a short stay instead of a full night?", `Short stay options may be available depending on occupancy. Call or WhatsApp ${PHONE_DISPLAY} to check.`],
  ["Is the hotel safe and private?", "Yes. The building has 24/7 reception, CCTV in common areas, and every room is private with its own attached washroom."],
];

export default function Couples() {
  return (
    <>
      <JsonLd data={[hotelSchema, breadcrumbSchema([{ path: PATH, name: "Couples & Honeymoon" }]), faqSchema(faqs)]} />
      <PageHero
        img={IMG.bedRed}
        trail={[{ label: "Couples & Honeymoon" }]}
        title="Private Rooms for Couples & Honeymoon in Bahria Town Rawalpindi"
        lead="Romantic, private and affordable rooms for newlyweds, honeymoon couples and married couples — full night or short stay, with breakfast and food served to your room."
        badges={["Honeymoon Rooms", "Full Night & Short Stay", "Private & Secure"]}
      />
      <QuickBook title="Reserve your private room for two" defaultRoom="couple" />

      <section className="section">
        <div className="container grid-2">
          <Frame img={IMG.bedRed} alt="Honeymoon room for couples in Bahria Town Rawalpindi" />
          <div className="reveal">
            <span className="eyebrow">For Couples</span>
            <h2>A private, romantic stay for two</h2>
            <p>
              Grand Empire Hotel is a favourite for <strong>newly married couples</strong>,{" "}
              <strong>honeymoon couples</strong> and married couples looking for a peaceful getaway in{" "}
              <strong>Bahria Town Rawalpindi</strong>. Our rooms feature plush tufted king beds, soft ambient lighting,
              framed art and modern attached washrooms — elegant, private and spotless.
            </p>
            <p>
              Stay for a full night, a weekend, or ask about short stay options. Enjoy breakfast in bed and order a{" "}
              <Link href="/hotel-with-food-bahria-town-rawalpindi">candle-light style dinner to your room</Link>.
            </p>
            <CheckList twoCol items={["Private room & washroom", "King size tufted bed", "Breakfast included", "Dinner to your room", "24/7 reception", "Discreet, respectful staff"]} />
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="Stay Options" title="Packages for couples" />
          <Features
            items={[
              ["heart", "Honeymoon Stay", "Our most elegant room for newlyweds, with breakfast in bed and dinner on request."],
              ["bed", "Full Night Stay", `Check in, relax and wake up to complimentary breakfast. From ${P.oneBedNight}.`],
              ["clock", "Short Stay", "Need just a few hours to rest? Ask our front desk about short stay availability."],
              ["food", "Romantic Dinner In-Room", "Desi, continental or fast food served hot to your room on request."],
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <span className="eyebrow">Peace of mind</span>
            <h2>Safe, clean &amp; family-friendly</h2>
            <p>
              We are a professional, family-friendly hotel. All rooms are cleaned and sanitised before every check-in, with
              fresh towels, washed linen, shampoo and handwash provided. Our 24/7 service desk is always available for
              anything you need.
            </p>
            <p className="note">As per hotel policy, original CNIC is required for both guests at check-in.</p>
          </div>
          <Frame img={IMG.bedLux} alt="Furnished room for couples in Bahria Town Phase 4" />
        </div>
      </section>

      <section className="section alt">
        <div className="container seo-text reveal">
          <h2>Rooms for couples in Bahria Town Rawalpindi</h2>
          <p>
            Looking for <strong>private rooms for couples in Bahria Town Rawalpindi</strong>, an{" "}
            <strong>affordable room for couples</strong>, or a <strong>furnished room for couples</strong> that is clean and
            secure? Grand Empire Hotel in Bahria Town Phase 4 Civic Center combines luxury interiors with budget-friendly
            pricing. It is ideal for families too, and a great alternative to a guest house in Bahria Town Phase 8 or
            Islamabad.
          </p>
          <h3>Honeymoon hotel near Islamabad</h3>
          <p>
            Many newlyweds from Rawalpindi and Islamabad choose us for their first nights together — our honeymoon rooms
            offer a 5-star style feel at an affordable price, with in-room dining so you never have to leave. Read our{" "}
            <Link href="/blog/honeymoon-couple-stay-bahria-town-rawalpindi">honeymoon stay guide</Link>.
          </p>
          <Tags words={["Rooms for couples Bahria Town Rawalpindi", "Private rooms for couples", "Affordable rooms for couples", "Furnished rooms for couples", "Honeymoon hotel Rawalpindi", "Hotel for newly married couple", "Short stay Bahria Town", "Rooms for couples for family", "Guest house Bahria Town", "Hotel for one night Rawalpindi"]} />
        </div>
      </section>

      <FaqSection title="Couples & honeymoon questions" faqs={faqs} />
      <RelatedLinks current={PATH} posts={["honeymoon-couple-stay-bahria-town-rawalpindi", "hotel-in-bahria-town-for-one-day-price", "affordable-hotel-bahria-town-phase-4-rawalpindi"]} />
      <Cta title="Plan your honeymoon or couple's getaway" text={`WhatsApp ${PHONE_DISPLAY} to reserve your private room — breakfast included.`} />
    </>
  );
}
