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
