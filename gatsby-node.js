const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/template/article.js`)
  const technologyCategory = path.resolve(`src/template/technologyCategory.js`)
  const ether2Category = path.resolve(`src/template/ether2Category.js`)
  const ether1Category = path.resolve(`src/template/ether1Category.js`)
  const stakingCategory = path.resolve(`src/template/stakingCategory.js`)
  const ecosystemCategory = path.resolve(`src/template/ecosystemCategory.js`)
  const announcementCategory = path.resolve(
    `src/template/announcementCategory.js`
  )
  const activityCategory = path.resolve(`src/template/activityCategory.js`)
  const thinkingCategory = path.resolve(`src/template/thinkingCategory.js`)
  const defiCategory = path.resolve(`src/template/defiCategory.js`)
  const layer2Category = path.resolve(`src/template/layer2Category.js`)
  const authorCategory = path.resolve(`src/template/authorCategory.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
  {
    articles: allStrapiArticles {
      nodes {
        id,
        strapiId,
        title,
        path
      }
    }
    defi: allStrapiArticles(filter: {mainTag: {eq: "DeFi"}}) {
      nodes {
        id,
        strapiId,
        path
      }
    }
    thinking: allStrapiArticles(filter: {mainTag: {eq: "Thinking"}}) {
      nodes {
        id,
        strapiId,
        path
      }
    }
    activity: allStrapiArticles(filter: {mainTag: {eq: "Activity"}}) {
      nodes {
        id,
        strapiId,
        path
      }
    }
    announcement: allStrapiArticles(filter: {mainTag: {eq: "Announcement"}}) {
      nodes {
        id,
        strapiId,
        path
      }
    }
    ecosystem: allStrapiArticles(filter: {mainTag: {eq: "Ecosystem"}}) {
      nodes {
        id,
        strapiId,
        path
      }
    }
    staking: allStrapiArticles(filter: {mainTag: {eq: "Staking"}}) {
      nodes {
        id,
        strapiId,
        path
      }
    }
    eth1x: allStrapiArticles(filter: {mainTag: {eq: "Eth1x"}}) {
      nodes {
        id,
        strapiId,
        path
      }
    }
    eth2: allStrapiArticles(filter: {mainTag: {eq: "Eth2"}}) {
      nodes {
        id,
        strapiId,
        path
      }
    }
    technology: allStrapiArticles(filter: {mainTag: {eq: "Technology"}}) {
      nodes {
        id,
        strapiId,
        path
      }
    }
    
    layer2: allStrapiArticles(filter: {mainTag: {eq: "Layer2"}}) {
      nodes {
        id,
        strapiId,
        path
      }
    }

  }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.articles.nodes.forEach(post => {
      createPage({
        // Path for this page — required
        path: post.path,
        component: blogPostTemplate,
        context: {
          id: post.id,
        },
      })
    })



    paginate({
      createPage,
      items: result.data.defi.nodes,
      itemsPerPage: 5,
      pathPrefix: `/DeFi`,
      component: defiCategory,
    })

    paginate({
      createPage,
      items: result.data.thinking.nodes,
      itemsPerPage: 5,
      pathPrefix: `/Thinking`,
      component: thinkingCategory,
    })

    paginate({
      createPage,
      items: result.data.activity.nodes,
      itemsPerPage: 5,
      pathPrefix: `/Activity`,
      component: activityCategory,
    })

    paginate({
      createPage,
      items: result.data.announcement.nodes,
      itemsPerPage: 5,
      pathPrefix: `/Announcement`,
      component: announcementCategory,
    })

    paginate({
      createPage,
      items: result.data.ecosystem.nodes,
      itemsPerPage: 5,
      pathPrefix: `/Ecosystem`,
      component: ecosystemCategory,
    })

    paginate({
      createPage,
      items: result.data.staking.nodes,
      itemsPerPage: 5,
      pathPrefix: `/Staking`,
      component: stakingCategory,
    })

    paginate({
      createPage,
      items: result.data.eth1x.nodes,
      itemsPerPage: 5,
      pathPrefix: `/Eth1x`,
      component: ether1Category,
    })

    paginate({
      createPage,
      items: result.data.eth2.nodes,
      itemsPerPage: 5,
      pathPrefix: `/Eth2`,
      component: ether2Category,
    })

    paginate({
      createPage,
      items: result.data.technology.nodes,
      itemsPerPage: 5,
      pathPrefix: `/Technology`,
      component: technologyCategory,
    })


    paginate({
      createPage,
      items: result.data.technology.nodes,
      itemsPerPage: 5,
      pathPrefix: `/Layer2`,
      component: layer2Category,
    })
  })
}
