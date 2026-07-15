import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import etiquette from "@/data/etiquette.json";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Join Us",
  description: `How to join ${site.name} and what we expect from every rider.`,
};

const STEPS = [
  {
    step: "01",
    title: "DM us on whatsapp or Instagram",
    detail:
      "Hit us up at the whatsapp number in contact section Or DM us on Instagram, all further details and queries about the ride will be answered there.",
  },
  {
    step: "02",
    title: "Sign up for a ride and Join the WhatsApp group",
    detail:
      "Scroll down to see the Etiquettes — this is how we ride together, safely and respectfully. Non-negotiable for every member.",
  },
  {
    step: "03",
    title: "Show Up For a Ride",
    detail:
      "Watch the whatsapp group for the ride updates, and meet everyone at the meet point on time, geared up.",
  },
];

export default function JoinPage() {
  return (
    <>
      <Hero
        eyebrow="Join Us"
        title="No Forms. Just Show Up."
        subtitle="Here's exactly how to become part of the community and what we expect from every rider on the road."
        imageSrc="/images/hero/join-hero.jpg"
        imageAlt="Group of riders gathered before a ride start"
        height="tall"
      >
        <WhatsAppButton href={site.whatsapp.communityLink} />
      </Hero>

      <section className="section">
        <p className="eyebrow">How It Works</p>
        <h2 className="mt-3 text-4xl text-cream sm:text-5xl">
          Three Steps In
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STEPS.map((item) => (
            <div key={item.step}>
              <p className="font-heading text-5xl text-rust/60">
                {item.step}
              </p>
              <h3 className="mt-3 text-xl text-cream">{item.title}</h3>
              <p className="mt-3 text-cream-dim">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section border-t border-cream/10">
        <p className="eyebrow">Ground Rules</p>
        <h2 className="mt-3 text-4xl text-cream sm:text-5xl">
          Riding Etiquette
        </h2>
        <p className="mt-4 max-w-2xl text-cream-dim">
          These aren't suggestions — every rider who joins a group ride is
          expected to follow them.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {etiquette.map((rule) => (
            <div key={rule.title} className="card p-6">
              <h3 className="text-lg text-rust">{rule.title}</h3>
              <p className="mt-3 text-sm text-cream-dim">{rule.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section border-t border-cream/10 text-center">
        <h2 className="mx-auto max-w-xl text-4xl text-cream sm:text-5xl">
          Ready to ride?
        </h2>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton href={site.whatsapp.communityLink} />
        </div>
      </section>
    </>
  );
}
