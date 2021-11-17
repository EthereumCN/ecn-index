import React from "react"
import {  Box, Heading, Divider, Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,  } from "@chakra-ui/core"
  import { Link } from "gatsby"
import SEO from 'react-seo-component'
import EachList from "../components/eachList"
import { graphql } from 'gatsby' 
import Layout from "../components/layout"
import  Paginate from '../components/Paginate'

const Category = (props) => {
  const {siteMetadata} = props.data.site
  const {childrenImageSharp} = props.data.file
  return (
    <Layout >
     <SEO
        title="ETH 1.X"
        titleTemplate={siteMetadata.title}
        description={siteMetadata.description}
        image={'https://ethereum.cn'+childrenImageSharp[0].fixed.src}
        pathname={'https://ethereum.cn'+props.path}
        siteLanguage={siteMetadata.siteLanguage}
        siteLocale={siteMetadata.siteLocale}
        twitterUsername={siteMetadata.twitterUsername}
        author={siteMetadata.author}
        publishedDate={siteMetadata.lastBuildDate}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      < Box mb="30vh">
      <Box
        w="100%"
        maxW={1080}
        mx="auto"
       
        pt={["20px", "20px", "50px", "40px"]}
        mt="2vw"
      >
          {/* Breadcrumb */}
  <Breadcrumb color="#fff" mt="4rem" mb="2rem">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">首页</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">执行层</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
        <Heading fontSize="2.5rem" fontFamily="NotoSansSC-Regular" color="#fff">
        执行层
        </Heading>
        <Divider w="100%"  borderColor="#ddd" mt="1vw" mx="auto" />
      </Box>
     

      {props.data.allStrapiArticles.nodes.map((value, index) => (
        <EachList value={value} key={index} />
      ))}
         <Box mt="6rem">
  
  <Paginate props={props}/>
</Box>
      </Box>
  
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query eth1x($skip: Int!, $limit: Int!) {
    allStrapiArticles(
      skip: $skip
      limit: $limit
      sort: {fields: publishDate, order: DESC}
      filter: { mainTag: { eq: "Eth1x" } }
    ) {
      nodes {
        id
        path
        title
        author
        summary
        authorImg {
          childImageSharp {
            fixed(width: 25, height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        publishDate(formatString: "YYYY-MM-DD")
        cover {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 450) {
              ...GatsbyImageSharpFluid
            }
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
    file(name: {eq: "hero"}) {
      childrenImageSharp {
        fixed {
          src
        }
      }
    }
  }
`
