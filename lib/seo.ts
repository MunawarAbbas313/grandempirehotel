import type { Metadata } from "next";
import { HOTEL_NAME, SITE_URL, type Img } from "./site";

// Builds the title, description, keywords, canonical URL and social-share tags for a page.
export function pageMeta(opts: {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  image: Img;
  article?: { published: string; modified?: string };
}): Metadata {
  const url = SITE_URL + opts.path;
  const images = [{ url: opts.image.src, width: opts.image.w, height: opts.image.h, alt: opts.title }];
  return {
    title: { absolute: opts.title },
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: opts.article
      ? {
          type: "article",
          siteName: HOTEL_NAME,
          title: opts.title,
          description: opts.description,
          url,
          locale: "en_PK",
          images,
          publishedTime: opts.article.published,
          modifiedTime: opts.article.modified ?? opts.article.published,
        }
      : { type: "website", siteName: HOTEL_NAME, title: opts.title, description: opts.description, url, locale: "en_PK", images },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description, images: [opts.image.src] },
  };
}
