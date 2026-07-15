import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "About",
  description: `The story, values, and people behind ${site.name}.`,
};

const VALUES = [
  {
    title: "Ride Safe, Always",
    detail:
      "Gear up every time, ride within your limits, and look out for the rider behind you. No ride is worth an injury.",
  },
  {
    title: "No Egos, No Race Lines",
    detail:
      "We're not chasing lap times. The group moves at the pace of its slowest rider, every single time.",
  },
  {
    title: "Community Over Everything",
    detail:
      "Fuel stops, breakdowns, punctures — we handle it together. Nobody gets left on the side of the road.",
  },
  {
    title: "Respect the Road",
    detail:
      "We're guests in every village and every ghat we pass through. Ride quiet, ride clean, ride with respect.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title="Every Ride Tells A Story"
        imageSrc="/images/hero/about-hero.jpg"
        imageAlt="Rider looking out over a valley at dawn"
        height="tall"
      />

      <section className="section">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Founding Story</p>
          <h2 className="mt-3 text-4xl text-cream sm:text-5xl">
            The Story of {site.name}
          </h2>
          <p className="mt-6 text-lg text-cream-dim">
            Every journey has a beginning. Ours began with something as
            simple as a hashtag.
          </p>
        </div>

        <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-5xl overflow-hidden bg-charcoal-lighter">
          <Image
            src="/images/hero/about-group.jpg"
            alt="ALyf2Ride group photo"
            fill
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-cream-dim">
          <p>
            What started as a random hashtag on the ride photos we shared on
            social media gradually became something much bigger — a name
            that represented our passion for motorcycles, friendships, and
            the open road. That hashtag eventually evolved into{" "}
            <strong className="font-semibold text-cream">
              {site.name}
            </strong>
            , short for &ldquo;{site.tagline}.&rdquo;
          </p>
          <p>
            Our story goes back to{" "}
            <strong className="font-semibold text-cream">2015</strong>,
            during our college days at{" "}
            <strong className="font-semibold text-cream">
              Model Engineering College (MEC), Kochi
            </strong>
            . Back then, riding wasn&rsquo;t just a hobby — it became a
            tradition. After every mid-semester exam, there was a ride.
            After every semester, another ride. No matter how hectic college
            life got, there was always time to escape on two wheels.
          </p>
          <p>
            What began as occasional weekend rides soon turned into a
            ritual. Most of our early rides explored the beautiful roads of{" "}
            <strong className="font-semibold text-cream">Kerala</strong> and{" "}
            <strong className="font-semibold text-cream">Tamil Nadu</strong>,
            chasing sunsets, hill stations, beaches, and winding mountain
            roads. Among those adventures was one that still defines our
            spirit — an insane 72-hour ride covering{" "}
            <strong className="font-semibold text-cream">
              Kochi → Rameswaram → Kodaikanal → Kochi
            </strong>
            , proving that unforgettable memories don&rsquo;t always require
            months of planning.
          </p>
          <p>
            As life moved on and careers began, the rides didn&rsquo;t stop.
            Despite demanding work schedules and different cities, we
            continued meeting whenever we could, making sure the tradition
            stayed alive. In{" "}
            <strong className="font-semibold text-cream">
              October 2019
            </strong>
            , we completed our first major interstate expedition — a ride
            from Bengaluru to Mumbai. It marked the beginning of a new
            chapter, showing us that our dreams could stretch far beyond
            weekend rides.
          </p>
          <p>
            Then came the unexpected pause. Like everyone else, our journey
            hit a roadblock during the COVID-19 pandemic. The motorcycles
            rested, but the dream never did.
          </p>
          <p>
            When the world opened up again, so did our ambitions. In{" "}
            <strong className="font-semibold text-cream">2022</strong>, just
            before embarking on our long-awaited 22-day dream ride to
            Ladakh, we officially launched{" "}
            <strong className="font-semibold text-cream">
              {site.name}
            </strong>{" "}
            as a riding community. What had started as a hashtag finally had
            an identity. That Ladakh expedition changed everything.
          </p>
          <p>
            Since then, annual mountain expeditions have become a tradition.
            We&rsquo;ve explored some of the most breathtaking landscapes in
            the Himalayas, completing rides across:
          </p>

          <ul className="flex flex-wrap gap-3 py-1">
            {["Ladakh", "Spiti Valley", "Zanskar", "Nepal", "Tawang"].map(
              (place) => (
                <li
                  key={place}
                  className="border border-cream/10 bg-charcoal-light px-4 py-2 text-sm text-cream"
                >
                  {place}
                </li>
              )
            )}
          </ul>

          <p>
            Each journey pushed our limits, strengthened friendships, and
            reminded us why we ride — not just to reach destinations, but to
            experience the roads that connect them.
          </p>
          <p>
            In <strong className="font-semibold text-cream">2026</strong>,
            we took another major step by launching our first official
            community ride, the{" "}
            <strong className="font-semibold text-cream">
              Sundowner Circuit — Bengaluru Edition
            </strong>
            . It marked the beginning of a new vision: bringing together
            riders who share the same passion for exploration, responsible
            riding, and meaningful experiences.
          </p>
          <p>
            Today, {site.name} is no longer just our story. It&rsquo;s a
            growing community built on friendship, adventure, and the belief
            that every ride creates memories worth sharing. As we continue
            expanding our community rides from Bengaluru, with Kochi and
            Coimbatore next in line, we&rsquo;re excited to welcome more
            riders into the journey.
          </p>

          <p className="border-l-2 border-rust pl-5 text-xl italic text-cream">
            Because for us, it&rsquo;s never been about the destination.
            It&rsquo;s about the people, the roads, the stories, and living{" "}
            {site.tagline}.
          </p>
        </div>
      </section>

      <section className="section border-t border-cream/10">
        <p className="eyebrow">What We Stand For</p>
        <h2 className="mt-3 text-4xl text-cream sm:text-5xl">Our Values</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div key={value.title} className="card p-6">
              <h3 className="text-xl text-rust">{value.title}</h3>
              <p className="mt-3 text-cream-dim">{value.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
