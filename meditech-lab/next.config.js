// next.config.js or next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.aramcolabs.com",
      "tse1.mm.bing.net",
      "tse4.mm.bing.net",
      "tse2.mm.bing.net",
      "tse3.mm.bing.net",
      "tse5.mm.bing.net",
      "www.genengnews.com",
      "www.biotecnika.org",
      "www.healthcareitnews.com",
      "static.vecteezy.com",
      "www.unilabs.ch",
      "cdn.pixabay.com", // Add this domain
    ],
  },
};

module.exports = nextConfig;
