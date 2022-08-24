/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.freebiesupply.com', "images.unsplash.com", "s3.amazonaws.com"]
  }
}

module.exports = nextConfig
