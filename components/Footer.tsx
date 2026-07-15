import Link from "next/link";
import site from "@/data/site.json";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-heading text-lg tracking-widest text-cream">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-cream-dim">{site.tagline}</p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="eyebrow mb-1">Navigate</p>
            <Link href="/rides" className="text-cream-dim hover:text-rust">
              Rides &amp; Events
            </Link>
            <Link href="/gallery" className="text-cream-dim hover:text-rust">
              Gallery
            </Link>
            <Link href="/join" className="text-cream-dim hover:text-rust">
              Join Us
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="eyebrow mb-1">Connect</p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="text-cream-dim hover:text-rust"
            >
              Instagram {site.instagram.handle}
            </a>
            <a
              href={site.whatsapp.communityLink}
              target="_blank"
              rel="noreferrer"
              className="text-cream-dim hover:text-rust"
            >
              WhatsApp Group
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-cream-dim hover:text-rust"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream-dim md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Ride safe, ride
            together.
          </p>
          <p>
            Based out of {site.baseCity}, riding since {site.founded}.
          </p>
        </div>
      </div>
    </footer>
  );
}
