/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
     
    unoptimized: true, // disables Next.js image optimization
  
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
