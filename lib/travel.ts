import travelData from "@/data/travel.json";

export type Trip = {
  slug: string;
  title: string;
  type: string;
  status: "upcoming" | "past";
  startDate: string;
  endDate: string;
  location: string;
  meetPoint: string;
  meetTime: string;
  itinerary: string;
  summary: string;
  highlights: string[];
  coverImage: string;
  coverPosition?: "top" | "center" | "bottom";
  coverAspect?: "landscape" | "portrait";
  gallery: string[];
  whatsappLink: string;
  rsvpNote: string;
  priceNote: string;
  instagramHighlight?: string;
};

const trips = travelData as Trip[];

export function getAllTrips(): Trip[] {
  return [...trips].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

export function getUpcomingTrips(): Trip[] {
  return getAllTrips()
    .filter((trip) => trip.status === "upcoming")
    .sort(
      (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
}

export function getPastTrips(): Trip[] {
  return getAllTrips().filter((trip) => trip.status === "past");
}

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find((trip) => trip.slug === slug);
}
