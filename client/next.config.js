// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// };

module.exports = {
  images: {
    domains: ["localhost"] // Add other domains if needed
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
