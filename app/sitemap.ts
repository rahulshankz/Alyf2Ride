import type { MetadataRoute } from "next";
import { getAllRides } from "@/lib/rides";
import { getAllTrips } from "@/lib/travel";
import site from "@/data/site.json";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/rides",
    "/rides/archive",
    "/travel",
    "/gallery",
    "/join",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const rideRoutes = getAllRides().map((ride) => ({
    url: `${site.url}/rides/${ride.slug}`,
    lastModified: new Date(ride.startDate),
  }));

  const tripRoutes = getAllTrips().map((trip) => ({
    url: `${site.url}/travel/${trip.slug}`,
    lastModified: new Date(trip.startDate),
  }));

  return [...staticRoutes, ...rideRoutes, ...tripRoutes];
}
