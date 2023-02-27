import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Box,
  Heading,
  Text,
  PseudoBox,
  Flex,
  Stack,
  Avatar,
} from "@chakra-ui/core"
import { Link } from "gatsby"
// 第一行左侧最新文章
const News = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiArticles(
        filter: { showAsHeadline: { eq: true } }
        sort: { order: DESC, fields: created_at }
        limit: 1
      ) {
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
          author
          authorImg {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
      }

      fallback: allStrapiArticles(
        filter: { showTheArticle: { eq: true } }
        sort: { order: DESC, fields: created_at }
        limit: 1
      ) {
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
          author
          authorImg {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  `)

  let news = data.allStrapiArticles.nodes[0] || data.fallback.nodes[0]

  return (
    <Flex
      direction={"column"}
      justify="space-between"
      h={"550px"}
      w={["100%", "100%", "33%", "40.5%"]}
      color="white"
    >
      <Heading as="h2" fontSize="1rem" color="#ee771c">
        最新
      </Heading>
      <Box w="100%" position={"relative"}>
        <Link to={"/" + news.path}>
          <Img
            style={{
              borderRadius: "0.8rem",
            }}
            fluid={news.cover.childImageSharp.fluid}
          />
        </Link>
      </Box>
      <Link to={"/" + news.path}>
        {/* 最新tag     */}

        <PseudoBox cursor="pointer" _hover={{ color: " #ee771c " }}>
          {/* title */}
          <Heading as="h1" fontSize="2rem">
            {news.title}
          </Heading>
        </PseudoBox>
      </Link>
      {/* summary */}
      <Link to={"/" + news.path}>
        <PseudoBox cursor="pointer" _hover={{ color: " #ee771c " }}>
          <Text color="white">{news.summary}</Text>
        </PseudoBox>
      </Link>
      <Flex w="100%" h="2rem" justify={"space-between"}>
        <Flex>
          <Avatar
            w="25px"
            h="25px"
            name={news.author}
            src={news.authorImg.childImageSharp.fixed.src}
          />
          <Text
            pl="8px"
            lineHeight="25px"
            fontSize="0.8rem"
            color="#fff"
            cursor="pointer"
          >
            {news.author}
          </Text>
        </Flex>
        <Text>
          &nbsp; &nbsp; &nbsp; &nbsp;
          {news.publishDate}
        </Text>
      </Flex>

      {/* 图片 */}
    </Flex>
  )
}

export default News
