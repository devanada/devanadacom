/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "showwcase-companies-logos.s3-accelerate.amazonaws.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
