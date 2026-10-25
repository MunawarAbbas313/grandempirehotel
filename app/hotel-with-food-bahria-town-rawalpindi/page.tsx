import JsonLd from "@/components/JsonLd";
import { CheckList, Cta, FaqSection, Features, Frame, PageHero, RelatedLinks, SectionHead, Tags } from "@/components/Sections";
import { Icon } from "@/components/Icons";
import { pageMeta } from "@/lib/seo";
import { IMG, P, PHONE_DISPLAY, PHONE_TEL, breadcrumbSchema, faqSchema, hotelSchema, type Faq, type IconName } from "@/lib/site";

const PATH = "/hotel-with-food-bahria-town-rawalpindi";

export const metadata = pageMeta({
  path: PATH,
  title: "Hotel with Food & Room Delivery | Bahria Town Rawalpindi",
  description:
    "Hotel & apartments with food delivered to your room in Bahria Town Phase 4 Rawalpindi. Free breakfast, welcome tea, desi, fast food & continental lunch and dinner on request.",
  keywords: [
    "hotel with food rawalpindi", "hotel with food bahria town", "hotel with food delivery to rooms",
    "apartments with food delivery bahria town", "hotel with free breakfast rawalpindi", "hotel with breakfast bahria town phase 4",
    "room service bahria town rawalpindi", "desi food bahria town", "fast food bahria town phase 4",
    "continental food rawalpindi", "hotel restaurant bahria town",
  ],
  image: IMG.lounge,
});

const faqs: Faq[] = [
  ["Is breakfast free at Grand Empire Hotel?", "Yes. Complimentary breakfast and welcome tea are included with daily stays."],
  ["Can I order lunch and dinner to my room?", "Yes. Lunch and dinner are prepared on request and delivered to your room or apartment. Call the front desk to order."],
  ["What kind of food is available?", "Desi (karahi, handi, biryani, BBQ), fast food (burgers, pizza, sandwiches) and continental dishes (steak, pasta, grilled chicken)."],
  ["Is the food delivery available 24 hours?", "Please check with the front desk for current kitchen timings. Our front desk is available 24/7."],
];

// Sample menu — edit items here. Prices are given on request.
const MENU: { title: string; icon: IconName; items: string[] }[] = [
  { title: "Breakfast (Complimentary)", icon: "coffee", items: ["Fried egg / omelette", "Paratha or toast", "Butter, jam & honey", "Doodh patti tea / coffee", "Seasonal fruit or juice"] },
  { title: "Desi Cuisine", icon: "food", items: ["Chicken karahi", "Mutton karahi", "Chicken handi", "Chicken biryani", "Daal mash / daal chana", "Chicken tikka & seekh kabab", "Mixed sabzi", "Naan, roti & raita"] },
  { title: "Fast Food", icon: "bag", items: ["Zinger burger", "Chicken burger", "Club sandwich", "Pizza (small / medium / large)", "Chicken shawarma", "Nuggets & wings", "French fries", "Soft drinks"] },
  { title: "Continental", icon: "food", items: ["Grilled chicken with vegetables", "Chicken steak with sauce", "Fettuccine Alfredo pasta", "Chicken chow mein", "Fish & chips", "Russian salad", "Soups of the day", "Desserts"] },
];

export default function Food() {
  return (
    <>
      <JsonLd data={[hotelSchema, breadcrumbSchema([{ path: PATH, name: "Food & Dining" }]), faqSchema(faqs)]} />
      <PageHero
        img={IMG.lounge}
        trail={[{ label: "Food & Dining" }]}
        title="Hotel with Food in Bahria Town Rawalpindi — Room Delivery"
        lead="Complimentary breakfast every morning, plus desi, fast food and continental lunch & dinner delivered fresh to your room or apartment."
        badges={["Free Breakfast", "Food Delivered to Rooms", "Desi · Fast Food · Continental"]}
      />

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <span className="eyebrow">Dining at Grand Empire</span>
            <h2>A hotel with food — without leaving your room</h2>
            <p>
              At Grand Empire Hotel &amp; Apartments you never have to search for food. Every daily stay includes a{" "}
              <strong>complimentary breakfast</strong> and <strong>welcome tea</strong>. For lunch and dinner, simply call
              the front desk — your meal is prepared fresh and <strong>delivered to your room</strong>.
            </p>
            <p>
              That makes us one of the few{" "}
              <strong>hotels and apartments with food delivery to rooms in Bahria Town Rawalpindi</strong> — perfect for
              families, couples, business guests and long-stay residents.
            </p>
            <div className="btn-row">
              <a className="btn btn-gold" href={`tel:${PHONE_TEL}`}>
                <Icon name="phone" /> Order: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <Frame img={IMG.living} alt="Apartment with dining and kitchen, hotel with food Bahria Town Rawalpindi" />
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="How it works" title="Food service" />
          <Features
            items={[
              ["coffee", "Complimentary Breakfast", "Served every morning for daily-stay guests — free of charge."],
              ["coffee", "Welcome Tea", "A fresh cup of tea on arrival, on the house."],
              ["bag", "Room Delivery", "Lunch & dinner delivered hot to your room or apartment."],
              ["desk", "Order via Front Desk", "Call reception or WhatsApp — our 24/7 desk handles your order."],
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Menu" title="Our Menu" text="Lunch and dinner are prepared on request. Prices and daily availability may vary — WhatsApp us for today's menu." />
          <div className="grid-2" style={{ alignItems: "start" }}>
            {MENU.map((cat) => (
              <div className="menu-cat reveal" key={cat.title}>
                <h3>
                  <Icon name={cat.icon} small /> {cat.title}
                </h3>
                <ul>
                  {cat.items.map((it) => (
                    <li key={it}>
                      <span>{it}</span>
                      <span>On request</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="note mt-2">
            This is a sample menu. Items, prices and kitchen timings may change — please confirm with our front desk on{" "}
            {PHONE_DISPLAY}.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container seo-text reveal">
          <h2>Hotel with food in Bahria Town Phase 4 Rawalpindi</h2>
          <p>
            Many guests looking for a <strong>hotel with food in Rawalpindi</strong> or{" "}
            <strong>apartments with food delivery in Bahria Town</strong> end up at Grand Empire. Located in Civic Center,
            Bahria Town Phase 4, we combine affordable luxury rooms with a convenient in-room dining service, so families,
            honeymoon couples and business travellers can enjoy a fresh meal in private.
          </p>
          <h3>Hotel with breakfast included</h3>
          <p>
            Every daily booking comes with a <strong>free breakfast</strong> — one of the reasons we are rated among the
            best value hotels in Bahria Town Rawalpindi. Combine it with our affordable rates from {P.oneBedNight} per night for
            a complete, budget-friendly stay.
          </p>
          <h3>Food for monthly residents</h3>
          <p>
            Staying on a monthly basis? Our <strong>furnished apartments</strong> include a kitchen, and you can still order
            desi, fast food or continental meals from the front desk whenever you like.
          </p>
          <CheckList items={["Complimentary breakfast & welcome tea", "Lunch & dinner delivered to rooms", "Desi, fast food & continental"]} />
          <Tags words={["Hotel with food Rawalpindi", "Hotel with food delivery to rooms", "Apartments with food delivery Bahria Town", "Hotel with breakfast Bahria Town", "Room service Bahria Town Rawalpindi", "Desi food Bahria Town", "Fast food delivery Bahria Town Phase 4", "Continental food Rawalpindi", "Hotel with free breakfast Rawalpindi"]} />
        </div>
      </section>

      <FaqSection title="Food & dining questions" faqs={faqs} />
      <RelatedLinks current={PATH} posts={["honeymoon-couple-stay-bahria-town-rawalpindi", "stay-in-bahria-town-rawalpindi-when-visiting-islamabad", "affordable-hotel-bahria-town-phase-4-rawalpindi"]} />
      <Cta title="Hungry? Book a stay with breakfast included." />
    </>
  );
}
