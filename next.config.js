const million = require('million/compiler');
/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = million.next(
  nextConfig, { auto: { rsc: true } }
);
