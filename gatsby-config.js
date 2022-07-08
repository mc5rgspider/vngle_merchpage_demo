require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },

plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        password: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
        shopifyConnections: ["collections"], // source product collections too
      },
    },
  ],

}
