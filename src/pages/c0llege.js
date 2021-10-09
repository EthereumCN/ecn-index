import React from "react"
import {
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/core"
import { Link } from "gatsby"
import SEO from "react-seo-component"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
// 引入video
import EachVideo from "../components/videoCompound/eachVideo"
// 底部
import Footer from "../components/FooterComponents/Footer"
import { FcFilmReel } from "react-icons/fc"
import videoDealogModule from "../components/videoCompound/videoDialog.module.css"

const C0llege = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiCollegeVideos(limit: 4, sort: { fields: date, order: DESC }) {
        nodes {
          date
          title
          videoSource
          author
          cover {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
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
      allStrapiTrivias {
        nodes {
          info
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="零时学院"
        titleTemplate={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        image={"https://ethereum.cn"}
        pathname={"https://ethereum.cn/c0llege"}
        siteLanguage={data.site.siteMetadata.siteLanguage}
        siteLocale={data.site.siteMetadata.siteLocale}
        twitterUsername={data.site.siteMetadata.twitterUsername}
        author={data.site.siteMetadata.author}
        publishedDate={data.site.siteMetadata.lastBuildDate}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      {/* Breadcrumb */}
      <Breadcrumb color="#fff" mt="10rem" mb="3rem">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            首页
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            零时学院
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {/* pc端 */}
      <Box display={["none", "none", "inline", "inline"]}>
        <Box mb="8rem">
          {/* 第一行 */}
          <Flex justifyContent="space-between" backgroundColor="#111415">
            {/* 左侧栏 */}
            <Box w="58%" backgroundColor="#191b1c">
              <Heading color="#fff" mb="1rem">
                简介
              </Heading>
              <Text color="#fff" mb="1rem">
                以太坊 (Ethereum)
                是一个基于区块链技术，为去中心化应用程序而生的全球开源平台。在以太坊上，所有人都可以管理数字资产，编写智能合约，开发或者运行程序，而且不受地域限制。
              </Text>
              <Text color="#fff" mb="1rem">
                以太坊主要创始人 Vitalik Buterin
                受到比特币及社区的启发，在2013年末发布了以太坊白皮书《以太坊：下一代加密货币与去中心化应用平台》，并在2014年1月宣布正式启动以太坊项目。
              </Text>
              <Text color="#fff" mb="1rem">
                不同于比特币，以太坊经过一系列的重新设计，包括 EVM
                (以太坊虚拟机，Etheruem Virtual
                Machine)、账户系统和智能合约等系统组件，释放了区块链前所未有的潜力。
              </Text>

              {/* 下一栏 */}
              <Heading color="#fff" mb="1rem">
                以太坊&nbsp;2.0
              </Heading>
              <Text color="#fff" mb="1rem">
                以太坊下一步的重要网络升级称为 Ethereum 2.0，eth2 或
                Serenity，将带来权益证明共识机制 (Proof of Stake)、分片
                (Sharding) 等重大改变。
              </Text>
              <Text color="#fff" mb="1rem">
                以太坊2.0于2020年开始分阶段推进，首先上线的是阶段0 (Phase 0)。
              </Text>
              <Text color="#fff" mb="1rem">
                每个阶段都将从不同方面对以太坊区块链的功能和性能进行优化，以提升网络的扩容性、吞吐量和安全性。根据最新的路线图，理论上以太坊2.0最终的吞吐量将达到10万/秒。
              </Text>
            </Box>

            {/* 右侧栏 */}
            <Box w="40%" backgroundColor="#0d0f11">
              {/* 右侧第一栏 */}
              <Flex justifyContent="space-between" h="50%">
                {/* 左侧/右侧 */}
                <Box w="49%" backgroundColor="#16191a">
                  <Heading color="#fff" mb="0.8rem">
                    目录
                  </Heading>
                  <Text color="#fff" mb="0.8rem">
                    <a href="https://knol.ethereum.cn/" target="_blank">
                      Hello 以太坊
                    </a>
                  </Text>
                  {/* <Text color="#fff" mb="0.8rem">
                    <a
                      href="https://knol.ethereum.cn/use_ethereum"
                      target="_blank"
                    >
                      使用以太坊
                    </a>
                  </Text> */}
                  <Text color="#fff" mb="0.8rem">
                    <a href="https://eth2.ethereum.cn/"> ETH 2.0 </a>
                  </Text>
                  <Text color="#fff" mb="0.8rem">
                    <a href="https://knol.ethereum.cn/glossary">
                      {" "}
                      以太坊术语列表
                    </a>
                  </Text>
                  <Text color="#fff" mb="0.8rem">
                    <a href="https://layer2.ethereum.cn/ZK_Rollups">
                      {" "}
                      Layer2 扩容
                    </a>
                  </Text>
                </Box>

                <Box w="49%" backgroundColor="#141618">
                  <Heading color="#fff" mb="1rem" textAlign="right">
                    冷知识
                  </Heading>
                  <Text color="#fff" mb="1rem" fontSize="1.5vw">
                    {data.allStrapiTrivias.nodes[0].info}
                  </Text>
                </Box>
              </Flex>
              {/* 第二栏 */}
              <Box
                mt="1%"
                backgroundColor="#121516"
                h="48%"
                color="#fff"
                position="realative"
              >
               

                <Box py="0.5rem">
                  <Link
                    href="https://eth2.ethereum.cn/eth2-chang-jian-wen-ti-jie-da/#%E4%BB%A5%E5%A4%AA%E5%9D%8A20%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"
                    target="_blank"
                    color="#fff"
                    mb=".5rem"
                    mt="1rem"
                  >
                    以太坊2.0是什么？
                  </Link>
                </Box>
                <Box py="0.5rem">
                  <Link
                    href="https://eth2.ethereum.cn/eth2-chang-jian-wen-ti-jie-da/#%E4%BB%A5%E5%A4%AA%E5%9D%8A10%E5%92%8C%E4%BB%A5%E5%A4%AA%E5%9D%8A20%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"
                    target="_blank"
                    color="#fff"
                    mb=".5rem"
                  >
                    以太坊1.0和以太坊2.0的区别是什么？
                  </Link>
                </Box>
                <Box py="0.5rem">
                  <Link
                    href="https://eth2.ethereum.cn/eth2-chang-jian-wen-ti-jie-da/#%E4%BB%A5%E5%A4%AA%E5%9D%8A20%E5%AE%9E%E7%8E%B0%E4%B9%8B%E5%90%8E%E4%BC%9A%E5%B8%A6%E6%9D%A5%E4%BB%80%E4%B9%88%E6%94%B9%E5%8F%98%EF%BC%9F"
                    target="_blank"
                    color="#fff"
                    mb=".5rem"
                  >
                    以太坊2.0实现之后会带来什么改变？
                  </Link>
                </Box>
                <Box py="0.5rem">
                  <Link
                    href="https://eth2.ethereum.cn/eth2-chang-jian-wen-ti-jie-da/#%E4%BB%A5%E5%A4%AA%E5%9D%8A20%E4%B8%AD%E7%9A%84proof-of-stake%EF%BC%88%E6%9D%83%E7%9B%8A%E8%AF%81%E6%98%8E%EF%BC%89%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"
                    target="_blank"
                    color="#fff"
                    mb=".5rem"
                  >
                    以太坊2.0中的Proof of Stake（权益证明）是什么？
                  </Link>
                </Box>
                <Box py="0.5rem">
                  <Link
                    href="https://eth2.ethereum.cn/eth2-chang-jian-wen-ti-jie-da/#%E5%A6%82%E4%BD%95%E5%8F%82%E4%B8%8E%E4%BB%A5%E5%A4%AA%E5%9D%8A20%E7%9A%84staking%EF%BC%9F"
                    color="#fff"
                    target="_blank"
                    mb=".5rem"
                  >
                    如何参与以太坊2.0的staking？
                  </Link>
                </Box>
                <Heading textAlign="right">FAQ</Heading>
              </Box>
            </Box>
          </Flex>

          {/* 第二栏 */}

          <Box mx="5vw" mt="8rem">
            <Heading color="#fff">
              <FcFilmReel style={{ display: "inline" }} />
              <Box
                ml="1rem"
                padding="0.5rem"
                borderRadius="50%"
                backgroundColor="#ff5000"
                display="inline-box"
              />{" "}
              <Box
                padding="0.5rem"
                borderRadius="50%"
                backgroundColor="#ff5000"
                display="inline-box"
              />
            </Heading>
          </Box>

          <Box mt="2rem" px={["", "", "4vw", "5vw"]}>
            <Box className={videoDealogModule.featured}>
              <EachVideo data={data.allStrapiCollegeVideos.nodes[0]} />
              <EachVideo data={data.allStrapiCollegeVideos.nodes[1]} />
              <EachVideo data={data.allStrapiCollegeVideos.nodes[2]} />
              <EachVideo data={data.allStrapiCollegeVideos.nodes[3]} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 手机端 */}
      <Box display={["inline", "inline", "none", "none"]}>
        <Box paddingX="2rem" mb="4rem">
          {/* 第一行 */}
          <Box backgroundColor="#111415">
            {/* 左侧栏 */}
            <Box>
              {/* 简介 */}
              <Heading color="#fff" mb="1rem">
                简介
              </Heading>
              <Text color="#fff" mb="1rem">
                以太坊（Ethereum）是一个基于区块链技术，为去中心化应用程序而生的全球开源平台。在以太坊上，所有人都可以管理数字资产，编写智能合约，开发或者运行运行程序，而且不受地域的限制。
              </Text>
              <Text color="#fff" mb="1rem">
                以太坊主要创始人Vitalik
                Bulerin受到比特币及社区的启发，在2013年末发布了以太坊白皮书《以太坊：下一代加密货币与去中心化应用平台》，并在2014年1月宣布正式启动以太坊项目。
              </Text>
              <Text color="#fff" mb="1rem">
                不同于比特币，以太坊听过一系列的重新设计，包括EVM（以太坊虚拟机，
                Etheruem Virtual Machine）,
                账户系统，智能合约，释放了区块链前所未有的潜力。
              </Text>
              <Divider />
              {/* 新闻 */}
              <Heading color="#fff" mb="1rem" mt="3rem">
                以太坊&nbsp;2.0
              </Heading>
              <Text color="#fff" mb="1rem">
                以太坊下一步的重要网络升级称为 Ethereum 2.0，eth2 或
                Serenity，将带来权益证明共识机制 (Proof of Stake)、分片
                (Sharding) 等重大改变。
              </Text>
              <Text color="#fff" mb="1rem">
                以太坊2.0于2020年开始分阶段推进，首先上线的是阶段0 (Phase 0)。
              </Text>
              <Text color="#fff" mb="1rem">
                每个阶段都将从不同方面对以太坊区块链的功能和性能进行优化，以提升网络的扩容性、吞吐量和安全性。根据最新的路线图，理论上以太坊2.0最终的吞吐量将达到10万/秒。
              </Text>
              <Divider />
              {/* 目录 */}
              <Heading color="#fff" mb="1rem" mt="3rem">
                目录
              </Heading>
              <Text color="#fff" mb="1rem">
                <a href="https://knol.ethereum.cn/">Hello 以太坊</a>
              </Text>
              <Text color="#fff" mb="1rem">
                <a href="https://dev.ethereum.cn/" target="_blank">
                  {" "}
                  使用以太坊
                </a>
              </Text>
              <Text color="#fff" mb="1rem">
                <a href="https://eth2.ethereum.cn/"> ETH 2.0</a>
              </Text>
              <Text color="#fff" mb="1rem">
                <a href="https://knol.ethereum.cn/glossary"> 以太坊术语列表</a>
              </Text>
              <Divider />
              {/* 冷知识 */}
              <Heading color="#fff" mb="1rem" mt="3rem">
                冷知识
              </Heading>
              <Text color="#fff" mb="1rem"></Text>
              <Divider />
              {/* FAQ */}
              <Heading color="#fff" mb="1rem" mt="3rem">
                FAQ
              </Heading>
              <Box my="0.5rem" color="#fff">
                <Link
                  href="https://eth2.ethereum.cn/eth2-chang-jian-wen-ti-jie-da/#%E4%BB%A5%E5%A4%AA%E5%9D%8A20%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"
                  target="_blank"
                  color="#fff"
                  mb=".5rem"
                  mt="1rem"
                >
                  以太坊2.0是什么？
                </Link>
              </Box>
              <Box my="0.5rem" color="#fff">
                <Link
                  href="https://eth2.ethereum.cn/eth2-chang-jian-wen-ti-jie-da/#%E4%BB%A5%E5%A4%AA%E5%9D%8A10%E5%92%8C%E4%BB%A5%E5%A4%AA%E5%9D%8A20%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"
                  target="_blank"
                  color="#fff"
                  mb=".5rem"
                >
                  以太坊1.0和以太坊2.0的区别是什么？
                </Link>
              </Box>
              <Box my="0.5rem" color="#fff">
                <Link
                  href="https://eth2.ethereum.cn/eth2-chang-jian-wen-ti-jie-da/#%E4%BB%A5%E5%A4%AA%E5%9D%8A20%E5%AE%9E%E7%8E%B0%E4%B9%8B%E5%90%8E%E4%BC%9A%E5%B8%A6%E6%9D%A5%E4%BB%80%E4%B9%88%E6%94%B9%E5%8F%98%EF%BC%9F"
                  target="_blank"
                  color="#fff"
                  mb=".5rem"
                >
                  以太坊2.0实现之后会带来什么改变？
                </Link>
              </Box>
              <Box my="0.5rem" color="#fff">
                <Link
                  href="https://eth2.ethereum.cn/eth2-chang-jian-wen-ti-jie-da/#%E4%BB%A5%E5%A4%AA%E5%9D%8A20%E4%B8%AD%E7%9A%84proof-of-stake%EF%BC%88%E6%9D%83%E7%9B%8A%E8%AF%81%E6%98%8E%EF%BC%89%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"
                  target="_blank"
                  color="#fff"
                  mb=".5rem"
                >
                  以太坊2.0中的Proof of Stake（权益证明）是什么？
                </Link>
              </Box>
              <Box my="0.5rem" color="#fff">
                <Link
                  href="https://eth2.ethereum.cn/eth2-chang-jian-wen-ti-jie-da/#%E5%A6%82%E4%BD%95%E5%8F%82%E4%B8%8E%E4%BB%A5%E5%A4%AA%E5%9D%8A20%E7%9A%84staking%EF%BC%9F"
                  color="#fff"
                  target="_blank"
                  mb=".5rem"
                >
                  如何参与以太坊2.0的staking？
                </Link>
              </Box>
            </Box>

            {/* 右侧栏 */}

            <Box mt="5rem" backgroundColor="#161a1f">
              <Heading color="#fff">
                视频
                <Box
                  ml="2rem"
                  padding="0.5rem"
                  borderRadius="50%"
                  backgroundColor="#ff5000"
                  display="inline-box"
                />{" "}
                <Box
                  padding="0.5rem"
                  borderRadius="50%"
                  backgroundColor="#ff5000"
                  display="inline-box"
                />
              </Heading>
            </Box>

            <Box mt="2rem">
              <EachVideo data={data.allStrapiCollegeVideos.nodes[0]} />
            </Box>

            <Box mt="2rem">
              <EachVideo data={data.allStrapiCollegeVideos.nodes[1]} />
            </Box>

            <Box mt="2rem">
              <EachVideo data={data.allStrapiCollegeVideos.nodes[2]} />
            </Box>

            <Box mt="2rem">
              <EachVideo data={data.allStrapiCollegeVideos.nodes[3]} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 手机端end */}

      {/* <Footer /> */}
    </Layout>
  )
}

export default C0llege
