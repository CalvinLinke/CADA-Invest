import type { MetadataRoute } from "next";

const BASE_URL = "https://cada-invest.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                              lastModified: new Date(), changeFrequency: "monthly",  priority: 1.0 },
    { url: `${BASE_URL}/ankauf`,                  lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/immobilienbewertung`,     lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/ueber-uns`,               lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${BASE_URL}/referenzen`,              lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${BASE_URL}/partner`,                 lastModified: new Date(), changeFrequency: "monthly",  priority: 0.6 },
    { url: `${BASE_URL}/blog`,                    lastModified: new Date(), changeFrequency: "weekly",   priority: 0.8 },
  ];
}
