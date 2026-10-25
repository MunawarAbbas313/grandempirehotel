import type { MetadataRoute } from "next";
import { HOTEL_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: HOTEL_NAME,
    short_name: "Grand Empire",
    description: "Affordable luxury hotel & apartments in Bahria Town Phase 4, Rawalpindi",
    start_url: "/",
    display: "standalone",
    background_color: "#faf6ee",
    theme_color: "#121621",
    icons: [{ src: "/images/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
