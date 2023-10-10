// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// };
const {i18n} = require("./next-i18next.config")
// const {nextI18NextRewrites} = require("next-i18next/rewrites")

// const localSubpaths = {
//   uk:"uk"
// }
module.exports = {
// rewrites: async () => nextI18NextRewrites(localSubpaths),
i18n,
  images: {
    domains: ["localhost"] // Add other domains if needed
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
 
    });
    config.resolve.fallback = { fs: false };

    return config;
  }
};
