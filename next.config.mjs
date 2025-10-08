/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // optional, recommended
  images: {
    // Remote images allowed by domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
    // With sharp installed, keep optimization enabled
    unoptimized: false,
  },
  eslint: {
    // Skip ESLint errors during production build
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true, // optional: speeds up build by optimizing CSS
  },
};

module.exports = nextConfig;
