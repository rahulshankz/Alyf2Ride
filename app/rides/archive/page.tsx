import type { Metadata } from "next";
import Link from "next/link";
import { getArchiveByYear, formatArchiveMonth } from "@/lib/archive";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Ride Logbook",
  description: `A running log of every short weekend ride ${site.name} has done since ${site.founded}.`,
};

export default function RideArchivePage() {
  const years = getArchiveByYear();

  return (
    <section className="section">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Since {site.founded}</p>
        <h1 className="mt-3 text-4xl text-cream sm:text-5xl">
          Ride Logbook
        </h1>
        <p className="mt-4 text-lg text-cream-dim">
          Not every ride gets its own page. This is the running log of all
          the rides (that we can remember) we've done over the years — kept
          here for the record.
        </p>

        <div className="mt-12 space-y-12">
          {years.map(({ year, entries }) => (
            <div key={year}>
              <h2 className="font-heading text-2xl text-rust">{year}</h2>
              <ul className="mt-4 divide-y divide-cream/10 border-t border-cream/10">
                {entries.map((entry, i) => (
                  <li
                    key={`${entry.date}-${i}`}
                    className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <span className="w-12 shrink-0 text-sm text-cream-dim">
                      {formatArchiveMonth(entry.date)}
                    </span>
                    {entry.href ? (
                      <Link
                        href={entry.href}
                        className="text-cream hover:text-rust"
                      >
                        {entry.title}
                      </Link>
                    ) : (
                      <span className="text-cream">{entry.title}</span>
                    )}
                    {entry.note && (
                      <span className="text-sm text-cream-dim sm:ml-auto sm:text-right">
                        {entry.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {years.length === 0 && (
          <p className="mt-12 text-cream-dim">
            The logbook is empty for now — entries will show up here as
            they're added.
          </p>
        )}
      </div>
    </section>
  );
}
