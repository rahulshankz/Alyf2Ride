import type { Metadata } from "next";
import Hero from "@/components/Hero";
import GalleryGrid from "@/components/GalleryGrid";
import { getGalleryImages } from "@/lib/gallery";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photos and moments from ${site.name} rides.`,
};

export default function GalleryPage() {
  const gallery = getGalleryImages();

  return (
    <>
      <Hero
        eyebrow="Gallery"
        title="Moments From The Road"
        subtitle="A running archive of every ride — swap in your own shots as they come in."
        imageSrc="/images/hero/gallery-hero.jpg"
        imageAlt="Wide shot of riders on an open highway"
        height="tall"
        textPosition="top"
      />

      <section className="section">
        <GalleryGrid images={gallery} />

        {gallery.length === 0 && (
          <p className="text-cream-dim">
            Photos coming soon — drop your ride shots into{" "}
            <code className="text-cream">/public/images/gallery</code> and
            they'll show up here automatically.
          </p>
        )}
      </section>

      <section className="section border-t border-cream/10 text-center">
        <p className="eyebrow justify-center">More On Instagram</p>
        <h2 className="mx-auto mt-3 max-w-xl text-4xl text-cream sm:text-5xl">
          Follow {site.instagram.handle}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-cream-dim">
          The latest ride reels and behind-the-scenes shots live on
          Instagram first.
        </p>
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-8 inline-flex"
        >
          Open Instagram
        </a>
      </section>
    </>
  );
}
