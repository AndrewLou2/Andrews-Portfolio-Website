/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // For GitHub Pages deployment
  basePath: "/Andrews-Portfolio-Website",
  assetPrefix: "/Andrews-Portfolio-Website/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
