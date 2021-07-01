import React from "react"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/core"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "react-seo-component"
import Layout from "../components/layout"
// 事件栏
import EcoSystemBox from "../components/ecoSystemBox/ecoSystemBox"
// 引入video
import EachVideo from "../components/videoCompound/eachVideo"

import Hor from "../HorizontalScroller"
import gridModule from "../components/css/buttom.module.css"

const Ecosystem = () => {
  // 获取数据
  const data = useStaticQuery(graphql`
    {
      event: allStrapiCalendars(sort: { order: ASC, fields: date }) {
        nodes {
          eventName
          date(formatString: "YYYY.MM")
          location
          link
          eventPicture {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      video: allStrapiEcoSystemVideos(
        limit: 7
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          date
          title
          author
          videoSource
          cover {
            childImageSharp {
              fluid {
                src
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
    }
  `)

  return (
    <Box>
      <Layout>
        <SEO
          title="生态漫游"
          titleTemplate={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          image={"https://ethereum.cn"}
          pathname={"https://ethereum.cn/ecos"}
          siteLanguage={data.site.siteMetadata.siteLanguage}
          siteLocale={data.site.siteMetadata.siteLocale}
          twitterUsername={data.site.siteMetadata.twitterUsername}
          author={data.site.siteMetadata.author}
          publishedDate={data.site.siteMetadata.lastBuildDate}
          modifiedDate={new Date(Date.now()).toISOString()}
        />
        {/* pc端 */}
        <Box mb="8rem">
          {/* Breadcrumb */}
          <Breadcrumb color="#fff" mt="10rem" mb="3rem">
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">
                首页
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={Link} to="#">
                生态漫游
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* 活动 */}
          <Box textAlign="center" mt="3vh" className={gridModule.box}>
            {data.event.nodes.map((item, index) => {
              return <EcoSystemBox index={index} data={item} />
            })}
          </Box>

          {/* 走马图 */}
          <Box mt="10vh" className={gridModule.swip}>
            <Hor>
              <Box key={0} w="300px" h="200px">
                <EachVideo swip={1} data={data.video.nodes[0]} />
              </Box>
              <Box ml="2rem" key={1} w="300px" h="200px">
                <EachVideo swip={1} data={data.video.nodes[1]} />
              </Box>
              <Box ml="2rem" key={2} w="300px" h="200px">
                <EachVideo swip={1} data={data.video.nodes[2]} />
              </Box>
              <Box ml="2rem" key={3} w="300px" h="200px">
                <EachVideo swip={1} data={data.video.nodes[3]} />
              </Box>
              <Box ml="2rem" key={4} w="300px" h="200px">
                <EachVideo swip={1} data={data.video.nodes[4]} />
              </Box>
              <Box ml="2rem" key={5} w="300px" h="200px">
                <EachVideo swip={1} data={data.video.nodes[5]} />
              </Box>
              <Box ml="2rem" key={6} w="300px" h="200px">
                <EachVideo swip={1} data={data.video.nodes[6]} />
              </Box>
            </Hor>
          </Box>
        </Box>
        {/* <Footer /> */}
      </Layout>
    </Box>
  )
}

export default Ecosystem
