/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'placehold.jp',
        port: '',
      },
    ],
  },
}

export default nextConfig
