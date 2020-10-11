require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle:`Hitrust`,
    siteTitleAlt: `Hitrust`,
    siteHeadline: `Hitrust's Blog`,
    siteUrl: `https://h1trust.github.io`,
    siteDescription: 'Rustaceans from HIT',
    author: `@raptazure`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        feedTitle: 'Hitrust',
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          }
        ],
        externalLinks: [
          {
            name: 'RSS',
            url:'https://h1trust.github.io/rss.xml'
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/h1trust`,
          },
          {
            name: `Discord`,
            url: `https://discord.com/invite/dHJCEsC`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/h1trust`
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hitrust - Rustaceans from HIT`,
        short_name: `h1trust`,
        description: `Rustaceans from Harbin Institute of Technology`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
