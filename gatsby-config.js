require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Ethereum Community Network`,
    description: `以太坊——全球的、开源的去中心化应用平台。DeFi？NFT？游戏？虚拟世界？每一个人都可以成为以太坊的开发者和用户！`,
    author: `@ECN以太坊社区网络`,
    keywords: `以太坊,以太坊中国,Ethereum,以太坊中文`,
    lastBuildDate: new Date(Date.now()).toISOString(),
    siteUrl: `http://ethereum.cn/`,
    twitterUsername: `@EthereumCN`,
    siteLanguage: `zh-CN`,
    siteLocale: `zh-cn`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },

    {
      // replace 'gatsby-plugin-google-analytics' with the new one
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          process.env.GA_MEASUREMENT_ID, // GA Measurement
        ],
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },

    {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        // baidu analytics siteId
        siteId: "4b369d441c6ae6f3f2f50d806e34e302",
        // Put analytics script in the head instead of the body [default:false]
        head: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@ecn/gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `articles`,
          `calendars`,
          `categories`,
          `college-videos`,
          `developer-videos`,
          `eco-system-videos`,
          `authors`,
          `trivias`,
        ],
        markdownImages: {
          typesToParse: {
            articles: ["content"],
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
         site {
    siteMetadata {
      title
      siteUrl
      description
        }
        }
      }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allStrapiArticles } }) =>
              allStrapiArticles.edges.map(edge =>
                Object.assign({}, edge.node, {
                  description: edge.node.summary,
                  date: edge.node.publishDate,
                  url: "https://www.ethereum.cn/" + edge.node.path,
                  guid: "https://www.ethereum.cn/" + edge.node.path,
                  custom_elements: [{ "content:encoded": edge.node.content }],
                })
              ),
            query: `
            {
              allStrapiArticles(sort: {order: DESC, fields: publishDate}, limit: 1000) {
              edges {
              node {
              content
              path
              title
              publishDate
              summary
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://ethereum.us2.list-manage.com/subscribe/post?u=ab5eff800c44ca67b27f1581f&amp;id=b6319ace8c",
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
