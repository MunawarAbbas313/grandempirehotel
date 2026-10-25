import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";
import { LANDINGS } from "@/lib/landing";
import { PAGES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = PAGES.map((n) => ({
    url: SITE_URL + (n.href === "/" ? "/" : n.href),
    lastModified: new Date(),
    changeFrequency: n.href === "/" || n.href === "/rooms-and-rates" ? "weekly" : "monthly",
    priority: n.href === "/" ? 1 : n.href === "/blog" ? 0.6 : 0.9,
  }));
  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [SITE_URL + p.image.src],
  }));
  const landings: MetadataRoute.Sitemap = LANDINGS.map((l) => ({
    url: `${SITE_URL}/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
    images: [SITE_URL + l.image.src],
  }));
  return [...pages, ...landings, ...posts];
}
