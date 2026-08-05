import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://neurantra.com";

// Keep in step with the routes under src/app. Add a line whenever a new product subpage ships.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/surgery-care`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/planesane`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/puzzlecub`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/chaturang`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/surgery-care/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/surgery-care/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/surgery-care/communication`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/surgery-care/delete-account`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
