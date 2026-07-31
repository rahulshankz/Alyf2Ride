import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getAllTrips, getTripBySlug } from "@/lib/travel";
import { formatDateRange } from "@/lib/rides";
import { withBasePath } from "@/lib/basePath";
import site from "@/data/site.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllTrips().map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) return {};

  return {
    title: trip.title,
    description: trip.summary,
    openGraph: {
      title: trip.title,
      description: trip.summary,
      images: [{ url: `${site.url}${trip.coverImage}` }],
    },
  };
}

export default async function TravelDetailPage({ params }: Props) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  return (
    <>
      <section className="relative flex h-[70vh] min-h-[440px] items-end overflow-hidden">
        <Image
          src={withBasePath(trip.coverImage)}
          alt={trip.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 sm:px-8">
          <p className="eyebrow mb-4">
            {trip.status === "upcoming" ? "Upcoming Trip" : "Past Trip"} ·{" "}
            {formatDateRange(trip.startDate, trip.endDate)}
          </p>
          <h1 className="max-w-3xl text-3xl leading-[1.05] text-cream sm:text-5xl sm:leading-[0.95] lg:text-6xl">
            {trip.title}
          </h1>
        </div>
      </section>

      <section className="section grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg text-cream-dim">{trip.summary}</p>

          {trip.highlights.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl text-cream">Highlights</h2>
              <ul className="mt-4 space-y-2">
                {trip.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-cream-dim">
                    <span className="text-rust">—</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10">
            <h2 className="text-2xl text-cream">Itinerary</h2>
            <p className="mt-4 text-cream-dim">{trip.itinerary}</p>
          </div>
        </div>

        <aside className="card h-fit p-6">
          <dl className="space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
              <dt className="text-cream-dim">Dates</dt>
              <dd className="text-right text-cream">
                {formatDateRange(trip.startDate, trip.endDate)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
              <dt className="text-cream-dim">Location</dt>
              <dd className="text-right text-cream">{trip.location}</dd>
            </div>
            {trip.status === "upcoming" && (
              <>
                <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
                  <dt className="text-cream-dim">Meet Point</dt>
                  <dd className="text-right text-cream">{trip.meetPoint}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
                  <dt className="text-cream-dim">Meet Time</dt>
                  <dd className="text-right text-cream">{trip.meetTime}</dd>
                </div>
              </>
            )}
            <div className="flex justify-between gap-4 pb-1">
              <dt className="text-cream-dim">Type</dt>
              <dd className="text-right text-cream">{trip.type}</dd>
            </div>
          </dl>

          {trip.priceNote && (
            <p className="mt-6 text-sm text-cream-dim">{trip.priceNote}</p>
          )}

          {trip.status === "upcoming" && (
            <div className="mt-6 flex flex-col gap-3">
              <WhatsAppButton href={trip.whatsappLink} label="RSVP on WhatsApp" />
              {trip.rsvpNote && (
                <p className="text-xs text-cream-dim">{trip.rsvpNote}</p>
              )}
            </div>
          )}

          {trip.instagramHighlight && (
            <a
              href={trip.instagramHighlight}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary mt-3 w-full"
            >
              View Highlights on Instagram
            </a>
          )}
        </aside>
      </section>

      {trip.gallery.length > 0 && (
        <section className="section border-t border-cream/10">
          <p className="eyebrow">Photos</p>
          <h2 className="mt-3 text-2xl text-cream">From This Trip</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {trip.gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden bg-charcoal-lighter"
              >
                <Image
                  src={withBasePath(src)}
                  alt={`${trip.title} photo`}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section border-t border-cream/10">
        <Link href="/travel" className="btn-secondary">
          &larr; Back to all trips
        </Link>
      </section>
    </>
  );
}
