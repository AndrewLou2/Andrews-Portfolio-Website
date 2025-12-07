/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const repoName = "Andrews-Portfolio-Website";

const nextConfig = {
  output: "export",
  // Only apply basePath in production (GitHub Pages)
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
