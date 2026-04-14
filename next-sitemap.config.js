/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.brianyscleaningservices.co.za",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    additionalSitemaps: [],
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/services": 0.9,
      "/about": 0.8,
      "/contact": 0.8,
      "/blog": 0.7,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
