/** @type {import('next').NextConfig} */
module.exports = {
    experimental: {
    images: {
        layoutRaw: true,
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [325, 425, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
  },
  reactStrictMode: true,
}