// ============================================================
//  Business details used across the whole site.
//  Change a value here and every page updates automatically.
// ============================================================
export const SITE_URL = "https://www.grandempirehotel.com";
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

// ---- RATES (PKR). Edit these numbers to change prices on every page. ----
export const RATES = {
  oneBedNight: 5000,
  twoBedNight: 10000,
  oneBedMonth: 150000,
  twoBedMonth: 200000,
};
export const pkr = (n: number) => "PKR " + n.toLocaleString("en-US");
export const P = {
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
  | "tag" | "menu" | "close" | "chevron" | "home" | "book" | "info" | "star" | "users" | "arrow";

// ---- Navigation ----
export const STAYS = [
  { href: "/daily-rent-rooms-bahria-town-rawalpindi", label: "Daily Stay", desc: `One day / one night from ${P.oneBedNight}`, icon: "bed" as IconName },
  { href: "/couple-rooms-bahria-town-rawalpindi", label: "Couples & Honeymoon", desc: "Private rooms for married couples", icon: "heart" as IconName },
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
  priceRange: `${P.oneBedNight} - ${P.twoBedNight} per night`,
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
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  makesOffer: [
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
