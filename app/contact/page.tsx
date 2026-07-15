import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — email, WhatsApp, or Instagram.`,
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Get In Touch"
        subtitle="Questions about a ride, ideas for a route, or just want to say hi — reach us here."
        imageSrc="/images/hero/contact-hero.jpg"
        imageAlt="Motorcycle parked at dusk on an open road"
        height="tall"
      />

      <section className="section grid gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Send A Message</p>
          <h2 className="mt-3 text-4xl text-cream sm:text-5xl">
            Drop Us A Line
          </h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div>
          <p className="eyebrow">Find Us Elsewhere</p>
          <h2 className="mt-3 text-4xl text-cream sm:text-5xl">
            Socials &amp; Direct
          </h2>

          <div className="mt-8 space-y-4">
            <a
              href={site.whatsapp.communityLink}
              target="_blank"
              rel="noreferrer"
              className="card flex items-center justify-between p-5 transition-colors hover:border-rust/50"
            >
              <span>
                <p className="text-cream">WhatsApp Group</p>
                <p className="text-sm text-cream-dim">
                  Fastest way to reach the whole community
                </p>
              </span>
              <span className="text-rust">&rarr;</span>
            </a>

            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="card flex items-center justify-between p-5 transition-colors hover:border-rust/50"
            >
              <span>
                <p className="text-cream">Instagram</p>
                <p className="text-sm text-cream-dim">
                  {site.instagram.handle}
                </p>
              </span>
              <span className="text-rust">&rarr;</span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="card flex items-center justify-between p-5 transition-colors hover:border-rust/50"
            >
              <span>
                <p className="text-cream">Email</p>
                <p className="text-sm text-cream-dim">{site.email}</p>
              </span>
              <span className="text-rust">&rarr;</span>
            </a>
          </div>

          <div className="mt-8">
            <WhatsAppButton
              href={site.whatsapp.contact}
              label="Message Us on WhatsApp"
            />
          </div>
        </div>
      </section>
    </>
  );
}
