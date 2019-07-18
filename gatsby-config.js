module.exports = {
  siteMetadata: {
    title: "Groovrick",
    titleTemplate: "%s · Advancing Beyond",
    description: "We are the next generation of digital world.",
    url: "https://www.groovrick.com", // No trailing slash allowed!
    image: "/images/groovrick-logo.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-jsx`,
      options: {
        optimizeForSpeed: true,
        sourceMaps: false,
        vendorPrefixes: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Groovrick",
        short_name: "Groovrick",
        start_url: "/",
        background_color: "#121023",
        theme_color: "#121023",
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-143013502-1",
      },
    },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: "2180577912061107",
    //   },
    // },
  ],
}
