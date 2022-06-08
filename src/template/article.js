import React from "react"
import { graphql } from "gatsby"
import SEO from "react-seo-component"
import { Box, Heading, Stack, Avatar, Text, Divider } from "@chakra-ui/core"
import Layout from "../components/layout"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import footnotes from "remark-footnotes"
import "katex/dist/katex.min.css"
import rehypeRaw from "rehype-raw"
import gfm from "remark-gfm"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

const Article = ({ location, data }) => {
  const post = data.strapiArticles
  const { siteMetadata } = data.site

  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          style={twilight}
          language={language}
          children={value}
        />
      )
    },
    image: ({ src, alt }) => {
      return (
        <Box textAlign="center">
          <Zoom>
            {console.log(src)}
            <img src={src} alt={alt} />
          </Zoom>
        </Box>
      )
    },
  }

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "")
      return !inline && match ? (
        <SyntaxHighlighter
          style={twilight}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
    img: ({ src, alt }) => {
      // console.log("src")
      if (!src.startsWith("https") && post.content_images) {
        const image = post.content_images.find(element => element.base === src)
        // console.log(image)

        return (
          <>
            {/* {image.childImageSharp && <img src={image.publicURL} alt={alt} />} */}
            {/* {!image.childImageSharp && <img src={image.publicURL} alt={alt} />} */}
            <Box textAlign="center">
              <Zoom>
                <img src={image.publicURL} alt={alt} />
              </Zoom>
            </Box>
          </>
        )
      }

      return (
        <Box textAlign="center">
          <Zoom>
            {console.log(src)}
            <img src={src} alt={alt} />
          </Zoom>
        </Box>
      )
    },
  }

  return (
    <Layout>
      <SEO
        title={post.title}
        titleTemplate={siteMetadata.title}
        description={post.summary}
        image={
          "https://www.ethereum.cn" + post.cover.childImageSharp.resize.src
        }
        pathname={"https://www.ethereum.cn" + location.pathname}
        article={true}
        siteLanguage={siteMetadata.siteLanguage}
        siteLocale={siteMetadata.siteLocale}
        twitterUsername={siteMetadata.twitterUsername}
        author={post.author}
        publishedDate={post.publishDate}
        modifiedDate={new Date(Date.now()).toISOString()}
      />

      <Box
        w="100%"
        maxW={800}
        mx="auto"
        px="30px"
        pt={["65px", "65px", "70px", "14vh"]}
        mb={["10vh", "10vh", "15vh", "20vh"]}
        mt="2rem"
      >
        <Heading
          lineHeight="7vh"
          fontWeight="700"
          fontFamily="NotoSansSC-Medium"
          color="#fff"
        >
          {post.title}
        </Heading>

        <Text
          fontSize="1rem"
          color="#a8a9a6"
          mt="4vh"
          mb="4vh"
          lineHeight="3.25vh"
        >
          {post.summary}
        </Text>
        <Divider />

        <Stack isInline mt="1.5rem" mb="2rem">
          <Avatar
            w="25px"
            h="25px"
            name={post.author}
            src={post.authorImg.childImageSharp.fixed.src}
          />
          <Text
            lineHeight="25px"
            fontSize="0.8rem"
            color="#fff"
            cursor="pointer"
          >
            {post.author}
            &nbsp; &nbsp; &nbsp; &nbsp;
            {post.publishDate}
          </Text>
        </Stack>

        <ReactMarkdown
          remarkPlugins={[remarkMath, footnotes, gfm]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          // renderers={renderers}
          components={components}
          children={post.content}
          className="content"
          escapeHtml={true}
          // renderers={{
          //   image: ({ src, alt }) => {
          //     const image = getImage(src) //  this helper function will find an image from Gatsby's GraphQL query that has the same `base` property as found image `src`

          //     return <Img fixed={image.childImageSharp.fixed} alt={alt} />
          //   },
          // }}
        />

        <Divider />
      </Box>
      {/* <Footer /> */}
    </Layout>
  )
}

export default Article

export const query = graphql`
  query Article($id: String!) {
    strapiArticles(id: { eq: $id }) {
      title
      summary
      publishDate
      author
      authorImg {
        childImageSharp {
          fixed {
            src
          }
        }
      }
      content
      content_images {
        childImageSharp {
          original {
            src
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        base
        publicURL
      }
      cover {
        childImageSharp {
          resize {
            src
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
        keywords
        siteLanguage
        siteLocale
        siteUrl
        twitterUsername
      }
    }
  }
`
