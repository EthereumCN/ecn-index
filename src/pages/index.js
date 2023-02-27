import React from "react"
import SEO from "react-seo-component"
import { Flex, Box } from "@chakra-ui/core"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import LastRow from "../components/HomePageComponents/LastRow"
import { Link } from "gatsby"
// 第一栏
import News from "../components/HomePageComponents/News"
import Selected from "../components/HomePageComponents/Selected"

// 第三栏
import Eachrow from "../components/HomePageComponents/Eachrow"

// 手机端第一栏
import PhoneFirstRow from "../components/HomePageComponents/PhoneFirstRow"

// 手机端最新
import PhoneSecondRow from "../components/HomePageComponents/PhoneSecondRow"

// 手机端按钮
import PhoneButton from "../components/HomePageComponents/PhoneButton"

// 各个栏目分配
import PhoneEachRow from "../components/HomePageComponents/PhoneEachRow"

// 底部
import Footer from "../components/FooterComponents/Footer"
import ExpressView from "../components/HomePageComponents/ExpressView/index"

const Index = () => {
  // const {siteMetadata} = props.data.site

  const data = useStaticQuery(graphql`
    {
      Eth2: allStrapiArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 3
        filter: { mainTag: { eq: "Eth2" } }
      ) {
        nodes {
          id
          chineseMainTag
          path
          title
          mainTag
          publishDate(formatString: "YYYY/MM/DD")
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
      Layer2: allStrapiArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 3
        filter: { mainTag: { eq: "Layer2" } }
      ) {
        nodes {
          id
          chineseMainTag
          path
          title
          mainTag
          publishDate(formatString: "YYYY/MM/DD")
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

      Technology: allStrapiArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 3
        filter: { mainTag: { eq: "Technology" } }
      ) {
        nodes {
          id
          chineseMainTag
          path
          title
          mainTag
          publishDate(formatString: "YYYY/MM/DD")
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
      Staking: allStrapiArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 3
        filter: { mainTag: { eq: "Staking" } }
      ) {
        nodes {
          id
          chineseMainTag
          path
          title
          mainTag
          publishDate(formatString: "YYYY/MM/DD")
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
      DeFi: allStrapiArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 3
        filter: { mainTag: { eq: "DeFi" } }
      ) {
        nodes {
          id
          chineseMainTag
          path
          title
          mainTag
          publishDate(formatString: "YYYY/MM/DD")
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
      Eth1x: allStrapiArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 3
        filter: { mainTag: { eq: "Eth1x" } }
      ) {
        nodes {
          id
          chineseMainTag
          path
          title
          mainTag
          publishDate(formatString: "YYYY/MM/DD")
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
      Ecosystem: allStrapiArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 3
        filter: { mainTag: { eq: "Ecosystem" } }
      ) {
        nodes {
          id
          chineseMainTag
          path
          title
          mainTag
          publishDate(formatString: "YYYY/MM/DD")
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
      Thinking: allStrapiArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 3
        filter: { mainTag: { eq: "Thinking" } }
      ) {
        nodes {
          id
          chineseMainTag
          path
          title
          mainTag
          publishDate(formatString: "YYYY/MM/DD")
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
        limit: 3
        filter: { mainTag: { eq: "Announcement" } }
      ) {
        nodes {
          id
          chineseMainTag
          path
          title
          mainTag
          publishDate(formatString: "YYYY/MM/DD")
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
        limit: 3
        filter: { mainTag: { eq: "Activity" } }
      ) {
        nodes {
          id
          chineseMainTag
          path
          title
          mainTag
          publishDate(formatString: "YYYY/MM/DD")
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
      file(name: { eq: "hero" }) {
        childrenImageSharp {
          fixed {
            src
          }
        }
      }
    }
  `)

  let Eth2 = data.Eth2.nodes
  let Layer2 = data.Layer2.nodes
  let Technology = data.Technology.nodes
  let Staking = data.Staking.nodes
  let DeFi = data.DeFi.nodes
  let Eth1x = data.Eth1x.nodes
  let Ecosystem = data.Ecosystem.nodes
  let Thinking = data.Thinking.nodes
  let Announcement = data.Announcement.nodes
  let Activity = data.Activity.nodes

  return (
    <Layout>
      <SEO
        title="以太坊中文"
        titleTemplate={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        image={
          "https://ethereum.cn" + data.file.childrenImageSharp[0].fixed.src
        }
        pathname={"https://www.ethereum.cn"}
        siteLanguage={data.site.siteMetadata.siteLanguage}
        siteLocale={data.site.siteMetadata.siteLocale}
        twitterUsername={data.site.siteMetadata.twitterUsername}
        author={data.site.siteMetadata.author}
        publishedDate={data.site.siteMetadata.lastBuildDate}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      {/* pc端 */}
      <Box display={["none", "none", "inline", "inline"]} margin="0 auto">
        {/* 第一栏 */}
        <Flex
          minH={"577px"}
          mt="10rem"
          flexWrap="wrap"
          justifyContent="space-between"
          align={"center"}
        >
          <Selected />
          <News />
          <ExpressView />
        </Flex>
        {/* 第二栏 */}
        {/* <Box
          backgroundColor="#fff"
          w={["100%", "100%", "100%", "75%"]}
          margin="0 auto"
          mt={["2rem", "2rem", "2rem", "8rem"]}
        >
          <Swiper />
        </Box> */}
        <Box h="3.5rem" />
        {/* 第三栏 */}
        <Eachrow data={Eth2} rowName="共识层" />

        <Eachrow data={Layer2} rowName="扩容方案" />
        {/* 第四栏 */}
        <Eachrow data={Technology} rowName="技术" />
        {/* 第五栏 */}
        <Eachrow data={Staking} rowName="Staking" />
        {/* 第六栏 */}
        <Eachrow data={DeFi} rowName="DeFi" />
        {/* 第七栏 */}
        <Eachrow data={Eth1x} rowName="执行层" />
        {/* 第八栏 */}
        <Eachrow data={Ecosystem} rowName="生态" />
        {/* 第九栏目 */}
        <LastRow />
      </Box>

      {/* 手机端 */}
      <Box display={["inline", "inline", "none", "none"]}>
        <PhoneFirstRow />
        <PhoneSecondRow />

        {/* 第一个导航按钮 */}
        <Link to="Eth2">
          <PhoneButton color="red" value="共识层" />
        </Link>
        <PhoneEachRow data={Eth2[0]} />

        {/* 第一个导航按钮 */}
        <Link to="Layer2">
          <PhoneButton color="cyan" value="扩容方案" />
        </Link>
        <PhoneEachRow data={Layer2[0]} />

        <Link to="Technology">
          <PhoneButton color="yellow" value="技术" />
        </Link>
        <PhoneEachRow data={Technology[0]} />

        <Link to="Staking">
          <PhoneButton color="blue" value="Staking" />
        </Link>
        <PhoneEachRow data={Staking[0]} />

        <Link to="DeFi">
          <PhoneButton color="green" value="DeFi" />
        </Link>
        <PhoneEachRow data={DeFi[0]} />

        <Link to="Eth1x">
          <PhoneButton color="purple" value="执行层" />
        </Link>
        <PhoneEachRow data={Eth1x[0]} />

        <Link to="Ecosystem">
          <PhoneButton color="blue" value="生态" />
        </Link>
        <PhoneEachRow data={Ecosystem[0]} />

        <Link to="Thinking">
          <PhoneButton color="pink" value="思辨" />
        </Link>
        <PhoneEachRow data={Thinking[0]} />

        <Link to="Announcement">
          <PhoneButton color="purple" value="通告" />
        </Link>
        <PhoneEachRow data={Announcement[0]} />

        <Link to="Activity">
          <PhoneButton color="orange" value="活动" />
        </Link>
        <PhoneEachRow data={Activity[0]} />
      </Box>
    </Layout>
  )
}

export default Index
