import Image from "next/image";
import type { ReactNode } from "react";
import { withBasePath } from "@/lib/basePath";

type HeroProps = {
  eyebrow?: string;
  title: string;
  tagline?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
  height?: "full" | "tall";
};

export default function Hero({
  eyebrow,
  title,
  tagline,
  subtitle,
  imageSrc,
  imageAlt,
  children,
  height = "full",
}: HeroProps) {
  return (
    <section
      className={`relative flex items-end overflow-hidden ${
        height === "full" ? "hero-full" : "hero-tall"
      }`}
    >
      <Image
        src={withBasePath(imageSrc)}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 sm:px-8 sm:pb-20">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl leading-[0.95] text-cream sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {tagline && (
          <p className="mt-3 max-w-xl font-heading text-base uppercase tracking-widest text-amber sm:text-lg">
            {tagline}
          </p>
        )}
        {subtitle && (
          <p className="mt-4 line-clamp-5 max-w-xl text-lg text-cream-dim sm:line-clamp-none">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}
