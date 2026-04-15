/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.brianyscleaning.co.za",
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
    // Core pages — highest priority
    const corePriorities = {
      "/": 1.0,
      "/services": 0.9,
      "/about": 0.85,
      "/contact": 0.85,
      "/areas": 0.9,
      "/blog": 0.7,
    };

    if (corePriorities[path] !== undefined) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: corePriorities[path],
        lastmod: new Date().toISOString(),
      };
    }

    // Area overview pages: /areas/[area]
    if (/^\/areas\/[^/]+$/.test(path)) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.85,
        lastmod: new Date().toISOString(),
      };
    }

    // Area + service pages: /areas/[area]/[service]
    if (/^\/areas\/[^/]+\/[^/]+$/.test(path)) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
