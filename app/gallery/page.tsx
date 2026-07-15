import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
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
      />

      <section className="section">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <div
              key={item.src}
              className="group relative aspect-square overflow-hidden bg-charcoal-lighter"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading={index < 4 ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

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
