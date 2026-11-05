import { CHECK_IN, CHECK_OUT, IMG, ONE_BED_ROOMS, P, PHONE_DISPLAY, SHORT_HOURS, WHATSAPP_BOOK, type Faq, type Feature, type Img } from "./site";

// Search-focused pages, each targeting one keyword group.
// Text supports [link text](/url) and **bold**.
export type Landing = {
  slug: string;
  label: string; // short name for links
  title: string; // <title> (keep under ~65 characters)
  description: string; // meta description (~150–160 characters)
  keywords: string[];
  h1: string;
  lead: string;
  eyebrow: string;
  image: Img;
  sideImage: Img;
  sideAlt: string;
  introTitle: string;
  intro: string[];
  highlightsTitle: string;
  highlights: Feature[];
  sections: { h2: string; paras: string[]; list?: string[] }[];
  faqs: Faq[];
  tags: string[];
  posts: string[];
  // Optional custom price cards (otherwise the standard 4 rate cards are shown)
  prices?: { label: string; title: string; amount: string; per: string; items: string[]; featured?: boolean; ribbon?: string; href?: string; cta?: string; external?: boolean }[];
  pricesTitle?: string;
  badges?: string[];
};

const D1 = "/daily-rent-rooms-bahria-town-rawalpindi";
const CPL = "/couple-rooms-bahria-town-rawalpindi";
const MON = "/monthly-rent-apartments-bahria-town-rawalpindi";
const FOOD = "/hotel-with-food-bahria-town-rawalpindi";
const RATES = "/rooms-and-rates";

export const LANDINGS: Landing[] = [
  {
    slug: "best-hotel-in-bahria-town-rawalpindi",
    label: "Best Hotel in Bahria Town Rawalpindi",
    title: "Best Hotel in Bahria Town Rawalpindi | Grand Empire Hotel",
    description: `Best hotel in Bahria Town Rawalpindi? Grand Empire, Phase 4 Civic Center: 5.0 Google rating, rooms from ${P.oneBedNight} with breakfast, AC & 24/7 power.`,
    keywords: [
      "best hotel in bahria town rawalpindi", "best hotel in bahria town", "best hotel in phase 4 bahria town",
      "top hotels bahria town rawalpindi", "best hotels in rawalpindi", "best hotel near bahria town",
      "best hotel in bahria town phase 4 for one day", "best hotels in islamabad rawalpindi", "highly rated hotel bahria town",
    ],
    h1: "The Best Hotel in Bahria Town Rawalpindi — Grand Empire",
    lead: `Rated 5.0 on Google. Luxury rooms and 2-bed apartments in Phase 4 Civic Center with free breakfast, 24/7 power and a round-the-clock front desk — from ${P.oneBedNight} per night.`,
    eyebrow: "Top-rated · Bahria Town Rawalpindi",
    image: IMG.bedLux,
    sideImage: IMG.reception,
    sideAlt: "Reception of Grand Empire Hotel, best hotel in Bahria Town Rawalpindi",
    introTitle: "What makes a hotel the best in Bahria Town?",
    intro: [
      "Ask guests what makes the **best hotel in Bahria Town Rawalpindi** and the answers are always the same: a central location, spotless rooms, reliable electricity, good food and staff who actually help. Price matters too — the best hotel is the one that gives you all of this without overcharging.",
      `Grand Empire Hotel & Apartments was built around exactly these priorities. We are in the **Civic Center of Bahria Town Phase 4**, our ${ONE_BED_ROOMS} one-bed rooms and 2-bed apartments are designed with tufted king beds and modern washrooms, and every daily stay includes breakfast. That is why guests rate us **5.0 on Google**.`,
    ],
    highlightsTitle: "Why guests rate us the best",
    highlights: [
      ["star", "5.0 Google rating", "Guests consistently praise our cleanliness, comfort and friendly staff."],
      ["pin", "Best location", "Phase 4 Civic Center — food, banks and shops at your doorstep."],
      ["bolt", "No load-shedding", "24/7 electricity and water backup in every room."],
      ["coffee", "Breakfast included", "Complimentary breakfast and welcome tea on daily stays."],
      ["desk", "24/7 front desk", "Reception & concierge ready to help, day or night."],
      ["food", "Food to your room", "Desi, fast food and continental lunch & dinner on request."],
      ["sparkle", "Spotless hygiene", "Daily housekeeping, fresh linen, towels and toiletries."],
      ["tag", "Fair prices", `Rooms from ${P.oneBedNight} and apartments from ${P.twoBedNight}.`],
    ],
    sections: [
      {
        h2: "Best hotel in Bahria Town for every kind of stay",
        paras: [
          `Whether you need a [room for one day](${D1}), a [private room for a married couple or honeymoon](${CPL}), a family apartment or a [furnished flat for a month](${MON}), Grand Empire has an option — all under one roof, with the same standard of service.`,
        ],
        list: [
          `1 bed room — from ${P.oneBedNight} per night`,
          `2 bed apartment — from ${P.twoBedNight} per night`,
          `1 bed monthly — from ${P.oneBedMonth}`,
          `2 bed monthly — from ${P.twoBedMonth}`,
        ],
      },
      {
        h2: "How we compare with other hotels in Bahria Town",
        paras: [
          "Many hotels in Bahria Town look similar online. The difference shows up after check-in: does the power stay on? Is breakfast actually included? Can you get food at night? Is someone at reception at 2 AM? At Grand Empire the answer to all of these is yes.",
          `Compare our [rooms and rates](${RATES}) with any hotel in Phase 4, Phase 7 or Phase 8 — we are confident you will find better value.`,
        ],
      },
      {
        h2: "Best hotel near Islamabad",
        paras: [
          "Bahria Town Rawalpindi is a short drive from Islamabad, which is why many visitors searching for the **best hotels in Islamabad** stay with us instead: lower prices, a secure gated community and easy access via the Islamabad Expressway.",
        ],
      },
    ],
    faqs: [
      ["Which is the best hotel in Bahria Town Rawalpindi?", `Grand Empire Hotel & Apartments in Phase 4 Civic Center is rated 5.0 on Google, with luxury rooms from ${P.oneBedNight}, free breakfast, 24/7 electricity and a 24/7 front desk.`],
      ["What is the best area to stay in Bahria Town Rawalpindi?", "The Phase 4 Civic Center is the most convenient area — restaurants, banks, shops and transport are all within walking distance."],
      ["Does the best hotel in Bahria Town include breakfast?", "At Grand Empire, yes — complimentary breakfast and welcome tea are included with every daily stay."],
      ["How do I book the best hotel in Bahria Town?", `Use the booking form on this page or call / WhatsApp ${PHONE_DISPLAY}. Same-day bookings are welcome.`],
    ],
    tags: ["Best hotel in Bahria Town Rawalpindi", "Best hotel in Phase 4 Bahria Town", "Top hotels Bahria Town", "Best hotels in Rawalpindi", "Best hotel near Islamabad", "Highly rated hotel Bahria Town", "Best hotel for one day Bahria Town"],
    posts: ["affordable-hotel-bahria-town-phase-4-rawalpindi", "hotel-vs-airbnb-bahria-town-rawalpindi", "stay-in-bahria-town-rawalpindi-when-visiting-islamabad"],
  },
  {
    slug: "luxury-hotel-in-bahria-town-rawalpindi",
    label: "Luxury Hotel in Bahria Town",
    title: "Luxury Hotel in Bahria Town Rawalpindi | 5-Star Style Rooms",
    description: `5-star style luxury hotel in Bahria Town Phase 4 Rawalpindi: king beds, rainfall showers, VIP apartments & in-room dining from ${P.oneBedNight}/night.`,
    keywords: [
      "luxury hotel in bahria town rawalpindi", "luxury hotel in phase 4 bahria town", "5 star hotel in phase 4 bahria town",
      "5 star hotel in bahria town rawalpindi", "4 star hotel near phase 4 bahria town", "luxury hotel in phase 4 bahria town for one day",
      "vip service apartments bahria town", "luxury apartments for rent bahria town", "premium hotel rawalpindi",
    ],
    h1: "Luxury Hotel in Bahria Town Rawalpindi — 5-Star Style, Fair Price",
    lead: `VIP service apartments and elegant rooms with tufted king beds, ambient lighting and modern washrooms — 5-star style comfort in Phase 4 from ${P.oneBedNight} per night.`,
    eyebrow: "VIP Service Apartments · Phase 4",
    image: IMG.bedRed,
    sideImage: IMG.bedWash,
    sideAlt: "Luxury hotel room with marble washroom in Bahria Town Phase 4",
    introTitle: "Luxury without the 5-star price tag",
    intro: [
      "Searching for a **5 star hotel in Phase 4 Bahria Town** usually means one thing: you want to feel looked after. Plush beds, beautiful interiors, a spotless bathroom, quiet rooms and staff who respond quickly.",
      `Grand Empire delivers that experience as a boutique hotel — which means you get **luxury rooms at a fraction of large-hotel prices**: from ${P.oneBedNight} per night with breakfast, or ${P.twoBedNight} for a full 2-bed VIP apartment.`,
    ],
    highlightsTitle: "Luxury touches in every room",
    highlights: [
      ["bed", "Tufted king beds", "Velvet and leather tufted headboards with premium white linen."],
      ["shower", "Modern washrooms", "Glass showers, marble-look tiles and quality fittings."],
      ["sparkle", "Designer interiors", "Ambient cove lighting, framed art and warm décor."],
      ["kitchen", "VIP apartments", "Private lounge with velvet sofas and fitted kitchen."],
      ["tv", "Smart TV & WiFi", "Stream and work with fast internet."],
      ["food", "In-room dining", "Desi, continental & fast food served to your room."],
      ["desk", "Concierge desk", "24/7 reception and concierge assistance."],
      ["lock", "Privacy & security", "CCTV-monitored building in a gated community."],
    ],
    sections: [
      {
        h2: "VIP service apartments in Bahria Town",
        paras: [
          `Our 2-bed VIP apartments are the most spacious luxury option in the Civic Center: two bedrooms, a living lounge with Smart TV and a fully fitted kitchen with fridge and microwave. Perfect for families and executives — see [2 bed apartment rates](${RATES}).`,
        ],
      },
      {
        h2: "Luxury hotel in Phase 4 Bahria Town for one day",
        paras: [
          `Want a taste of luxury for just one night? Book a [luxury room for one day](${D1}) — check in from ${CHECK_IN}, enjoy room service dinner and breakfast in the morning, check out by ${CHECK_OUT}.`,
        ],
      },
      {
        h2: "Luxury honeymoon rooms",
        paras: [
          `Our most elegant rooms — like the red velvet suite — are a favourite for newlyweds. Explore [honeymoon & couple rooms](${CPL}).`,
        ],
      },
    ],
    faqs: [
      ["Is there a 5 star hotel in Phase 4 Bahria Town?", `Grand Empire offers 5-star style luxury — tufted king beds, modern washrooms, VIP apartments and in-room dining — at boutique prices from ${P.oneBedNight} per night.`],
      ["Do you have luxury apartments for rent per day?", `Yes, our 2-bed VIP service apartments are available from ${P.twoBedNight} per night.`],
      ["Is breakfast included in luxury rooms?", "Yes, complimentary breakfast and welcome tea are included on all daily stays."],
    ],
    tags: ["Luxury hotel Bahria Town Rawalpindi", "5 star hotel Phase 4 Bahria Town", "4 star hotel near Phase 4", "VIP service apartments", "Luxury apartments for rent Bahria Town", "Premium hotel Rawalpindi"],
    posts: ["honeymoon-couple-stay-bahria-town-rawalpindi", "affordable-hotel-bahria-town-phase-4-rawalpindi", "hotel-in-bahria-town-for-one-day-price"],
  },
  {
    slug: "affordable-hotel-in-bahria-town-rawalpindi",
    label: "Affordable Hotel in Bahria Town",
    title: `Affordable Hotel in Bahria Town Rawalpindi | From ${P.oneBedNight}`,
    description: `Affordable hotel in Bahria Town Phase 4 Rawalpindi: short stay from ${P.oneBedShort}, full night ${P.oneBedNight} with breakfast, WiFi & 24/7 power. No hidden fees.`,
    keywords: [
      "affordable hotel in bahria town rawalpindi", "cheap hotel in phase 4 bahria town", "budget hotel in phase 4 bahria town",
      "cheap hotel in bahria town rawalpindi", "low price hotel rawalpindi", "cheap hotel in phase 4 bahria town for one day",
      "budget hotel in phase 4 bahria town for one day", "hotels in islamabad cheap rates", "cheap places to short stay in bahria town",
      "cheap rooms bahria town rawalpindi",
    ],
    h1: "Affordable Hotel in Bahria Town Rawalpindi — Quality on a Budget",
    lead: `Clean, comfortable rooms in Phase 4 Civic Center from just ${P.oneBedNight} per night — with breakfast, WiFi, 24/7 electricity and water all included. No hidden charges.`,
    eyebrow: "Budget-friendly · Breakfast included",
    image: IMG.bedDeluxe,
    sideImage: IMG.bedDoor,
    sideAlt: "Affordable clean hotel room in Bahria Town Phase 4 Rawalpindi",
    introTitle: "Affordable doesn't have to mean basic",
    intro: [
      "Many guests search for a **cheap hotel in Phase 4 Bahria Town** and end up in rooms with no backup power, poor cleanliness or surprise charges. We believe an **affordable hotel** should still be clean, safe and comfortable.",
      `At Grand Empire, ${P.oneBedNight} per night gets you a private room with an attached washroom, fresh towels, shampoo and handwash, WiFi, TV, 24/7 electricity and water — plus a complimentary breakfast.`,
    ],
    highlightsTitle: "Everything included in the price",
    highlights: [
      ["coffee", "Free breakfast", "Start the day without extra spending."],
      ["wifi", "Free WiFi", "High-speed internet at no extra cost."],
      ["bolt", "24/7 electricity", "Backup power included — no generator fee."],
      ["drop", "24/7 water", "Hot & cold water round the clock."],
      ["towel", "Towels & toiletries", "Shampoo, handwash and fresh towels."],
      ["shower", "Attached washroom", "Private washroom in every room."],
      ["sparkle", "Daily cleaning", "Clean rooms and fresh linen."],
      ["tag", "No hidden charges", "The price you're quoted is the price you pay."],
    ],
    sections: [
      {
        h2: "Budget hotel prices in Bahria Town Phase 4",
        paras: ["Here are our starting rates — compare them with any budget hotel in Bahria Town:"],
        list: [
          `Short stay (${SHORT_HOURS}): ${P.oneBedShort} for a 1 bed room, ${P.twoBedShort} for a 2 bed apartment`,
          `1 bed room for one night: ${P.oneBedNight} with breakfast`,
          `2 bed apartment for families: from ${P.twoBedNight} (cheaper than two hotel rooms)`,
          "Weekly stays: discounted nightly rate on request",
          `Monthly: from ${P.oneBedMonth} with all bills included`,
        ],
      },
      {
        h2: "Save more on longer stays",
        paras: [
          `Staying a week or longer? Ask for our weekly rate, or switch to a [furnished flat on monthly rent](${MON}) — kitchen, internet and utilities included.`,
        ],
      },
      {
        h2: "Affordable alternative to Islamabad hotels",
        paras: [
          `Guests looking for **hotels in Islamabad at cheap rates** often find Bahria Town Rawalpindi better value. Read [why travellers stay in Bahria Town when visiting Islamabad](/blog/stay-in-bahria-town-rawalpindi-when-visiting-islamabad).`,
        ],
      },
    ],
    faqs: [
      ["What is the cheapest room at Grand Empire Hotel?", `A short stay of ${SHORT_HOURS} in a 1-bed room costs ${P.oneBedShort}. A full night is ${P.oneBedNight}, including breakfast, WiFi and 24/7 electricity.`],
      ["Are there hidden charges?", "No. Breakfast, WiFi, electricity, water, towels and toiletries are included. Only lunch/dinner on request is charged separately."],
      ["Is an affordable hotel safe for families?", "Yes — we are in the gated Bahria Town community with CCTV and a 24/7 front desk."],
    ],
    tags: ["Affordable hotel Bahria Town Rawalpindi", "Cheap hotel Phase 4 Bahria Town", "Budget hotel Phase 4 Bahria Town", "Low price hotel Rawalpindi", "Hotels in Islamabad cheap rates", "Cheap short stay Bahria Town"],
    posts: ["affordable-hotel-bahria-town-phase-4-rawalpindi", "hotel-in-bahria-town-for-one-day-price", "furnished-apartments-monthly-rent-bahria-town"],
  },
  {
    slug: "family-hotel-in-bahria-town-rawalpindi",
    label: "Family Hotel & Guest House",
    title: "Family Hotel & Guest House in Bahria Town Rawalpindi",
    description: `Family hotel & guest house alternative in Bahria Town Phase 4 Rawalpindi: 2-bed apartments with kitchen & lounge, ${P.twoBedNight}/night with breakfast.`,
    keywords: [
      "family hotel in bahria town rawalpindi", "guest house in bahria town rawalpindi", "guest house in bahria town phase 8 rawalpindi",
      "guest house in bahria town islamabad", "hotels in islamabad cheap rates for family", "family apartment for rent per day bahria town",
      "2 bedroom apartment for rent per day bahria town", "rooms for couples in bahria town rawalpindi for family",
    ],
    h1: "Family Hotel & Guest House in Bahria Town Rawalpindi",
    lead: `Spacious 2-bed apartments with a lounge and kitchen — more room than a guest house, with hotel services. From ${P.twoBedNight} per night, breakfast included.`,
    eyebrow: "Families · Groups · Wedding guests",
    image: IMG.living,
    sideImage: IMG.lounge,
    sideAlt: "Family apartment lounge with kitchen in Bahria Town Rawalpindi",
    introTitle: "Room for the whole family",
    intro: [
      "Travelling with family to Rawalpindi or Islamabad — for a wedding, a visit or a holiday? Booking several hotel rooms gets expensive fast, and many **guest houses in Bahria Town** don't offer reliable power, cleaning or food.",
      `Our **2-bed family apartments** solve this: two private bedrooms, a living lounge with Smart TV and a fitted kitchen, plus hotel services like breakfast, housekeeping and a 24/7 front desk — from ${P.twoBedNight} per night.`,
    ],
    highlightsTitle: "Why families choose Grand Empire",
    highlights: [
      ["users", "Space for everyone", "Two bedrooms plus a shared lounge."],
      ["kitchen", "Fitted kitchen", "Fridge, microwave and stove for kids' meals."],
      ["coffee", "Breakfast included", "Complimentary breakfast for daily stays."],
      ["lock", "Safe & gated", "Secure Bahria Town community, CCTV, 24/7 reception."],
      ["food", "Food delivery", "Order desi, fast food or continental to your apartment."],
      ["bolt", "24/7 power & water", "Comfort for kids and elders all day."],
      ["pin", "Civic Center", "Parks, food and shops nearby."],
      ["calendar", "Flexible stays", "Nightly, weekly or monthly."],
    ],
    sections: [
      {
        h2: "Better than a guest house",
        paras: [
          "A guest house gives you a room; we give you a home with hotel service. Fresh linen and towels, daily cleaning, a front desk that never closes and food on request — all included in a fair family price.",
        ],
      },
      {
        h2: "Hotel for families visiting Islamabad",
        paras: [
          `Families searching for **hotels in Islamabad at cheap rates for family** often find our 2-bed apartments in Bahria Town better value than two separate hotel rooms in the capital. See all [rooms and rates](${RATES}).`,
        ],
      },
      {
        h2: "Staying longer?",
        paras: [`Relocating or staying for months? Our [furnished family apartments on monthly rent](${MON}) start from ${P.twoBedMonth} with bills included.`],
      },
    ],
    faqs: [
      ["Do you have family rooms in Bahria Town Rawalpindi?", `Yes — 2-bed apartments with lounge and kitchen from ${P.twoBedNight} per night, ideal for families.`],
      ["Is Grand Empire a good alternative to a guest house?", "Yes. You get apartment space plus hotel services: breakfast, housekeeping, 24/7 reception and food delivery."],
      ["Can I cook in the family apartment?", "Yes, 2-bed apartments have a fitted kitchen with fridge, microwave and stove."],
    ],
    tags: ["Family hotel Bahria Town Rawalpindi", "Guest house Bahria Town", "Guest house Bahria Town Phase 8", "Guest house Bahria Town Islamabad", "Hotels in Islamabad for family", "Family apartment per day Bahria Town"],
    posts: ["stay-in-bahria-town-rawalpindi-when-visiting-islamabad", "hotel-vs-airbnb-bahria-town-rawalpindi", "furnished-apartments-monthly-rent-bahria-town"],
  },
  {
    slug: "hotels-in-bahria-town-phase-4-rawalpindi",
    label: "Hotels in Bahria Town Phase 4",
    title: "Hotels in Bahria Town Phase 4 Rawalpindi | Civic Center",
    description: `Hotel in Bahria Town Phase 4 Civic Center, Rawalpindi (Plot 23, Street 4). Hourly from ${P.oneBedShort}, nights from ${P.oneBedNight}, free breakfast, 24/7 desk.`,
    keywords: [
      "hotels in bahria town phase 4 rawalpindi", "hotel in bahria town phase 4", "hotel in bahria civic center",
      "hotel near phase 4 bahria town", "hotel in bahria town rawalpindi", "hotel near bahria town phase 3", "hotel near bahria town phase 5",
      "hotel near bahria town phase 7", "hotel near bahria town phase 8",
    ],
    h1: "Hotel in Bahria Town Phase 4 Civic Center, Rawalpindi",
    lead: `Right inside the Civic Center at Plot 23, Street 4 — the most convenient hotel address in Bahria Town. Rooms from ${P.oneBedNight} with breakfast.`,
    eyebrow: "Plot 23 · Street 4 · Civic Center",
    image: IMG.front,
    sideImage: IMG.lobby,
    sideAlt: "Hotel lobby in Bahria Civic Center, Phase 4 Rawalpindi",
    introTitle: "Stay in the heart of Bahria Town",
    intro: [
      "Phase 4 is the commercial heart of Bahria Town Rawalpindi. Staying in the **Civic Center** means restaurants, cafés, banks, pharmacies and shopping are just steps away — no need for a car to grab dinner or run errands.",
      "Grand Empire Hotel's building is easy to find: look for the gold crown sign at **Plot 23, Street 4**, with the Urban Café on the rooftop.",
    ],
    highlightsTitle: "Phase 4 location advantages",
    highlights: [
      ["pin", "Walk everywhere", "Food, banks, shops and pharmacies nearby."],
      ["calendar", "Easy for events", "Close to Bahria Town wedding venues and offices."],
      ["home", "Central to all phases", "Convenient for guests visiting Phases 1–8."],
      ["arrow", "Quick routes out", "Islamabad Expressway and GT Road access."],
    ],
    sections: [
      {
        h2: "A hotel for guests visiting every phase",
        paras: [
          "From Phase 4 you are well placed for the rest of Bahria Town — Phases 1 to 6 nearby, and Phases 7 and 8 a short drive away — as well as DHA and the Islamabad Expressway. Many guests searching for a hotel or guest house in Bahria Town Phase 7 or Phase 8 choose us for our central Civic Center address.",
        ],
      },
      {
        h2: "Rooms and apartments in Phase 4",
        paras: [`Choose from ${ONE_BED_ROOMS} elegant 1-bed rooms or spacious 2-bed apartments — for a [day](${D1}), a [couple's stay](${CPL}) or a [month](${MON}).`],
        list: [`1 bed: from ${P.oneBedNight} / night`, `2 bed: from ${P.twoBedNight} / night`, `Monthly: from ${P.oneBedMonth}`],
      },
      {
        h2: "Food in Phase 4",
        paras: [`Besides the Civic Center's many restaurants, our [in-room dining](${FOOD}) brings desi, fast food and continental meals straight to your door.`],
      },
    ],
    faqs: [
      ["Where exactly is Grand Empire Hotel in Phase 4?", "Plot No. 23, Apt 1, Street 4, Civic Center, Bahria Town Phase 4, Rawalpindi 46000."],
      ["Is Phase 4 a good place to stay in Bahria Town?", "Yes — the Civic Center is the most central and convenient area, with food, banks and shopping within walking distance."],
      ["Is the hotel close to Bahria Town Phase 7 and 8?", "Phases 7 and 8 are a short drive from Phase 4, and Phases 1–6 are nearby."],
    ],
    tags: ["Hotels in Bahria Town Phase 4", "Hotel in Bahria Civic Center", "Hotel near Phase 4 Bahria Town", "Hotel near Bahria Town Phase 7", "Hotel near Bahria Town Phase 8", "Hotel in Bahria Town Rawalpindi"],
    posts: ["affordable-hotel-bahria-town-phase-4-rawalpindi", "stay-in-bahria-town-rawalpindi-when-visiting-islamabad", "hotel-in-bahria-town-for-one-day-price"],
  },
  {
    slug: "hotel-in-rawalpindi-near-islamabad",
    label: "Hotel in Rawalpindi near Islamabad",
    title: "Hotel in Rawalpindi near Islamabad | Bahria Town Phase 4",
    description: `Hotel in Rawalpindi near Islamabad: Grand Empire, Bahria Town Phase 4. Better value than Islamabad, rooms from ${P.oneBedNight} with breakfast, gated area.`,
    keywords: [
      "hotel in rawalpindi", "hotel in rawalpindi near islamabad", "hotels in islamabad", "hotel in islamabad",
      "hotels in bahria town islamabad", "hotels in islamabad for night stay", "best hotels in islamabad",
      "hotels in islamabad near centaurus mall", "hotels in islamabad near margalla hills", "hotel near islamabad expressway",
    ],
    h1: "Hotel in Rawalpindi near Islamabad — Better Value, Easy Access",
    lead: `Stay in secure Bahria Town Rawalpindi with easy routes to Islamabad via the Expressway. Luxury rooms from ${P.oneBedNight} — often far less than comparable Islamabad hotels.`,
    eyebrow: "Rawalpindi · Close to Islamabad",
    image: IMG.lounge,
    sideImage: IMG.front,
    sideAlt: "Grand Empire Hotel building, hotel in Rawalpindi near Islamabad",
    introTitle: "Visiting Islamabad? Stay smart in Bahria Town",
    intro: [
      "Hotel prices in central Islamabad can be steep, especially for families or longer stays. Bahria Town Rawalpindi — sometimes called Bahria Town Islamabad — sits close to the capital along the **Islamabad Expressway** and offers far better value.",
      `At Grand Empire you get luxury interiors, free breakfast, 24/7 power and a secure gated community, from ${P.oneBedNight} per night. Drive into Islamabad for meetings, shopping at Centaurus Mall or a trip to the Margalla Hills, then come back to a quiet, comfortable room.`,
    ],
    highlightsTitle: "Why stay in Bahria Town instead",
    highlights: [
      ["tag", "Lower prices", "More room and comfort for your budget."],
      ["lock", "Secure community", "Gated Bahria Town with 24/7 security."],
      ["arrow", "Expressway access", "Convenient routes to Islamabad."],
      ["coffee", "Breakfast included", "Complimentary breakfast every morning."],
    ],
    sections: [
      {
        h2: "Hotel for a night stay near Islamabad",
        paras: [`Need a hotel for one night on your way to or from Islamabad? Book a [room for one day](${D1}) — check in from ${CHECK_IN} and leave refreshed after breakfast.`],
      },
      {
        h2: "Business travellers and long stays",
        paras: [`Working in Islamabad or Rawalpindi for weeks? Our [furnished monthly apartments](${MON}) include fast internet, a kitchen and 24/7 power.`],
      },
    ],
    faqs: [
      ["Is Bahria Town Rawalpindi close to Islamabad?", "Yes, it lies near Islamabad with convenient access via the Islamabad Expressway."],
      ["Is it cheaper to stay in Bahria Town than Islamabad?", `Generally yes — Grand Empire rooms start from ${P.oneBedNight} per night with breakfast, and 2-bed apartments from ${P.twoBedNight}.`],
      ["Is Bahria Town Islamabad the same as Bahria Town Rawalpindi?", "Bahria Town Phases 1–8 are commonly called Bahria Town Islamabad/Rawalpindi; our hotel is in Phase 4 Civic Center, Rawalpindi."],
    ],
    tags: ["Hotel in Rawalpindi", "Hotel near Islamabad", "Hotels in Islamabad", "Hotels in Bahria Town Islamabad", "Hotels in Islamabad for night stay", "Hotel near Islamabad Expressway"],
    posts: ["stay-in-bahria-town-rawalpindi-when-visiting-islamabad", "hotel-in-bahria-town-for-one-day-price", "affordable-hotel-bahria-town-phase-4-rawalpindi"],
  },
  // ---------------- Stay-type pages (hourly, night, weekly, 2-bed per day, parking, business) ----------------
  {
    slug: "hourly-rooms-bahria-town-rawalpindi",
    label: "Hourly Rooms in Bahria Town",
    title: `Hourly Rooms in Bahria Town Rawalpindi | 1–3 Hrs ${P.oneBedShort}`,
    description: `Hourly rooms in Bahria Town Phase 4 Rawalpindi: 1–3 hour short stay from ${P.oneBedShort} (1 bed) or ${P.twoBedShort} (2 bed). AC, attached bath, 24/7 desk.`,
    keywords: [
      "hourly rooms bahria town rawalpindi", "hotel room for few hours rawalpindi", "short stay hotel bahria town",
      "hourly hotel rawalpindi", "room for 2 hours bahria town", "room for 3 hours rawalpindi", "day use hotel rawalpindi",
      "hotel room per hour islamabad", "cheap places to short stay in bahria town", "short stay bahria town rawalpindi",
    ],
    h1: "Hourly Rooms in Bahria Town Rawalpindi — Short Stay 1 to 3 Hours",
    lead: `Need a clean, private room for just a few hours? Book a short stay of ${SHORT_HOURS} in Phase 4 Civic Center — 1 bed room ${P.oneBedShort}, 2 bed apartment ${P.twoBedShort}.`,
    eyebrow: `Short stay · ${SHORT_HOURS} · Phase 4`,
    image: IMG.bedWash,
    sideImage: IMG.bedDoor,
    sideAlt: "Hourly room for short stay in Bahria Town Phase 4 Rawalpindi",
    badges: [`${SHORT_HOURS} from ${P.oneBedShort}`, "AC & Attached Bath"],
    introTitle: "Pay for the hours you need, not a full night",
    intro: [
      "Travelling between cities, waiting for a late flight, attending a wedding or meeting in Bahria Town, or simply need to rest and freshen up? A full night's booking is often more than you need. Our **hourly rooms in Bahria Town Rawalpindi** let you book a private room for **1 to 3 hours**.",
      `Every short stay gets the same clean, air-conditioned room as our overnight guests: an attached bathroom with hot water, fresh towels and toiletries, fast WiFi and a Smart TV — for a fixed ${P.oneBedShort} (1 bed room) or ${P.twoBedShort} (2 bed apartment).`,
    ],
    highlightsTitle: "Why book an hourly room with us",
    highlights: [
      ["clock", `${SHORT_HOURS} stay`, "Rest, freshen up or work between appointments."],
      ["tag", "Fixed, clear price", `${P.oneBedShort} for a 1 bed room, ${P.twoBedShort} for a 2 bed apartment.`],
      ["snow", "AC & heating", "A comfortable room in summer and winter."],
      ["shower", "Attached bathroom", "Hot shower, fresh towels and toiletries."],
      ["wifi", "Fast WiFi & Smart TV", "Catch up on work or relax."],
      ["food", "Food to your room", "Order tea, snacks or a meal during your stay."],
      ["car", "Parking", "Parking available for guests arriving by car."],
      ["shield", "Private & secure", "CCTV, 24/7 front desk, gated Bahria Town."],
    ],
    pricesTitle: "Hourly / short stay rates",
    prices: [
      { label: `Short stay · ${SHORT_HOURS}`, title: "1 Bed Room", amount: P.oneBedShort, per: `per stay (${SHORT_HOURS})`, items: ["King bed, AC / heater", "Attached bathroom", "WiFi & Smart TV"], cta: "Book 1 bed short stay" },
      { label: `Short stay · ${SHORT_HOURS}`, title: "2 Bed Apartment", amount: P.twoBedShort, per: `per stay (${SHORT_HOURS})`, items: ["2 bedrooms + lounge", "Kitchen & fridge", "Best for families / groups"], featured: true, ribbon: "More space", cta: "Book 2 bed short stay" },
      { label: "Upgrade", title: "Full Night", amount: P.oneBedNight, per: "per night (1 bed)", items: [`Check-in ${CHECK_IN}, check-out ${CHECK_OUT}`, "Breakfast included", `2 bed apartment ${P.twoBedNight}`], href: "/night-stay-hotel-bahria-town-rawalpindi", cta: "See night stay" },
    ],
    sections: [
      {
        h2: "Who books hourly rooms in Bahria Town?",
        paras: ["Short stays are popular with guests who need privacy and comfort for a few hours rather than a whole night:"],
        list: [
          "Travellers resting between long road journeys or before a late flight",
          "Wedding guests who need a place to change and get ready in Bahria Town",
          "Business visitors who need a quiet room to work, take calls or freshen up",
          "Families waiting for check-in elsewhere or visiting relatives in Bahria Town",
        ],
      },
      {
        h2: "Short stay vs full night",
        paras: [
          `A short stay of ${SHORT_HOURS} costs ${P.oneBedShort} (1 bed) or ${P.twoBedShort} (2 bed). If you decide to stay longer, the front desk can switch you to a [full night stay](/night-stay-hotel-bahria-town-rawalpindi) from ${P.oneBedNight} with breakfast included. Compare every option on [rooms and rates](${RATES}).`,
        ],
      },
      {
        h2: "How to book an hourly room",
        paras: [`Choose “Short Stay” in the booking form on this page, pick your date and arrival time, and send it on WhatsApp — or call ${PHONE_DISPLAY}. A valid original CNIC is required for every adult guest at check-in.`],
      },
    ],
    faqs: [
      ["How much is an hourly room in Bahria Town Rawalpindi?", `A short stay of ${SHORT_HOURS} costs ${P.oneBedShort} for a 1 bed room and ${P.twoBedShort} for a 2 bed apartment at Grand Empire Hotel, Phase 4.`],
      ["Can I book a room for just 2 or 3 hours?", `Yes. Short stays cover ${SHORT_HOURS}. Call or WhatsApp ${PHONE_DISPLAY} with your arrival time.`],
      ["What if I want to stay longer than 3 hours?", `Tell the front desk — you can extend or switch to a full night stay from ${P.oneBedNight}, which includes breakfast.`],
      ["Is a CNIC required for a short stay?", "Yes. A valid original CNIC (or passport for foreign guests) is required for every adult guest."],
      ["Do hourly rooms have AC and an attached bathroom?", "Yes. Every room has AC / heating, an attached bathroom with hot water, towels, toiletries, WiFi and a Smart TV."],
    ],
    tags: ["Hourly rooms Bahria Town", "Room for few hours Rawalpindi", "Short stay hotel Bahria Town", "Day use hotel Rawalpindi", "Room for 3 hours", "Hourly hotel Islamabad"],
    posts: ["hotel-in-bahria-town-for-one-day-price", "affordable-hotel-bahria-town-phase-4-rawalpindi", "hotel-vs-airbnb-bahria-town-rawalpindi"],
  },
  {
    slug: "night-stay-hotel-bahria-town-rawalpindi",
    label: "Night Stay Hotel Bahria Town",
    title: `Night Stay Hotel in Bahria Town Rawalpindi | From ${P.oneBedNight}`,
    description: `Full night stay in Bahria Town Phase 4 Rawalpindi: 1 bed ${P.oneBedNight}, 2 bed apartment ${P.twoBedNight}, breakfast included. Late check-in & 24/7 front desk.`,
    keywords: [
      "night stay hotel bahria town rawalpindi", "hotels in islamabad for night stay", "hotel for one night rawalpindi",
      "overnight stay bahria town", "late night check in hotel rawalpindi", "hotel for night stay near islamabad",
      "full night room bahria town", "hotel in phase 4 bahria town for one night",
    ],
    h1: "Night Stay Hotel in Bahria Town Rawalpindi — Full Night with Breakfast",
    lead: `Check in from ${CHECK_IN}, sleep well in a quiet AC room and leave after breakfast. Full night from ${P.oneBedNight} (1 bed) or ${P.twoBedNight} (2 bed apartment).`,
    eyebrow: "Overnight · Breakfast included",
    image: IMG.bedLux,
    sideImage: IMG.reception,
    sideAlt: "24/7 reception for night stay check-in at Grand Empire Hotel Bahria Town",
    badges: ["Breakfast Included", "Late Check-in 24/7"],
    introTitle: "A proper night's sleep in Bahria Town",
    intro: [
      "Arriving late from Lahore, Peshawar or the airport? Staying over after a wedding in Bahria Town? Our **night stay rooms** are made for deep, comfortable sleep: premium bedding, blackout curtains, AC or heating, and a quiet building in the gated Bahria Town community.",
      `A full night costs ${P.oneBedNight} for a 1 bed room or ${P.twoBedNight} for a 2 bed apartment — and every night stay includes a **complimentary breakfast** and welcome tea. Our front desk is open 24/7, so late-night check-in is never a problem.`,
    ],
    highlightsTitle: "Included with your night stay",
    highlights: [
      ["coffee", "Breakfast & welcome tea", "Complimentary with every night stay."],
      ["moon", "Quiet, dark rooms", "Blackout curtains and calm surroundings."],
      ["bed", "Premium bedding", "King beds, fresh linen, soft & firm pillows."],
      ["snow", "AC & heater", "The right temperature, all year."],
      ["drop", "Hot water 24/7", "Instant warm water and good pressure."],
      ["desk", "24/7 front desk", "Check in at any hour of the night."],
      ["car", "Parking", "Parking available for guests arriving by car."],
      ["bolt", "No load-shedding", "Power backup keeps AC and lights on."],
    ],
    pricesTitle: "Night stay rates",
    prices: [
      { label: "Full night", title: "1 Bed Room", amount: P.oneBedNight, per: "per night", items: ["Breakfast & welcome tea", "AC / heater, attached bath", "WiFi & Smart TV"], cta: "Book 1 bed night" },
      { label: "Full night", title: "2 Bed Apartment", amount: P.twoBedNight, per: "per night", items: ["2 bedrooms + lounge", "Kitchen with fridge & utensils", "Breakfast included"], featured: true, ribbon: "Families", cta: "Book 2 bed night" },
      { label: `Only need ${SHORT_HOURS}?`, title: "Short Stay", amount: P.oneBedShort, per: `1 bed · ${SHORT_HOURS}`, items: [`2 bed short stay ${P.twoBedShort}`, "Same clean rooms", "No breakfast"], href: "/hourly-rooms-bahria-town-rawalpindi", cta: "See hourly rooms" },
    ],
    sections: [
      {
        h2: "Check-in and check-out times",
        paras: [`Standard check-in is from **${CHECK_IN}** and check-out is by **${CHECK_OUT}**. Arriving late at night? No problem — reception is open 24/7. Early arrivals can ask the front desk about early check-in.`],
      },
      {
        h2: "Hotel for a night stay near Islamabad",
        paras: [`Many guests searching for **hotels in Islamabad for night stay** choose Bahria Town Rawalpindi for better value and easy Expressway access. Read our guide to [staying in Bahria Town when visiting Islamabad](/blog/stay-in-bahria-town-rawalpindi-when-visiting-islamabad), or see [daily rent rooms](${D1}) for longer stays.`],
      },
    ],
    faqs: [
      ["How much is one night at Grand Empire Hotel?", `A full night costs ${P.oneBedNight} for a 1 bed room and ${P.twoBedNight} for a 2 bed apartment, with breakfast included.`],
      ["Can I check in late at night?", "Yes. The front desk is open 24/7, so you can check in at any time."],
      ["What are the check-in and check-out times?", `Check-in from ${CHECK_IN}, check-out by ${CHECK_OUT}.`],
      ["Is breakfast included with a night stay?", "Yes, complimentary breakfast and welcome tea are included with every full night stay."],
    ],
    tags: ["Night stay hotel Bahria Town", "Hotel for one night Rawalpindi", "Hotels in Islamabad for night stay", "Late check-in hotel Rawalpindi", "Overnight stay Bahria Town"],
    posts: ["hotel-in-bahria-town-for-one-day-price", "stay-in-bahria-town-rawalpindi-when-visiting-islamabad", "affordable-hotel-bahria-town-phase-4-rawalpindi"],
  },
  {
    slug: "weekly-rent-rooms-bahria-town-rawalpindi",
    label: "Weekly Rent Rooms Bahria Town",
    title: "Rooms & Apartments for Weekly Rent | Bahria Town Rawalpindi",
    description: `Weekly rent rooms & furnished apartments in Bahria Town Phase 4 Rawalpindi. Discounted rates for 7+ nights, breakfast, housekeeping, WiFi & 24/7 power.`,
    keywords: [
      "weekly rent rooms bahria town rawalpindi", "apartment for rent weekly bahria town", "weekly stay hotel rawalpindi",
      "furnished apartment weekly rent rawalpindi", "room for one week bahria town", "short term rental bahria town",
      "guest house weekly rent bahria town",
    ],
    h1: "Rooms & Furnished Apartments for Weekly Rent in Bahria Town Rawalpindi",
    lead: `Staying 7 nights or more? Get a discounted weekly rate on our 1 bed rooms (normally ${P.oneBedNight}/night) and 2 bed apartments (${P.twoBedNight}/night), with hotel services included.`,
    eyebrow: "7+ nights · Discounted rate",
    image: IMG.living,
    sideImage: IMG.bedDeluxe,
    sideAlt: "Furnished room for weekly rent in Bahria Town Phase 4 Rawalpindi",
    badges: ["Weekly Discount", "Housekeeping Included"],
    introTitle: "Too long for a hotel night, too short for a monthly lease",
    intro: [
      "Projects, medical visits, family events and house-hunting often last a week or two. Paying full nightly rates adds up, but a monthly lease is too long. Our **weekly rent rooms in Bahria Town** sit right in between.",
      "Book 7 nights or more and ask for our **discounted weekly rate**. You keep every hotel service — daily housekeeping, fresh linen, breakfast, 24/7 front desk and power backup — plus a kitchen with fridge and utensils in our 2 bed apartments.",
    ],
    highlightsTitle: "Made for week-long stays",
    highlights: [
      ["tag", "Weekly discount", "Lower nightly rate for 7+ nights."],
      ["sparkle", "Housekeeping", "Clean room and fresh linen."],
      ["fridge", "Fridge & kitchen", "Kitchen with utensils in 2 bed apartments."],
      ["wifi", "Fast WiFi", "Work remotely all week."],
      ["coffee", "Breakfast", "Complimentary breakfast every morning."],
      ["desk", "Desk & iron", "Work desk, chair, iron and ironing board."],
      ["car", "Parking", "Parking available for your car."],
      ["shield", "Safe & secure", "CCTV, room safe and gated community."],
    ],
    pricesTitle: "Weekly stay rates",
    prices: [
      { label: "Weekly · 7+ nights", title: "1 Bed Room", amount: P.oneBedNight, per: "per night — weekly discount on request", items: ["Breakfast daily", "Housekeeping", "AC / heater, WiFi, TV"], href: WHATSAPP_BOOK, external: true, cta: "Ask 1 bed weekly rate" },
      { label: "Weekly · 7+ nights", title: "2 Bed Apartment", amount: P.twoBedNight, per: "per night — weekly discount on request", items: ["2 bedrooms + lounge", "Kitchen & utensils", "Best for families"], featured: true, ribbon: "Best value", href: WHATSAPP_BOOK, external: true, cta: "Ask 2 bed weekly rate" },
      { label: "Staying a month?", title: "Monthly Rent", amount: P.oneBedMonth, per: `per month (2 bed ${P.twoBedMonth})`, items: ["All bills included", "Kitchen & lounge", "TV & internet"], href: MON, cta: "Monthly rent details" },
    ],
    sections: [
      {
        h2: "Weekly rent vs monthly rent",
        paras: [`For stays of 1–3 weeks, weekly rates give you flexibility. Staying a month or more? Our [furnished flats on monthly rent](${MON}) start from ${P.oneBedMonth} with bills included.`],
      },
      {
        h2: "Who stays weekly?",
        paras: ["Engineers and consultants on projects in Rawalpindi and Islamabad, overseas Pakistanis visiting family, families attending weddings, patients and attendants visiting hospitals, and people moving to Bahria Town who need time to find a house."],
      },
    ],
    faqs: [
      ["Do you offer weekly rates in Bahria Town Rawalpindi?", `Yes. For 7+ nights we offer a discounted weekly rate. Call or WhatsApp ${PHONE_DISPLAY} for your exact price.`],
      ["What is included in a weekly stay?", "Breakfast, housekeeping, fresh linen and towels, WiFi, Smart TV, AC / heating, 24/7 electricity and water, and parking."],
      ["Can I cook during a weekly stay?", "Yes — our 2 bed apartments have a kitchen with fridge and utensils."],
    ],
    tags: ["Weekly rent Bahria Town", "Apartment weekly rent Rawalpindi", "Room for one week Bahria Town", "Short term rental Bahria Town", "Weekly stay hotel Rawalpindi"],
    posts: ["furnished-apartments-monthly-rent-bahria-town", "hotel-vs-airbnb-bahria-town-rawalpindi", "affordable-hotel-bahria-town-phase-4-rawalpindi"],
  },
  {
    slug: "2-bed-apartment-daily-rent-bahria-town-rawalpindi",
    label: "2 Bed Apartment per Day",
    title: "2 Bed Apartment for Rent per Day | Bahria Town Rawalpindi",
    description: `2 bed furnished apartment for daily rent in Bahria Town Phase 4: lounge, kitchen & fridge. ${P.twoBedNight}/night with breakfast, or ${P.twoBedShort} for 1–3 hours.`,
    keywords: [
      "2 bed apartment for rent per day bahria town", "2 bedroom apartment for rent per day bahria town",
      "furnished apartment daily rent bahria town", "apartment for rent per day rawalpindi", "family apartment per day bahria town",
      "bahria town apartment for rent per day", "furnished apartments for daily rent in bahria town",
    ],
    h1: "2 Bed Furnished Apartment for Rent per Day in Bahria Town Rawalpindi",
    lead: `Two bedrooms, a lounge with Smart TV and a kitchen with fridge and utensils — ${P.twoBedNight} per night with breakfast, or ${P.twoBedShort} for a short stay of ${SHORT_HOURS}.`,
    eyebrow: "Apartment · Daily rent · Phase 4",
    image: IMG.lounge,
    sideImage: IMG.living,
    sideAlt: "2 bed apartment lounge for daily rent in Bahria Town Rawalpindi",
    badges: ["2 Bedrooms + Lounge", "Kitchen & Fridge"],
    introTitle: "An apartment's space with a hotel's service",
    intro: [
      "Booking two hotel rooms for a family or group is expensive and splits everyone up. A **2 bed apartment for rent per day** keeps you together: two private bedrooms, a shared living lounge with velvet sofas and Smart TV, and a kitchen with fridge, microwave, stove and utensils.",
      `Unlike an Airbnb, you also get hotel services — breakfast, housekeeping, a 24/7 front desk and power backup. Price: **${P.twoBedNight} per night**, or **${P.twoBedShort}** for a short stay of ${SHORT_HOURS}.`,
    ],
    highlightsTitle: "Inside the 2 bed apartment",
    highlights: [
      ["bed", "Two bedrooms", "Premium bedding, AC and heating in each."],
      ["home", "Living lounge", "Sofas and Smart TV with casting."],
      ["kitchen", "Kitchen & utensils", "Stove, microwave, fridge and crockery."],
      ["shower", "Attached bathrooms", "Hot water, towels and toiletries."],
      ["coffee", "Breakfast included", "On every night stay."],
      ["wifi", "Fast WiFi", "For work and streaming."],
      ["car", "Parking", "Parking available for guests."],
      ["shield", "Secure", "CCTV and 24/7 front desk."],
    ],
    pricesTitle: "2 bed apartment rates",
    prices: [
      { label: `Short stay · ${SHORT_HOURS}`, title: "2 Bed — Short Stay", amount: P.twoBedShort, per: `per stay (${SHORT_HOURS})`, items: ["Rest & freshen up", "Whole apartment", "Kitchen access"], cta: "Book short stay" },
      { label: "Full night", title: "2 Bed — Per Day", amount: P.twoBedNight, per: "per night", items: ["Breakfast included", "2 bedrooms + lounge", "Kitchen & fridge"], featured: true, ribbon: "Most booked", cta: "Book apartment per day" },
      { label: "Monthly", title: "2 Bed — Monthly", amount: P.twoBedMonth, per: "per month", items: ["All bills included", "Fully furnished", "TV & internet"], href: MON, cta: "Monthly details" },
    ],
    sections: [
      {
        h2: "Ideal for families, groups and wedding guests",
        paras: [`Families visiting for a wedding, friends travelling together and colleagues on a work trip all save by sharing one apartment. See also our [family hotel page](/family-hotel-in-bahria-town-rawalpindi) and [daily rent rooms](${D1}).`],
      },
      {
        h2: "Better than an Airbnb in Bahria Town",
        paras: ["Same space, but with a front desk that never closes, guaranteed power backup, daily cleaning and breakfast. Read our [hotel vs Airbnb comparison](/blog/hotel-vs-airbnb-bahria-town-rawalpindi)."],
      },
    ],
    faqs: [
      ["How much is a 2 bed apartment per day in Bahria Town?", `${P.twoBedNight} per night including breakfast, or ${P.twoBedShort} for a short stay of ${SHORT_HOURS}.`],
      ["Does the apartment have a kitchen?", "Yes — a kitchen with stove, microwave, fridge and utensils."],
      ["How many guests can stay?", "Two bedrooms plus a lounge — ideal for a family or small group. Tell us your group size when booking."],
    ],
    tags: ["2 bed apartment per day Bahria Town", "Furnished apartment daily rent", "Family apartment Bahria Town", "Apartment for rent per day Rawalpindi", "Bahria Town apartment rent per day"],
    posts: ["hotel-vs-airbnb-bahria-town-rawalpindi", "hotel-in-bahria-town-for-one-day-price", "furnished-apartments-monthly-rent-bahria-town"],
  },
  {
    slug: "hotel-with-parking-bahria-town-rawalpindi",
    label: "Hotel with Parking",
    title: "Hotel with Parking in Bahria Town Rawalpindi | Secure Stay",
    description: `Hotel with parking in Bahria Town Phase 4, Rawalpindi: CCTV, 24/7 front desk, gated community. Nights from ${P.oneBedNight}, short stay ${P.oneBedShort}.`,
    keywords: [
      "hotel with parking bahria town rawalpindi", "hotel with car parking rawalpindi", "secure hotel bahria town",
      "safe hotel for families rawalpindi", "hotel with security bahria town", "road trip hotel rawalpindi",
    ],
    h1: "Hotel with Parking & Security in Bahria Town Rawalpindi",
    lead: `Driving in from another city? Park your car and relax in a secure hotel in Phase 4 Civic Center — CCTV, a 24/7 front desk and the gated Bahria Town community. Rooms from ${P.oneBedNight}.`,
    eyebrow: "Parking · CCTV · Gated community",
    image: IMG.front,
    sideImage: IMG.lobby,
    sideAlt: "Grand Empire Hotel building with parking in Bahria Civic Center",
    badges: ["Parking Available", "CCTV & 24/7 Desk"],
    introTitle: "Arrive by car, stay worry-free",
    intro: [
      "Guests on road trips from Lahore, Peshawar, Murree or KPK always ask two questions: **where do I park, and is it safe?** Grand Empire is in the Civic Center of Bahria Town Phase 4, a gated, guarded community — and parking is available for guests arriving by car.",
      "Inside, the building is monitored by CCTV and our front desk is staffed 24/7. Rooms have a laptop-sized safe for valuables, so you can leave your things and explore Bahria Town or drive into Islamabad.",
    ],
    highlightsTitle: "Security & convenience",
    highlights: [
      ["car", "Parking", "Parking available for guests."],
      ["shield", "CCTV", "Monitored building and entrances."],
      ["desk", "24/7 front desk", "Someone is always at reception."],
      ["lock", "Room safe", "Keep laptops and valuables secure."],
      ["home", "Gated community", "Bahria Town's guarded environment."],
      ["arrow", "Easy routes", "Islamabad Expressway & GT Road access."],
      ["food", "Food to your room", "No need to drive out for dinner."],
      ["users", "Family friendly", "Safe for families and elders."],
    ],
    sections: [
      {
        h2: "Road trip stopover in Rawalpindi",
        paras: [`Break a long drive with a [short stay of ${SHORT_HOURS}](/hourly-rooms-bahria-town-rawalpindi) from ${P.oneBedShort}, or stay the night from ${P.oneBedNight} with breakfast. Directions are on our [contact page](/contact).`],
      },
      {
        h2: "Safe hotel for families",
        paras: [`Families choose us for the secure location and spacious [2 bed apartments](/2-bed-apartment-daily-rent-bahria-town-rawalpindi) with kitchen and lounge.`],
      },
    ],
    faqs: [
      ["Does Grand Empire Hotel have parking?", "Yes, parking is available for guests arriving by car. Let us know your vehicle when booking."],
      ["Is the hotel safe?", "Yes — CCTV, a 24/7 front desk, in-room safes and the gated Bahria Town community."],
      ["Where is the hotel?", "Plot 23, Street 4, Civic Center, Bahria Town Phase 4, Rawalpindi."],
    ],
    tags: ["Hotel with parking Bahria Town", "Hotel with car parking Rawalpindi", "Secure hotel Bahria Town", "Safe hotel for families", "Road trip hotel Rawalpindi"],
    posts: ["stay-in-bahria-town-rawalpindi-when-visiting-islamabad", "affordable-hotel-bahria-town-phase-4-rawalpindi", "hotel-in-bahria-town-for-one-day-price"],
  },
  {
    slug: "business-hotel-bahria-town-rawalpindi",
    label: "Business Hotel Bahria Town",
    title: "Business Hotel in Bahria Town Rawalpindi | WiFi & Work Desk",
    description: `Business hotel in Bahria Town Phase 4 Rawalpindi: fast WiFi, work desk, iron, 24/7 power & room service. Nights from ${P.oneBedNight}, monthly from ${P.oneBedMonth}.`,
    keywords: [
      "business hotel bahria town rawalpindi", "hotel for business travellers rawalpindi", "corporate stay bahria town",
      "hotel with wifi rawalpindi", "hotel near islamabad for business trip", "corporate apartment rawalpindi",
    ],
    h1: "Business Hotel in Bahria Town Rawalpindi — Work, Rest, Repeat",
    lead: `Fast WiFi, a proper work desk, power backup and room service — everything a business traveller needs, from ${P.oneBedNight} per night with breakfast.`,
    eyebrow: "Business & corporate stays",
    image: IMG.reception,
    sideImage: IMG.bedWash,
    sideAlt: "Business hotel room with work desk in Bahria Town Rawalpindi",
    badges: ["Fast WiFi", "24/7 Power Backup"],
    introTitle: "Built for productive trips",
    intro: [
      "On a business trip you need three things: reliable internet, a quiet room to work and sleep, and no surprises. Load-shedding, slow WiFi or a missing iron can ruin an important meeting.",
      "At Grand Empire every room has **fast free WiFi**, a **desk with a comfortable chair**, charging points by the bed and desk, an **iron and ironing board**, and **24/7 power backup** — plus breakfast, room service and a front desk that's always open.",
    ],
    highlightsTitle: "Business essentials",
    highlights: [
      ["wifi", "Fast free WiFi", "Video calls and uploads without lag."],
      ["desk", "Work desk & chair", "A proper place to work."],
      ["plug", "Charging points", "By the bed and desk."],
      ["bolt", "24/7 power", "Never lose a call to load-shedding."],
      ["briefcase", "Iron & board", "Look sharp for meetings."],
      ["coffee", "Kettle, tea & coffee", "Plus breakfast every morning."],
      ["food", "Room service", "Lunch and dinner delivered to your room."],
      ["car", "Parking", "Parking available for your car."],
    ],
    sections: [
      {
        h2: "Corporate and long-term stays",
        paras: [`Teams and consultants on longer assignments can book [weekly](/weekly-rent-rooms-bahria-town-rawalpindi) or [monthly furnished apartments](${MON}) from ${P.oneBedMonth}, bills included.`],
      },
      {
        h2: "Close to Islamabad",
        paras: [`Meetings in Islamabad? Bahria Town has quick access via the Islamabad Expressway. See [hotel in Rawalpindi near Islamabad](/hotel-in-rawalpindi-near-islamabad).`],
      },
    ],
    faqs: [
      ["Is WiFi free?", "Yes, fast WiFi is free in every room and apartment."],
      ["Do rooms have a work desk?", "Yes — a desk with a comfortable chair, plus an iron and ironing board."],
      ["Do you offer corporate or long-stay rates?", `Yes. Weekly and monthly rates are available — call or WhatsApp ${PHONE_DISPLAY}.`],
    ],
    tags: ["Business hotel Bahria Town", "Hotel for business travellers Rawalpindi", "Corporate stay Bahria Town", "Hotel with WiFi Rawalpindi", "Corporate apartment Rawalpindi"],
    posts: ["stay-in-bahria-town-rawalpindi-when-visiting-islamabad", "furnished-apartments-monthly-rent-bahria-town", "hotel-in-bahria-town-for-one-day-price"],
  },
];

export const getLanding = (slug: string) => LANDINGS.find((l) => l.slug === slug);
