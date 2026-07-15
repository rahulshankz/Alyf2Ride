import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl text-cream sm:text-5xl">
        Wrong Turn Somewhere
      </h1>
      <p className="mt-4 max-w-md text-cream-dim">
        This road doesn't lead anywhere. Head back and pick another route.
      </p>
      <Link href="/" className="btn-primary mt-8 inline-flex">
        Back to Home
      </Link>
    </section>
  );
}
