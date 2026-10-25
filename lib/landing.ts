import { CHECK_IN, CHECK_OUT, IMG, ONE_BED_ROOMS, P, PHONE_DISPLAY, type Faq, type Feature, type Img } from "./site";

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
    description: `Looking for the best hotel in Bahria Town Rawalpindi? Grand Empire in Phase 4 Civic Center: luxury rooms from ${P.oneBedNight}, free breakfast, 24/7 power & 5.0 Google rating.`,
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
    description: `5-star style luxury hotel in Bahria Town Phase 4 Rawalpindi. Tufted king beds, marble washrooms, VIP apartments & in-room dining — luxury from ${P.oneBedNight}/night.`,
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
    description: `Affordable, budget-friendly hotel in Bahria Town Phase 4 Rawalpindi. Clean rooms from ${P.oneBedNight}/night with free breakfast, WiFi & 24/7 power. No hidden charges.`,
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
          `1 bed room for one day: from ${P.oneBedNight}`,
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
      ["What is the cheapest room at Grand Empire Hotel?", `Our 1-bed room starts from ${P.oneBedNight} per night, including breakfast, WiFi and 24/7 electricity.`],
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
    description: `Family-friendly hotel and guest house alternative in Bahria Town Phase 4 Rawalpindi. 2-bed apartments with kitchen & lounge from ${P.twoBedNight}/night, breakfast included.`,
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
    description: `Hotel in Bahria Town Phase 4 Civic Center, Rawalpindi. Plot 23, Street 4 — rooms from ${P.oneBedNight}, apartments from ${P.twoBedNight}, free breakfast & 24/7 front desk.`,
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
    description: `Hotel in Rawalpindi near Islamabad — Grand Empire in Bahria Town Phase 4. Better value than Islamabad hotels: rooms from ${P.oneBedNight}, free breakfast, secure gated area.`,
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
];

export const getLanding = (slug: string) => LANDINGS.find((l) => l.slug === slug);
