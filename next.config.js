const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: "loose" },
  webpack(config) {
    // Make sure Next.js can resolve Prisma generated ESM files
    config.resolve.alias["@prisma/client"] = path.resolve(
      __dirname,
      "src/generated/prisma/client.js"
    );
    return config;
  },
};

module.exports = nextConfig;
