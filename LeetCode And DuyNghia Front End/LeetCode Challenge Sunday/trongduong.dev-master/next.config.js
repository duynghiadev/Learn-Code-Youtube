/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["res.cloudinary.com", "https://res.cloudinary.com"],
  },
};

module.exports = nextConfig;
