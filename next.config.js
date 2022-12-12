/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'i.imgur.com',
      'imgur.com'
    ],
  },
}

module.exports = nextConfig
