import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://evtilimousine.com";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/fleet`, lastModified: new Date() },
    { url: `${base}/rates`, lastModified: new Date() },
    { url: `${base}/booking`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
