/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// getting environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// // require custom fonts
// require("typeface-open-sans")
// require("typeface-montserrat")

module.exports = {
  siteMetadata: {
    title: "CryptoHelper",
    author: "CryptoHelper",
    titleTemplate: "%s | CryptoHelper - Vi hjälper dig hitta rätt",
    description:
      "Vi hjälper dig hitta rätt genom att lista och ranka de bästa tjänsterna för kryptovalutor.",
    url: "https://cryptohelper.se",
    siteUrl: "https://cryptohelper.se",
    image: "/cryptohelper.png",
    twitterUsername: "",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-scroll-reveal`,
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "CryptoHelper",
        short_name: "CryptoHelper",
        start_url: "/",
        background_color: "#00bfff",
        theme_color: "#00bfff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
