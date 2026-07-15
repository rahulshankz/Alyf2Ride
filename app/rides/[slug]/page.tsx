import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getAllRides, getRideBySlug, formatDateRange } from "@/lib/rides";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllRides().map((ride) => ({ slug: ride.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const ride = getRideBySlug(params.slug);
  if (!ride) return {};

  return {
    title: ride.title,
    description: ride.summary,
    openGraph: {
      title: ride.title,
      description: ride.summary,
      images: [{ url: ride.coverImage }],
    },
  };
}

export default function RideDetailPage({ params }: Props) {
  const ride = getRideBySlug(params.slug);
  if (!ride) notFound();

  return (
    <>
      <section className="relative flex h-[70vh] min-h-[440px] items-end overflow-hidden">
        <Image
          src={ride.coverImage}
          alt={ride.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 sm:px-8">
          <p className="eyebrow mb-4">
            {ride.status === "upcoming" ? "Upcoming Ride" : "Past Ride"} ·{" "}
            {formatDateRange(ride.startDate, ride.endDate)}
          </p>
          <h1 className="max-w-3xl text-5xl leading-[0.95] text-cream sm:text-6xl">
            {ride.title}
          </h1>
        </div>
      </section>

      <section className="section grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg text-cream-dim">{ride.summary}</p>

          {ride.highlights.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl text-cream">Highlights</h2>
              <ul className="mt-4 space-y-2">
                {ride.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-cream-dim">
                    <span className="text-rust">—</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10">
            <h2 className="text-2xl text-cream">Route</h2>
            <p className="mt-4 text-cream-dim">{ride.route}</p>
          </div>
        </div>

        <aside className="card h-fit p-6">
          <dl className="space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
              <dt className="text-cream-dim">Dates</dt>
              <dd className="text-right text-cream">
                {formatDateRange(ride.startDate, ride.endDate)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
              <dt className="text-cream-dim">Location</dt>
              <dd className="text-right text-cream">{ride.location}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
              <dt className="text-cream-dim">Meet Point</dt>
              <dd className="text-right text-cream">{ride.meetPoint}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
              <dt className="text-cream-dim">Meet Time</dt>
              <dd className="text-right text-cream">{ride.meetTime}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
              <dt className="text-cream-dim">Difficulty</dt>
              <dd className="text-right text-cream">{ride.difficulty}</dd>
            </div>
            <div className="flex justify-between gap-4 pb-1">
              <dt className="text-cream-dim">Distance</dt>
              <dd className="text-right text-cream">{ride.distanceKm} km</dd>
            </div>
          </dl>

          {ride.priceNote && (
            <p className="mt-6 text-sm text-cream-dim">{ride.priceNote}</p>
          )}

          {ride.status === "upcoming" && (
            <div className="mt-6 flex flex-col gap-3">
              <WhatsAppButton href={ride.whatsappLink} label="RSVP on WhatsApp" />
              {ride.rsvpNote && (
                <p className="text-xs text-cream-dim">{ride.rsvpNote}</p>
              )}
            </div>
          )}
        </aside>
      </section>

      <section className="section border-t border-cream/10">
        <Link href="/rides" className="btn-secondary">
          &larr; Back to all rides
        </Link>
      </section>
    </>
  );
}
