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
  imagePosition?: "center" | "top" | "bottom";
  overlay?: "normal" | "light";
  // "below" renders the title/subtitle as a normal block right after the
  // photo instead of overlaid on top of it — use when the image's subject
  // has no clear empty patch for text to sit over without covering it.
  textPosition?: "top" | "bottom" | "below";
  // Where the children (e.g. a CTA button) sit — defaults to textPosition,
  // but can be pinned to the opposite edge when the text sits over a busy
  // part of the photo and the CTA needs its own clear patch of image.
  childrenPosition?: "top" | "bottom";
  // "tight" pulls the text closer to the top/bottom edge of the image
  // (smaller padding) instead of the default roomier inset.
  textInset?: "normal" | "tight";
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
  imagePosition = "center",
  overlay = "normal",
  textPosition = "bottom",
  childrenPosition,
  textInset = "normal",
}: HeroProps) {
  const ctaPosition = childrenPosition ?? textPosition;
  const ctaInTextBlock = ctaPosition === textPosition;
  // Overlaid text needs its own contrast guarantee — the gradient alone
  // isn't reliably dark everywhere behind it (e.g. a bright patch of a
  // photo near the text block's edge, before the gradient reaches its
  // full strength).
  const textShadow =
    textPosition === "below" ? "" : "[text-shadow:0_1px_12px_rgba(0,0,0,0.9)]";

  const textBlock = (
    <>
      {eyebrow && (
        <p
          className={`eyebrow ${textShadow} ${textPosition === "top" ? "mb-2" : "mb-4"}`}
        >
          {eyebrow}
        </p>
      )}
      <h1
        className={`max-w-3xl text-4xl leading-[0.95] text-cream sm:text-6xl lg:text-7xl ${textShadow}`}
      >
        {title}
      </h1>
      {tagline && (
        <p
          className={`mt-3 max-w-xl font-heading text-base uppercase tracking-widest text-amber sm:text-lg ${textShadow}`}
        >
          {tagline}
        </p>
      )}
      {subtitle && (
        <p
          className={`line-clamp-5 max-w-xl text-lg text-cream-dim sm:line-clamp-none ${textShadow} ${
            textPosition === "top" ? "mt-2" : "mt-4"
          }`}
        >
          {subtitle}
        </p>
      )}
      {children && ctaInTextBlock && (
        <div className="mt-8 flex flex-wrap gap-4">{children}</div>
      )}
    </>
  );

  const imageSection = (
    <section
      className={`relative overflow-hidden ${
        height === "full" ? "hero-full" : "hero-tall"
      }`}
    >
      <Image
        src={withBasePath(imageSrc)}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={`object-cover ${
          imagePosition === "top"
            ? "object-top"
            : imagePosition === "bottom"
              ? "object-bottom"
              : "object-center"
        }`}
      />
      {textPosition !== "below" && (
        <div
          className={`absolute inset-0 ${
            textPosition === "top" ? "bg-gradient-to-b" : "bg-gradient-to-t"
          } ${
            overlay === "light"
              ? "from-charcoal/70 via-charcoal/20 to-transparent"
              : "from-charcoal via-charcoal/40 to-charcoal/20"
          }`}
        />
      )}
      {textPosition !== "below" && !ctaInTextBlock && ctaPosition !== "below" && (
        <div
          className={`absolute inset-x-0 ${
            ctaPosition === "top" ? "top-0 bg-gradient-to-b" : "bottom-0 bg-gradient-to-t"
          } h-1/3 ${
            overlay === "light"
              ? "from-charcoal/70 via-charcoal/20 to-transparent"
              : "from-charcoal via-charcoal/40 to-transparent"
          }`}
        />
      )}

      {textPosition !== "below" && (
        <div
          className={`absolute inset-x-0 z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 ${
            textPosition === "top"
              ? "top-0 pt-6 sm:pt-8"
              : textInset === "tight"
                ? "bottom-0 pb-2 sm:pb-3"
                : "bottom-0 pb-16 sm:pb-20"
          }`}
        >
          {textBlock}
        </div>
      )}

      {children && !ctaInTextBlock && ctaPosition !== "below" && (
        <div
          className={`absolute inset-x-0 z-10 mx-auto flex w-full max-w-6xl flex-wrap gap-4 px-6 sm:px-8 ${
            ctaPosition === "top" ? "top-0 pt-6 sm:pt-8" : "bottom-0 pb-16 sm:pb-20"
          }`}
        >
          {children}
        </div>
      )}
    </section>
  );

  if (textPosition === "below") {
    return (
      <>
        {imageSection}
        <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-8 sm:px-8 sm:pt-10 lg:pb-28">
          {textBlock}
          {children && !ctaInTextBlock && (
            <div className="mt-8 flex flex-wrap gap-4">{children}</div>
          )}
        </div>
      </>
    );
  }

  return imageSection;
}
