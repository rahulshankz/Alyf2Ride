import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import RideCard from "@/components/RideCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getUpcomingRides } from "@/lib/rides";
import { withBasePath } from "@/lib/basePath";
import site from "@/data/site.json";

export default function HomePage() {
  const upcomingRides = getUpcomingRides();
  const nextRide = upcomingRides[0];

  return (
    <>
      <Hero
        eyebrow="Kochi · Est. 2015"
        title={`${site.name.toUpperCase()}`}
        subtitle={site.tagline.toUpperCase() + " — " + site.description}
        imageSrc="/images/hero/home-hero.jpg"
        imageAlt="Riders on a misty mountain road at dusk"
      >
        {nextRide && (
          <Link href={`/rides/${nextRide.slug}`} className="btn-primary">
            Next Ride: {nextRide.title}
          </Link>
        )}
        <WhatsAppButton
          href={site.whatsapp.communityLink}
          label="Join the Community"
          variant="secondary"
        />
      </Hero>

      {/* Community story */}
      <section className="section grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal-lighter">
          <Image
            src={withBasePath("/images/hero/group-story.jpg")}
            alt="ALyf2Ride group photo after a ride"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Who We Are</p>
          <h2 className="mt-3 text-4xl text-cream sm:text-5xl">
            A Hashtag. Three Friends.
            <br />
            One Crazy Idea.
          </h2>

          <div className="mt-6 space-y-1 text-xl text-cream">
            <p>Nobody planned to build a riding community.</p>
            <p>We just kept riding.</p>
          </div>

          <p className="mt-6 max-w-lg text-cream-dim">
            What began as post-exam rides during our college days in 2015
            somehow grew into epic cross-country expeditions, unforgettable
            mountain adventures, and eventually a community called{" "}
            {site.name}.
          </p>

          <p className="mt-6 max-w-lg italic text-amber">
            How did a random hashtag become a movement?
          </p>

          <Link href="/about" className="btn-secondary mt-8 inline-flex">
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Upcoming rides */}
      <section className="section border-t border-cream/10">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">What's Next</p>
            <h2 className="mt-3 text-4xl text-cream sm:text-5xl">
              Upcoming Rides
            </h2>
          </div>
          <Link href="/rides" className="btn-secondary">
            View All Rides
          </Link>
        </div>

        {upcomingRides.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingRides.map((ride) => (
              <RideCard key={ride.slug} ride={ride} />
            ))}
          </div>
        ) : (
          <p className="text-cream-dim">
            No rides scheduled right now — check back soon or join the
            WhatsApp group to hear first.
          </p>
        )}
      </section>

      {/* Join CTA */}
      <section className="section border-t border-cream/10 text-center">
        <p className="eyebrow justify-center">Ride With Us</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-4xl text-cream sm:text-5xl">
          Your next ride starts with one message.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-cream-dim">
          No membership fees, no forms. Join the WhatsApp group, introduce
          yourself, and show up for the next one.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <WhatsAppButton href={site.whatsapp.communityLink} />
          <Link href="/join" className="btn-secondary">
            Riding Etiquette
          </Link>
        </div>
      </section>
    </>
  );
}
