import Image from "next/image";
import Link from "next/link";
import type { Ride } from "@/lib/rides";
import { formatDateRange } from "@/lib/rides";

export default function RideCard({ ride }: { ride: Ride }) {
  return (
    <Link
      href={`/rides/${ride.slug}`}
      className="card group block overflow-hidden transition-colors hover:border-rust/50"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-lighter">
        <Image
          src={ride.coverImage}
          alt={ride.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-sm px-2 py-1 font-heading text-xs uppercase tracking-wider ${
            ride.status === "upcoming"
              ? "bg-rust text-cream"
              : "bg-charcoal/80 text-cream-dim"
          }`}
        >
          {ride.status === "upcoming" ? "Upcoming" : "Past Ride"}
        </span>
      </div>

      <div className="p-5">
        <p className="eyebrow">
          {formatDateRange(ride.startDate, ride.endDate)} &middot;{" "}
          {ride.location}
        </p>
        <h3 className="mt-2 text-xl text-cream">{ride.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-cream-dim">
          {ride.summary}
        </p>
        <div className="mt-4 flex gap-4 text-xs uppercase tracking-wider text-cream-dim">
          <span>{ride.difficulty}</span>
          <span>{ride.distanceKm} km</span>
        </div>
      </div>
    </Link>
  );
}
