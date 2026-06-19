import type { MetadataRoute } from "next";

const BASE_URL = "https://www.cada-invest.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                              lastModified: new Date(), changeFrequency: "monthly",  priority: 1.0 },
    { url: `${BASE_URL}/ankauf`,                  lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/immobilienbewertung`,     lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/blog`,                    lastModified: new Date(), changeFrequency: "weekly",   priority: 0.8 },
    { url: `${BASE_URL}/ueber-uns`,               lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${BASE_URL}/referenzen`,              lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${BASE_URL}/kontakt`,                 lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${BASE_URL}/partner`,                 lastModified: new Date(), changeFrequency: "monthly",  priority: 0.6 },
    { url: `${BASE_URL}/tippgeber`,               lastModified: new Date(), changeFrequency: "monthly",  priority: 0.6 },
    { url: `${BASE_URL}/investoren`,              lastModified: new Date(), changeFrequency: "monthly",  priority: 0.6 },
    { url: `${BASE_URL}/impressum`,               lastModified: new Date(), changeFrequency: "yearly",   priority: 0.3 },
    { url: `${BASE_URL}/datenschutz`,             lastModified: new Date(), changeFrequency: "yearly",   priority: 0.3 },
    { url: `${BASE_URL}/sitemap`,                 lastModified: new Date(), changeFrequency: "monthly",  priority: 0.2 },
  ];
}
