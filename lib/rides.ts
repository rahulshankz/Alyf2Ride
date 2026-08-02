import ridesData from "@/data/rides.json";

export type Ride = {
  slug: string;
  title: string;
  status: "upcoming" | "past";
  startDate: string;
  endDate: string;
  location: string;
  meetPoint: string;
  meetTime: string;
  difficulty: string;
  type?: string;
  distanceKm: number;
  route: string;
  summary: string;
  highlights: string[];
  coverImage: string;
  // Vertical crop anchor for coverImage when it's cropped into a landscape
  // box (card grids, detail-page hero) — matters for portrait source photos
  // where a center crop would cut off the subject. Defaults to "center".
  coverPosition?: "top" | "center" | "bottom";
  // "portrait" gives the card a taller aspect ratio box for coverImage
  // instead of the default landscape one — use for portrait-orientation
  // source photos, where forcing a landscape crop would discard most of
  // the image. Defaults to landscape.
  coverAspect?: "landscape" | "portrait";
  gallery: string[];
  whatsappLink: string;
  rsvpNote: string;
  priceNote: string;
  instagramHighlight?: string;
};

const rides = ridesData as Ride[];

export function getAllRides(): Ride[] {
  return [...rides].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

export function getUpcomingRides(): Ride[] {
  return getAllRides()
    .filter((ride) => ride.status === "upcoming")
    .sort(
      (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
}

export function getPastRides(): Ride[] {
  return getAllRides().filter((ride) => ride.status === "past");
}

export function getRideBySlug(slug: string): Ride | undefined {
  return rides.find((ride) => ride.slug === slug);
}

export function getRideDurationDays(ride: Ride): number {
  const start = new Date(ride.startDate);
  const end = new Date(ride.endDate);
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
}

export function isLongRide(ride: Ride): boolean {
  return getRideDurationDays(ride) > 5;
}

export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };

  if (startDate === endDate) {
    return start.toLocaleDateString("en-IN", { ...opts, year: "numeric" });
  }

  const sameMonth = start.getMonth() === end.getMonth();
  const startStr = start.toLocaleDateString(
    "en-IN",
    sameMonth ? { day: "numeric" } : opts
  );
  const endStr = end.toLocaleDateString("en-IN", {
    ...opts,
    year: "numeric",
  });

  return `${startStr}–${endStr}`;
}
