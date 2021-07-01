import React from "react"
import { PseudoBox, Box } from "@chakra-ui/core"
import Item from "./Item"
import { useStaticQuery, graphql } from "gatsby"

// 第一行右侧的三篇文章
const Selected = () => {
  // the selected data

  const data = useStaticQuery(graphql`
    {
      allStrapiArticles(
        filter: { showTheArticle: { eq: true } }
        limit: 3
        sort: { fields: publishDate, order: DESC }
      ) {
        nodes {
          id
          chineseMainTag
          path
          mainTag
          summary
          title
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  let { nodes } = data.allStrapiArticles

  return (
    // container
    <PseudoBox
      w={["100%", "100%", "48%", "48%"]}
      minH="100%"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      {/* {console.log(nodes)} */}
      {/* 第一栏 */}
      <Box h="31%">
        <Item data={nodes[0]} order="flex-start" />
      </Box>
      {/* 第二栏 */}
      <Box h="38%" borderY="1px solid gray">
        <Item data={nodes[1]} order="auto" />
      </Box>
      {/* 第三栏 */}
      <Box h="31%">
        <Item data={nodes[2]} order="flex-end" />
      </Box>
    </PseudoBox>
  )
}

export default Selected
