// ============================================================
//  Business details used across the whole site.
//  Change a value here and every page updates automatically.
// ============================================================
// Live domain WITHOUT "www" — Vercel serves grandempirehotel.com and 301-redirects www to it,
// so every canonical tag, sitemap URL and schema link must use this exact address.
export const SITE_URL = "https://grandempirehotel.com";
export const HOTEL_NAME = "Grand Empire Hotel & Apartments";
export const PHONE_DISPLAY = "0319 9193124";
export const PHONE_INTL = "+92 319 9193124";
export const PHONE_TEL = "+923199193124";
export const WHATSAPP = "https://wa.me/923199193124";
export const WHATSAPP_BOOK =
  WHATSAPP + "?text=" + encodeURIComponent("Assalam o Alaikum, I want to book a room at Grand Empire Hotel");
export const ADDRESS = "Plot No. 23, Apt 1, Street 4, Civic Center, Bahria Town Phase 4, Rawalpindi 46000";
export const ADDRESS_SHORT = "Civic Center, Bahria Town Phase 4, Rawalpindi";
export const MAP_EMBED =
  "https://www.google.com/maps?q=Grand+Empire+Hotel+and+Apartments,+Plot+23,+Street+4,+Bahria+Civic+Center,+Bahria+Town+Phase+4,+Rawalpindi&output=embed";
export const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Grand+Empire+Hotel+and+Apartments+Bahria+Civic+Center+Rawalpindi";
export const GOOGLE_RATING = "5.0";
// Opens the hotel on Google Maps, where guests can read and write reviews
export const GOOGLE_REVIEWS = MAP_LINK;

// ---- RATES (PKR). Edit these numbers to change prices on every page. ----
export const RATES = {
  oneBedShort: 2500, // 1 bed room — short stay (1 to 3 hours)
  twoBedShort: 5500, // 2 bed apartment — short stay (1 to 3 hours)
  oneBedNight: 6500, // 1 bed room — full night
  twoBedNight: 14500, // 2 bed apartment — full night
  oneBedMonth: 150000,
  twoBedMonth: 200000,
};
export const SHORT_HOURS = "1–3 hours";
export const pkr = (n: number) => "PKR " + n.toLocaleString("en-US");
export const P = {
  oneBedShort: pkr(RATES.oneBedShort),
  twoBedShort: pkr(RATES.twoBedShort),
  oneBedNight: pkr(RATES.oneBedNight),
  twoBedNight: pkr(RATES.twoBedNight),
  oneBedMonth: pkr(RATES.oneBedMonth),
  twoBedMonth: pkr(RATES.twoBedMonth),
};

// ---- Hotel details / policies (please confirm these) ----
export const ONE_BED_ROOMS = 16;
export const CHECK_IN = "2:00 PM";
export const CHECK_OUT = "12:00 PM";

export const IMG = {
  front: { src: "/images/grand-empire-hotel-front-bahria-town-rawalpindi.webp", w: 681, h: 787 },
  reception: { src: "/images/grand-empire-hotel-reception.webp", w: 1195, h: 896 },
  lobby: { src: "/images/hotel-lobby-bahria-civic-center.webp", w: 1360, h: 1020 },
  lounge: { src: "/images/2-bed-apartment-lounge-bahria-town.webp", w: 1046, h: 710 },
  living: { src: "/images/furnished-apartment-living-room-rawalpindi.webp", w: 1196, h: 896 },
  bedLux: { src: "/images/luxury-bedroom-bahria-town-phase-4.webp", w: 1205, h: 868 },
  bedRed: { src: "/images/honeymoon-suite-bahria-town-rawalpindi.webp", w: 1196, h: 896 },
  bedWash: { src: "/images/room-with-attached-washroom-rawalpindi.webp", w: 1187, h: 880 },
  bedDeluxe: { src: "/images/deluxe-room-bahria-town-rawalpindi.webp", w: 1360, h: 1020 },
  bedDoor: { src: "/images/1-bed-room-daily-rent-bahria-town.webp", w: 765, h: 1020 },
} as const;
export type Img = (typeof IMG)[keyof typeof IMG];

export type IconName =
  | "wifi" | "bolt" | "drop" | "coffee" | "food" | "shower" | "sparkle" | "shield" | "desk" | "towel"
  | "soap" | "tv" | "kitchen" | "bed" | "heart" | "calendar" | "pin" | "phone" | "clock" | "lock" | "bag"
  | "tag" | "menu" | "close" | "chevron" | "home" | "book" | "info" | "star" | "users" | "arrow"
  | "snow" | "flame" | "car" | "fridge" | "plug" | "moon" | "briefcase";

// ---- Navigation ----
export const STAYS = [
  { href: "/hourly-rooms-bahria-town-rawalpindi", label: "Hourly Stay", desc: `${SHORT_HOURS} from ${P.oneBedShort}`, icon: "clock" as IconName },
  { href: "/daily-rent-rooms-bahria-town-rawalpindi", label: "Daily Stay", desc: `Full night from ${P.oneBedNight}, breakfast incl.`, icon: "bed" as IconName },
  { href: "/couple-rooms-bahria-town-rawalpindi", label: "Couples & Honeymoon", desc: "Private rooms for married couples", icon: "heart" as IconName },
  { href: "/weekly-rent-rooms-bahria-town-rawalpindi", label: "Weekly Stay", desc: "7+ nights at a discounted rate", icon: "briefcase" as IconName },
  { href: "/monthly-rent-apartments-bahria-town-rawalpindi", label: "Monthly Rent", desc: `Furnished flats from ${P.oneBedMonth}`, icon: "calendar" as IconName },
];

export const NAV_MAIN = [
  { href: "/", label: "Home" },
  { href: "/rooms-and-rates", label: "Rooms & Rates" },
  { href: "#stays", label: "Stays", children: STAYS },
  { href: "/hotel-with-food-bahria-town-rawalpindi", label: "Dining" },
  { href: "/about", label: "Hotel Details" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Flat list of every main page (footer, sitemap)
export const PAGES = [
  { href: "/", label: "Home" },
  { href: "/rooms-and-rates", label: "Rooms & Rates" },
  ...STAYS.map(({ href, label }) => ({ href, label })),
  { href: "/hotel-with-food-bahria-town-rawalpindi", label: "Food & Dining" },
  { href: "/about", label: "Hotel Details" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact & Booking" },
];

export type Feature = [IconName, string, string];

export const AMENITIES: Feature[] = [
  ["coffee", "Complimentary Breakfast", "Fresh breakfast included with every daily stay."],
  ["coffee", "Welcome Tea", "A warm cup of tea to welcome you on arrival."],
  ["shower", "Attached Washroom", "Private attached bathroom in every room."],
  ["bolt", "24/7 Electricity", "Full power backup, no load-shedding worries."],
  ["drop", "24/7 Water", "Hot and cold running water round the clock."],
  ["wifi", "High-Speed Internet", "Free WiFi for work, streaming and calls."],
  ["towel", "Fresh Towels", "Clean, fresh towels and linen for every guest."],
  ["soap", "Shampoo & Handwash", "Complimentary toiletries in every washroom."],
  ["sparkle", "Spotless Cleanliness", "Daily housekeeping for a neat, fresh room."],
  ["shield", "Hygiene First", "Sanitised rooms, washed linen, safe stay."],
  ["desk", "24/7 Service Desk", "Reception & concierge support any time."],
  ["food", "Food on Request", "Lunch & dinner delivered to your room."],
];

// ---- In-room features (what guests expect), grouped. Confirmed by the hotel. ----
export const ROOM_FEATURES: { title: string; icon: IconName; items: Feature[] }[] = [
  {
    title: "Comfort & Sleep",
    icon: "bed",
    items: [
      ["bed", "Premium Bedding", "King beds, crisp white linen, mattress protector and soft & firm pillows."],
      ["snow", "Air Conditioning", "Quiet AC in every room, easy to adjust for summer nights."],
      ["flame", "Room Heater", "Heating for cold Rawalpindi winters."],
      ["moon", "Blackout & Quiet", "Blackout curtains and calm rooms for deep, undisturbed sleep."],
    ],
  },
  {
    title: "Technology & Connectivity",
    icon: "wifi",
    items: [
      ["wifi", "Fast Free WiFi", "High-speed internet with simple login — work, stream and video call."],
      ["plug", "Charging by the Bed", "Power outlets and USB charging next to the bed and desk."],
      ["tv", "Smart TV with Casting", "Stream Netflix or YouTube from your phone (Chromecast / AirPlay)."],
      ["bolt", "24/7 Power Backup", "No load-shedding — AC, lights and WiFi stay on."],
    ],
  },
  {
    title: "Bathroom",
    icon: "shower",
    items: [
      ["shower", "Attached Bathroom", "Private attached bathroom with rainfall shower in every room."],
      ["drop", "Instant Hot Water", "Warm water round the clock with good pressure."],
      ["soap", "Quality Toiletries", "Shampoo, body wash and handwash provided."],
      ["towel", "Plush Towels & Robe", "Large fresh bath towels and a bathrobe."],
    ],
  },
  {
    title: "Conveniences & Security",
    icon: "shield",
    items: [
      ["fridge", "Fridge & Kitchen Utensils", "Mini-fridge in rooms; apartments have a kitchen with utensils."],
      ["coffee", "Refreshments", "Electric kettle, tea & coffee and free bottled water."],
      ["food", "Room Service Food", "Breakfast, desi, fast food & continental served to your room."],
      ["lock", "Room Safe", "Laptop-sized safe for valuables."],
      ["desk", "Desk, Chair & Iron", "Work desk with a comfortable chair, iron and ironing board."],
      ["car", "Parking", "Parking available for guests arriving by car."],
      ["shield", "Security & CCTV", "CCTV, 24/7 front desk and the gated Bahria Town community."],
      ["sparkle", "Daily Housekeeping", "Clean rooms and fresh linen every day."],
    ],
  },
];

export const AREAS = [
  "Bahria Town Phase 1–8", "Bahria Civic Center", "DHA Phase 1 & 2", "Islamabad Expressway",
  "PWD Housing Society", "Rawalpindi", "Islamabad", "Gulberg Greens",
];

export type Faq = [string, string];

// ---- Structured data (JSON-LD) for Google ----
export const hotelSchema = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LodgingBusiness"],
  "@id": SITE_URL + "/#hotel",
  name: HOTEL_NAME,
  alternateName: ["Grand Empire Hotel", "Grand Empire Apartments Bahria Town"],
  description: `Affordable luxury hotel and furnished service apartments in Civic Center, Bahria Town Phase 4, Rawalpindi. 1-bed rooms from ${P.oneBedNight} and 2-bed apartments from ${P.twoBedNight} per night, daily and monthly rent, complimentary breakfast and food delivered to your room.`,
  url: SITE_URL + "/",
  logo: SITE_URL + "/images/logo.svg",
  image: [IMG.front, IMG.bedLux, IMG.lounge, IMG.reception].map((i) => SITE_URL + i.src),
  telephone: "+92-319-9193124",
  priceRange: `${P.oneBedShort} - ${P.twoBedNight}`,
  currenciesAccepted: "PKR",
  checkinTime: "14:00",
  checkoutTime: "12:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 23, Apt 1, Street 4, Civic Center, Bahria Town Phase 4",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    postalCode: "46000",
    addressCountry: "PK",
  },
  hasMap: MAP_LINK,
  areaServed: AREAS,
  numberOfRooms: ONE_BED_ROOMS,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  amenityFeature: [
    "Free WiFi / Internet", "Complimentary breakfast", "Welcome tea", "Attached washroom",
    "24/7 electricity backup", "24/7 water", "Towels, shampoo and handwash",
    "24/7 front desk service", "Room service food delivery", "Housekeeping", "Kitchen in apartments",
    "Air conditioning", "Heating", "Smart TV", "Mini fridge", "Electric kettle", "In-room safe", "Parking",
    "CCTV security", "Hot water", "Bathrobe", "Work desk", "Iron and ironing board",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  makesOffer: [
    ["1 Bed Room - short stay (1-3 hours)", RATES.oneBedShort],
    ["2 Bed Apartment - short stay (1-3 hours)", RATES.twoBedShort],
    ["1 Bed Room - per night", RATES.oneBedNight],
    ["2 Bed Apartment - per night", RATES.twoBedNight],
    ["1 Bed Room - per month", RATES.oneBedMonth],
    ["2 Bed Apartment - per month", RATES.twoBedMonth],
  ].map(([name, price]) => ({ "@type": "Offer", name, price: String(price), priceCurrency: "PKR" })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_URL + "/#website",
  url: SITE_URL + "/",
  name: HOTEL_NAME,
  publisher: { "@id": SITE_URL + "/#hotel" },
  inLanguage: "en-PK",
};

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

export function breadcrumbSchema(trail: { path: string; name: string }[]) {
  const items = [{ path: "/", name: "Home" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: SITE_URL + (t.path === "/" ? "/" : t.path),
    })),
  };
}
