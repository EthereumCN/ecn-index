import React from "react"
import { PseudoBox, Box } from "@chakra-ui/core"
import Item from "./PhoneItem"
import { useStaticQuery, graphql } from "gatsby"

const PhoneSecondRow = () => {

  const data = useStaticQuery(graphql`
    {
      allStrapiArticles(
        filter: { showTheArticle: { eq: true } }
        limit: 3
        sort: { fields: publishDate, order: DESC }
      ) {
        nodes {
          id
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
    <PseudoBox
      mt="4rem"
      minH="100%"
      display="flex"
      flexDir="column"
    >
      {/* {console.log(nodes)} */}
      {/* 第一栏 */}
      <Box h="33.3%" paddingY="2rem">
        <Item data={nodes[0]} order="flex-start" />
      </Box >
      {/* 第二栏 */}
      <Box paddingY="2rem" h="33.3%" borderY="1px solid #ccc">
        <Item data={nodes[1]} order="auto" />
      </Box>
      {/* 第三栏 */}
      <Box paddingY="2rem" h="33.3%">
        <Item data={nodes[2]} order="flex-end" />
      </Box>
    </PseudoBox>
  )
}

export default PhoneSecondRow
