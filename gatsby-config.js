module.exports = {
    siteMetadata: {
        title: `Mahade Walid`,
        siteUrl: `https://mahade.me`,
        description: `UI Developer | ReactJs, NodeJs, GraphQL, CSS3, Html5`
    }
};
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                includePaths: ["src/**/*"]
            }
        },
        {
            resolve: `gatsby-plugin-react-helmet`
        }
    ]
};
