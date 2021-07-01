const escapeStringRegexp = require("escape-string-regexp")

const indexName = `Pages`

const pageQuery = `{
  pages:   allStrapiArticles {
    edges {
      node {
        id
        title
        path
        summary
        content
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, title, path, ...rest } }) {
  return {
    objectID: id,
    title,
    path,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
