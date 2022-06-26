/** @type {import('next').NextConfig} */
const nextConfig = {
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
