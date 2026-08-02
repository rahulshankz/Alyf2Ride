import Image from "next/image";
import Link from "next/link";
import type { Trip } from "@/lib/travel";
import { formatDateRange } from "@/lib/rides";
import { withBasePath } from "@/lib/basePath";

export default function TravelCard({ trip }: { trip: Trip }) {
  return (
    <Link
      href={`/travel/${trip.slug}`}
      className="card group block overflow-hidden transition-colors hover:border-rust/50"
    >
      <div
        className={`relative w-full overflow-hidden bg-charcoal-lighter ${
          trip.coverAspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={withBasePath(trip.coverImage)}
          alt={trip.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            trip.coverPosition === "top"
              ? "object-top"
              : trip.coverPosition === "bottom"
                ? "object-bottom"
                : "object-center"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-sm px-2 py-1 font-heading text-xs uppercase tracking-wider ${
            trip.status === "upcoming"
              ? "bg-rust text-cream"
              : "bg-charcoal/80 text-cream-dim"
          }`}
        >
          {trip.status === "upcoming" ? "Upcoming" : "Past Trip"}
        </span>
      </div>

      <div className="p-5">
        <p className="eyebrow">
          {formatDateRange(trip.startDate, trip.endDate)} &middot;{" "}
          {trip.location}
        </p>
        <h3 className="mt-2 text-xl text-cream">{trip.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-cream-dim">
          {trip.summary}
        </p>
        <div className="mt-4 flex gap-4 text-xs uppercase tracking-wider text-cream-dim">
          <span>{trip.type}</span>
        </div>
      </div>
    </Link>
  );
}
