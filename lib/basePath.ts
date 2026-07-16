// next/image doesn't auto-prepend basePath to `src` when
// images.unoptimized is true (required here since GitHub Pages has no
// image-optimization server) — so every hardcoded "/images/..." path needs
// this applied manually, unlike _next/static assets which Next prefixes
// automatically. NEXT_PUBLIC_BASE_PATH is set in next.config.js so it's
// available identically in both server and client bundles.
export function withBasePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
