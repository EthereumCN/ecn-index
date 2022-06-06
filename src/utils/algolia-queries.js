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

function pageToAlgoliaRecord(edges) {
  return edges.reduce(
    (acc, { node: { id, title, path, content, ...rest } }) => {
      if (Buffer.byteLength(content) > 90000) {
        const strBound = Math.floor(content.length / 2)
        return [
          ...acc,
          {
            objectID: id,
            title,
            path,
            content: content.slice(0, strBound),
            ...rest,
          },
          {
            objectID: id,
            title,
            path,
            content: content.slice(strBound + 1),
            ...rest,
          },
        ]
      } else {
        return [
          ...acc,
          {
            objectID: id,
            title,
            path,
            content,
            ...rest,
          },
        ]
      }
    },
    []
  )
}

const queries = [
  {
    query: pageQuery,
    // transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    transformer: ({ data }) => pageToAlgoliaRecord(data.pages.edges),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
