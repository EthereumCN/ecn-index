import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Heading, Text, PseudoBox } from "@chakra-ui/core"
import { Link } from "gatsby"
// 第一行左侧最新文章
const News = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiArticles(sort: { order: DESC, fields: created_at }, limit: 1) {
        nodes {
          id
          path
          title
          summary
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          publishDate(formatString: "YYYY-MM-DD")
        }
      }
    }
  `)

  let news = data.allStrapiArticles.nodes[0]

  return (
  
    <Box w={["100%", "100%", "48%", "48%"]} color="white">
        <Link to={"/"+news.path}>
      {/* 最新tag     */}
      <Heading as="h2" fontSize="0.9rem" color="#ee771c">
        最新
      </Heading>
      <PseudoBox cursor="pointer" _hover={{ color: " #ee771c " }}>
        {/* title */}
        <Heading as="h1" fontSize="2rem" pt="0.1rem">
          {news.title}
        </Heading>
        {/* summary */}
        <Text pt="0.8rem" color="white">
          {news.summary}
        </Text>
      </PseudoBox>
      </Link>
      {/* 图片 */}
      <Box pt="1rem">
      <Link to={"/"+news.path}>
        <Img style={{borderRadius:"0.8rem"}} fluid={news.cover.childImageSharp.fluid} />
        </Link>
      </Box>
    </Box>

  )
}

export default News
