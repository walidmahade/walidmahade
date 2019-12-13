const sitemap = require('nextjs-sitemap-generator');

sitemap({
    alternateUrls: {},
    baseUrl: 'https://mahade.dev',
    ignoredPaths: [],
    pagesDirectory: __dirname + "\\pages",
    targetDirectory: 'static/',
    nextConfigPath: __dirname + "\\next.config.js",
    ignoredExtensions: [],
    pagesConfig: {
        // '/login': {
        //     priority: '0.5',
        //     changefreq: 'daily'
        // }
    }
});