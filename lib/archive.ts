import archiveData from "@/data/archive.json";
import { getPastRides } from "@/lib/rides";

export type ArchiveEntry = {
  date: string; // "YYYY-MM" or "YYYY-MM-DD"
  title: string;
  note?: string;
  href?: string;
};

const loggedEntries = archiveData as ArchiveEntry[];

export type ArchiveYearGroup = {
  year: string;
  entries: ArchiveEntry[];
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function parseYearMonth(date: string): { year: number; month: number } {
  const [year, month] = date.split("-").map(Number);
  return { year, month };
}

function getAllEntries(): ArchiveEntry[] {
  const rideEntries: ArchiveEntry[] = getPastRides().map((ride) => ({
    date: ride.startDate,
    title: ride.title,
    href: `/rides/${ride.slug}`,
  }));

  return [...loggedEntries, ...rideEntries];
}

export function getArchiveByYear(): ArchiveYearGroup[] {
  const sorted = [...getAllEntries()].sort((a, b) => {
    const ya = parseYearMonth(a.date);
    const yb = parseYearMonth(b.date);
    return yb.year * 12 + yb.month - (ya.year * 12 + ya.month);
  });

  const byYear = new Map<string, ArchiveEntry[]>();
  for (const entry of sorted) {
    const year = String(parseYearMonth(entry.date).year);
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year)!.push(entry);
  }

  return [...byYear.entries()]
    .map(([year, yearEntries]) => ({ year, entries: yearEntries }))
    .sort((a, b) => Number(b.year) - Number(a.year));
}

export function formatArchiveMonth(date: string): string {
  const { month } = parseYearMonth(date);
  return MONTHS[month - 1];
}
