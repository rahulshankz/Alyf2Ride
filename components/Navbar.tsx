"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import site from "@/data/site.json";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/rides", label: "Rides" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-charcoal/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt={`${site.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border border-cream/20 object-cover"
            priority
          />
          <span className="font-heading text-xl tracking-widest text-cream">
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-heading text-sm uppercase tracking-wider text-cream-dim transition-colors hover:text-rust"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-cream" />
          <span className="h-0.5 w-6 bg-cream" />
          <span className="h-0.5 w-6 bg-cream" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-cream/10 bg-charcoal px-6 pb-6 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-heading text-sm uppercase tracking-wider text-cream-dim transition-colors hover:text-rust"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
