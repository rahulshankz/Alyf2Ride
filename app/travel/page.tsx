import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TravelCard from "@/components/TravelCard";
import { getPastTrips } from "@/lib/travel";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Travel & Beyond",
  description: `Treks, cruises, road trips and other journeys from ${site.name}.`,
};

export default function TravelPage() {
  const pastTrips = getPastTrips();

  return (
    <>
      <Hero
        eyebrow="Beyond Two Wheels"
        title="Travel & Beyond"
        subtitle="From mountain treks to coastal cruises and cross-country road trips — every trip is logged here, route and how to join. Scroll down for the archive."
        imageSrc="/images/hero/rides-hero.jpg"
        imageAlt="A scenic mountain road with riders in the distance"
        height="tall"
        imagePosition="bottom"
        overlay="light"
      />

      <section className="section">
        <p className="eyebrow">Archive</p>
        <h2 className="mt-3 text-4xl text-cream sm:text-5xl">Past Trips</h2>

        {pastTrips.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastTrips.map((trip) => (
              <TravelCard key={trip.slug} trip={trip} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-cream-dim">
            No past trips logged yet — this is where the archive will grow.
          </p>
        )}
      </section>
    </>
  );
}
