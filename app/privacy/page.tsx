import type { Metadata } from "next";
import Link from "next/link";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
};

const SECTIONS = [
  {
    title: "What We Collect",
    body: [
      `We collect information you choose to give us directly — mainly your name, email address, and message when you use the contact form on this site, or your phone number and profile details when you join our WhatsApp community.`,
      `We also use Google Analytics to understand how people find and use this site — things like which pages are visited and roughly where visitors are located. Google Analytics uses cookies and collects data such as your IP address, device and browser type, and pages viewed. This data is aggregated and not used by us to identify you personally.`,
    ],
  },
  {
    title: "How We Use It",
    body: [
      `Contact form submissions are used only to respond to your message — questions, ride ideas, or feedback.`,
      `If you join our WhatsApp community, your number and any messages you send are visible to other group members, consistent with how WhatsApp groups normally work. We use group membership to share ride updates, meet points, and community announcements.`,
      `We do not sell, rent, or trade your information to anyone.`,
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      `Our contact form is processed by Formspree, which receives and forwards submissions to us by email. Our WhatsApp community runs on WhatsApp, operated by Meta. Site usage is measured with Google Analytics, operated by Google. Each of these services has its own privacy policy governing how it handles your data once it reaches them.`,
      `Photos and videos shared from our rides may also appear on our Instagram and YouTube pages, which are governed by Instagram's and YouTube's own privacy policies.`,
    ],
  },
  {
    title: "Photos From Rides",
    body: [
      `We regularly photograph and film our rides and events for our website, Instagram, and YouTube. If you attend a ride or event with us, you may appear in this content. If you'd rather not be featured, let us know and we'll do our best to accommodate that for future posts and remove existing ones on request.`,
    ],
  },
  {
    title: "Your Choices",
    body: [
      `You can leave our WhatsApp community at any time using WhatsApp's own group controls. You can opt out of Google Analytics tracking across all sites using the Google Analytics Opt-out Browser Add-on, or by using a browser/extension that blocks analytics cookies. To have your contact form details deleted, or to ask us anything about how your information is handled, email us — see below.`,
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      `We may update this policy as the site or community evolves. Material changes will be reflected here with an updated date.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl text-cream sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-cream-dim">Last updated July 2026</p>

        <p className="mt-8 text-lg text-cream-dim">
          {site.name} is a community, not a company — but we still take your
          privacy seriously. This page explains what information we collect
          when you use this site or join our community, and how we handle
          it.
        </p>

        <div className="mt-12 space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl text-cream">{section.title}</h2>
              <div className="mt-3 space-y-3 text-cream-dim">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="text-2xl text-cream">Contact Us</h2>
            <p className="mt-3 text-cream-dim">
              Questions about this policy or your data? Reach us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-rust hover:text-rust-light"
              >
                {site.email}
              </a>{" "}
              or through our{" "}
              <Link href="/contact" className="text-rust hover:text-rust-light">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
