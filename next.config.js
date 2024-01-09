// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// };
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: ['res.cloudinary.com'],
    // domains: ["localhost"], // Add other domains if needed
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.fallback = { fs: false };

    return config;
  },
};
