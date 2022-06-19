/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["cdn.sanity.io", "tokens.buildspace.so"],
  },
  i18n:{
    locales: ["en","es","pt"],
    defaultLocale: "en",
    localeDetection: true,
  },
}

module.exports = nextConfig
