import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import site from "@/data/site.json";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Mirrors the basePath logic in next.config.js. Duplicated (not imported)
// because next.config.js is CommonJS and this file is compiled as ESM —
// icons.icon needs an absolute, basePath-prefixed path since (unlike
// openGraph/twitter images) it isn't resolved against metadataBase.
function getBasePath(): string {
  if (process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split("/")[1];
    if (!repoName.endsWith(".github.io")) return `/${repoName}`;
  }
  return "";
}

export const metadata: Metadata = {
  // Trailing slash matters: GitHub Pages serves this under /Alyf2Ride/, and
  // relative image paths below resolve against this base — without the
  // trailing slash, URL resolution drops the /Alyf2Ride segment entirely.
  metadataBase: new URL(`${site.url}/`),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "images/og-cover.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["images/og-cover.jpg"],
  },
  icons: {
    icon: `${getBasePath()}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main className="pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
