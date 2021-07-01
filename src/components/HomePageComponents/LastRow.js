import React from "react"
import { Flex, Box, Text, Heading } from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { FcPlanner } from "react-icons/fc"

const LastRow = () => {
  const data = useStaticQuery(graphql`
    {
      Thinking: allStrapiArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 1
        filter: { mainTag: { eq: "Thinking" } }
      ) {
        nodes {
          id
          path
          title
          mainTag
          publishDate
          summary
          author
          authorImg {
            childImageSharp {
              fixed(width: 32, height: 32) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      Announcement: allStrapiArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 1
        filter: { mainTag: { eq: "Announcement" } }
      ) {
        nodes {
          id
          path
          title
          mainTag
          publishDate
          summary
          author
          authorImg {
            childImageSharp {
              fixed(width: 32, height: 32) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      Activity: allStrapiArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 1
        filter: { mainTag: { eq: "Activity" } }
      ) {
        nodes {
          id
          path
          title
          mainTag
          publishDate
          summary
          author
          authorImg {
            childImageSharp {
              fixed(width: 32, height: 32) {
                ...GatsbyImageSharpFixed
              }
            }
          }
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

  let Thinking = data.Thinking.nodes
  let Announcement = data.Announcement.nodes
  let Activity = data.Activity.nodes

  return (
    <Flex
      color="#fff"
      flexWrap="wrap"
      mt="3rem"
      justifyContent="space-between"
      mb="7rem"
      paddingY="2rem"
      borderY="1px solid #ccc"
    >
      {/* 第一栏 */}
      <Flex
        justifyContent="flex-start"
        flexDir="column"
        w={["100%", "100%", "30%", "30%"]}
      >
        {/* tag */}
        <Link to={Thinking[0].mainTag}>
          {/* tag     */}
          <Heading
            as="h6"
            fontSize="1rem"
            fontWeight="900"
            color="#ee771c"
            borderRadius="2rem"
            display="inline-box"
            mb="1rem"
            fontFamily="Roboto-Black"
          >
            {/* <FcIdea style={{ marginRight: "0.5rem" }} /> */}
            <section> 💡 &nbsp; 思辨</section>
          </Heading>
        </Link>
        {/* title */}
        <Link to={Thinking[0].path}>
          <Heading
            fontSize="1.5rem"
            mb="0.5rem"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {Thinking[0].title}
          </Heading>

          {/* summary */}
          <Text>{Thinking[0].summary}</Text>
        </Link>
      </Flex>
      {/* 第二栏 */}
      <Box borderLeft="1px solid #aaa" />
      <Flex
        justifyContent="flex-start"
        flexDir="column"
        w={["100%", "100%", "30%", "30%"]}
      >
        {/* tag */}
        <Link to={Announcement[0].mainTag}>
          {/* tag     */}
          <Heading
            as="h6"
            fontSize="1rem"
            color="#ee771c"
            borderRadius="2rem"
            fontWeight="900"
            display="inline-box"
            mb="1rem"
          >
            {/* <FcConferenceCall style={{ marginRight: "0.5rem" }} /> */}
            <section> 📢 &nbsp; 通告</section>
          </Heading>
        </Link>
        {/* title */}
        <Link to={Announcement[0].path}>
          <Heading
            fontSize="1.5rem"
            mb="0.5rem"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {Announcement[0].title}
          </Heading>

          {/* summary */}
          <Text>{Announcement[0].summary}</Text>
        </Link>
      </Flex>
      {/* 第三栏 */}
      <Box borderLeft="1px solid #aaa" />
      <Flex
        justifyContent="flex-start"
        flexDir="column"
        w={["100%", "100%", "30%", "30%"]}
      >
        {/* tag */}
        <Link to={Activity[0].mainTag}>
          {/* tag     */}
          <Heading
            as="h6"
            fontSize="1rem"
            color="#ee771c"
            borderRadius="2rem"
            fontWeight="900"
            display="inline-box"
            mb="1rem"
          >
            <FcPlanner style={{ marginRight: "0.5rem" }} />
            活动
          </Heading>
        </Link>
        {/* title */}
        <Link to={Activity[0].path}>
          <Heading
            fontSize="1.5rem"
            mb="0.5rem"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {Activity[0].title}
          </Heading>
          {/* summary */}
          <Text>{Activity[0].title}</Text>
        </Link>
      </Flex>
    </Flex>
  )
}

export default LastRow
