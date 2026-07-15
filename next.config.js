const isGithubActions = process.env.GITHUB_ACTIONS === "true";

// GitHub Pages serves project repos at /<repo-name>/, so every asset/link
// needs that prefix. It's derived automatically from GITHUB_REPOSITORY
// (set by Actions as "owner/repo") so this doesn't need to be hardcoded or
// updated if the repo is renamed. A "<user>.github.io" repo serves at the
// root instead, so it's excluded.
let basePath = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repoName = process.env.GITHUB_REPOSITORY.split("/")[1];
  if (!repoName.endsWith(".github.io")) {
    basePath = `/${repoName}`;
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
