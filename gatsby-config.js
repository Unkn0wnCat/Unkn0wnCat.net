try {
    require("dotenv").config();
} catch (e) {}

module.exports = {
    siteMetadata: {
        title: `Unkn0wnCat.net`,
        description: `A german gamer, coder, video editor.`,
        author: `@Unkn0wnKevin`,
        siteUrl: `https://unkn0wncat.net`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/sitemap.xml`,
                createLinkInHead: true,
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: `gatsby-source-youtube-v3`,
            options: {
                channelId: ["UCCoZp-6_P3CVFj4clQ6uaeg"],
                apiKey: process.env.YOUTUBE_API_KEY,
                maxVideos: 60,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unkn0wnCat.net`,
        short_name: `Unkn0wnCat.net`,
        start_url: `/`,
        background_color: `#15151f`,
        theme_color: `#1f1a3d`,
        display: `minimal-ui`,
        lang: `de`,
        icon: `src/images/Unkn0wnCat.net.png`, // This path is relative to the root of the site.
        cache_busting_mode: 'none'
      },
    },*/
    ],
};
