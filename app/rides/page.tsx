import type { Metadata } from "next";
import Hero from "@/components/Hero";
import RideCard from "@/components/RideCard";
import { getUpcomingRides, getPastRides, isLongRide, type Ride } from "@/lib/rides";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Rides & Events",
  description: `Upcoming and past group rides from ${site.name}.`,
};

function RideGroup({ title, rides }: { title: string; rides: Ride[] }) {
  if (rides.length === 0) return null;

  return (
    <div className="mt-10 first:mt-0">
      <p className="font-heading text-sm uppercase tracking-wider text-cream-dim">
        {title}
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rides.map((ride) => (
          <RideCard key={ride.slug} ride={ride} />
        ))}
      </div>
    </div>
  );
}

export default function RidesPage() {
  const upcomingRides = getUpcomingRides();
  const pastRides = getPastRides();

  const upcomingWeekend = upcomingRides.filter((ride) => !isLongRide(ride));
  const upcomingLong = upcomingRides.filter(isLongRide);
  const pastWeekend = pastRides.filter((ride) => !isLongRide(ride));
  const pastLong = pastRides.filter(isLongRide);

  return (
    <>
      <Hero
        eyebrow="Rides & Events"
        title="Where We're Headed"
        subtitle="Every ride is logged here — route, difficulty, and how to join. Scroll down for the archive."
        imageSrc="/images/hero/rides-hero.jpg"
        imageAlt="Motorcycles parked on a ghat road overlooking the valley"
        height="tall"
        imagePosition="bottom"
        overlay="light"
      />

      <section className="section">
        <p className="eyebrow">Upcoming</p>
        <h2 className="mt-3 text-4xl text-cream sm:text-5xl">Next Rides</h2>

        {upcomingRides.length > 0 ? (
          <div className="mt-12">
            <RideGroup title="Weekend Rides" rides={upcomingWeekend} />
            <RideGroup title="Long Rides (5+ Days)" rides={upcomingLong} />
          </div>
        ) : (
          <p className="mt-8 text-cream-dim">
            Nothing scheduled yet — join the WhatsApp group to hear about the
            next ride first.
          </p>
        )}
      </section>

      <section className="section border-t border-cream/10">
        <p className="eyebrow">Archive</p>
        <h2 className="mt-3 text-4xl text-cream sm:text-5xl">Past Rides</h2>

        {pastRides.length > 0 ? (
          <div className="mt-12">
            <RideGroup title="Weekend Rides" rides={pastWeekend} />
            <RideGroup title="Long Rides (5+ Days)" rides={pastLong} />
          </div>
        ) : (
          <p className="mt-8 text-cream-dim">
            No past rides logged yet — this is where the archive will grow.
          </p>
        )}
      </section>
    </>
  );
}
