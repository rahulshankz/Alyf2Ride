import type { MetadataRoute } from "next";
import { getAllRides } from "@/lib/rides";
import site from "@/data/site.json";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/rides",
    "/gallery",
    "/join",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const rideRoutes = getAllRides().map((ride) => ({
    url: `${site.url}/rides/${ride.slug}`,
    lastModified: new Date(ride.startDate),
  }));

  return [...staticRoutes, ...rideRoutes];
}
