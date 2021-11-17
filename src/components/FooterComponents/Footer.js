import React, { useState } from "react"
import MailchimpForm from "../MailchimpForm"
import {
  Text,
  Box,
  Link,
  useToast,
  PseudoBox,
  Button,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { FaTwitter, FaGithub, FaEnvelope, FaRss } from "react-icons/fa"
import { AiFillWechat } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri"
import { BiDonateHeart } from "react-icons/bi"
import Gitcoin from "../../images/Gitcoin.svg"
import { navigate } from "gatsby"
import { CopyToClipboard } from "react-copy-to-clipboard"

const Footer = () => {
  const toast = useToast()

  const data = useStaticQuery(graphql`
    {
      backgroundimg: file(relativePath: { eq: "footer_backgroundimg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      wechat: file(relativePath: { eq: "footer_wechat.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ethereum: file(relativePath: { eq: "footer_ethereum.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    // the box
    <Box maxW="1610px" margin="0 auto">
      <BackgroundImage
        Tag="section"
        fluid={data.backgroundimg.childImageSharp.fluid}
      >
        {/* pc */}
        <Box
          maxW="1920px"
          display={["none", "none", "inline", "inline"]}
        // py={["1rem", "1rem", "3rem", "3rem"]}
        >
          {/* first  part*/}
          {/* <Grid
          templateColumns="repeat(3,40% 20% 40%)"
          gap={4}
          px={["1rem", "1rem", "5rem", "5rem"]}
          justifyContent="space-between"
        > */}
          <Flex
            maxW="1920px"
            pt={["1rem", "1rem", "3rem", "3rem"]}
            justifyContent="space-between"
            px={["1rem", "1rem", "5rem", "5rem"]}
          >
            {/* left   */}
            <Box
              color="#fff"
              fontWeight="700"
              fontSize="2.5rem"
              justifyItems="start"
            >
              <Box as="span" color="#FF8B30">
                E
              </Box>
              thereum{" "}
              <Box as="span" color="#FF8B30">
                C
              </Box>
              ommunity{" "}
              <Box as="span" color="#FF8B30">
                N
              </Box>
              etwork
              <Box my="2rem" fontSize="2rem">
                以太坊社区网络
              </Box>
              <Box w="7rem">
                <Img fluid={data.wechat.childImageSharp.fluid} />
              </Box>
            </Box>

            {/* center  */}

            <Box
              mr="10%"
              w="13rem"
              justifyItems="center"
              display={["none", "none", "none", "inline"]}
            >
              <Img fluid={data.ethereum.childImageSharp.fluid} />
            </Box>

            {/* right */}
            <Flex
              justifyContent="space-between"
              w="368px"
              flexDir="column"
              mt="1rem"
            >
              {/* image  */}
              {/* <MailchimpForm /> */}
              {/* social */}
              <MailchimpForm />
              <Flex
                w="368px"
                fontSize="1rem"
                //   w="368px"
                justifyContent="space-between"
                color="#fff"
                margin="0 auto"
                mt="3rem"
                mb="1rem"
              >
                {/* twitter */}
                <Link
                  aria-label="twitter"
                  href="https://twitter.com/EthereumCN"
                  _hover={{ textDecoration: "none" }}
                  isExternal
                  cursor="pointer"
                  border="1px solid #fff"
                  p="0.8rem"
                  borderRadius="50%"
                >
                  {" "}
                  <FaTwitter />
                </Link>
                {/* discord */}
                <Link
                  aria-label="discord"
                  href="https://discord.gg/KUywx3JJJU"
                  _hover={{ textDecoration: "none" }}
                  isExternal
                  cursor="pointer"
                  border="1px solid #fff"
                  p="0.8rem"
                  borderRadius="50%"
                >
                  {" "}
                  <RiDiscordFill />
                </Link>
                {/* wechat */}
                <Link
                  aria-label="wechat"
                  href="https://i.ibb.co/mBgmDgF/footer-wechat.webp"
                  _hover={{ textDecoration: "none" }}
                  isExternal
                  cursor="pointer"
                  border="1px solid #fff"
                  p="0.8rem"
                  borderRadius="50%"
                >
                  {" "}
                  <AiFillWechat />
                </Link>
                {/* github */}
                <Link
                  aria-label="github"
                  href="https://github.com/EthereumCN"
                  _hover={{ textDecoration: "none" }}
                  isExternal
                  cursor="pointer"
                  border="1px solid #fff"
                  p="0.8rem"
                  borderRadius="50%"
                >
                  {" "}
                  <FaGithub />
                </Link>
                {/* email */}
                <Link
                  aria-label="Email"
                  href="Mailto:eth@ecn.co"
                  isExternal
                  cursor="pointer"
                  border="1px solid #fff"
                  p="0.8rem"
                  borderRadius="50%"
                >
                  {" "}
                  <FaEnvelope />
                </Link>
                {/* rss */}
                <Link
                  aria-label="Rss"
                  href="https://www.ethereum.cn/rss.xml"
                  isExternal
                  cursor="pointer"
                  border="1px solid #fff"
                  p="0.8rem"
                  borderRadius="50%"
                >
                  {" "}
                  <FaRss />
                </Link>
              </Flex>
              {/* donate */}
              <Flex
                w="368px"
                justifyContent="space-between"
                color="#fff"
                margin="2rem auto"
                mb="1rem"

              //   w="368px"
              >
                <Box fontSize="1.2rem">
                  <BiDonateHeart />
                </Box>
                <Box
                  ml="0.7rem"
                  fontSize="0.7rem"
                  _hover={{ color: "#d9d9d9" }}
                  as="span"
                  cursor="pointer"
                  fontSize="1rem"
                  onClick={() =>
                    toast({
                      title: "提示",
                      description: "地址复制成功",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  <CopyToClipboard
                    text={"0xaf30B0285Bb41bdBB732E4a533874901E4943522"}
                  >
                    <Box>0xaf30B0285Bb41bdB...4a533874901E4943522</Box>
                  </CopyToClipboard>
                </Box>
              </Flex>

              {/* gitcoin */}
              <Flex
                w="368px"
                //   justifyContent="space-between"
                color="#fff"
                margin="0 auto"
                //   w="368px"
                alignItems="center"
              >
                <Link
                  aria-label="Gitcoin"
                  isExternal
                  href="https://gitcoin.co/grants/380/ethereumcn"
                  fontSize="0.5rem"
                >
                  <Gitcoin />
                </Link>
                <Box
                  fontSize="1rem"
                  pt="0.2rem"
                  ml="0.7rem"
                  role="link"
                  onClick={() => {
                    navigate("https://gitcoin.co/grants/380/ethereumcn")
                  }}
                  cursor="pointer"
                >
                  {" "}
                  Gitcoin捐赠
          {/* <Box as="span">
                  <Link
                      href="https://www.notion.so/Join-ECN-2bc1df1e25024002bb33de18ce6083c2"
                      isExternal
                      _hover={{ "text-decoration": "none", color: "#ec751d" }}
                    >
                      &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; 加入我们
                    </Link>
                  </Box> */}
                </Box>
              </Flex>
            </Flex>
            {/* </Grid> */}
          </Flex>
          {/* line  */}
          <Box
            maxW="1920px"
            px={["1rem", "1rem", "5rem", "5rem"]}
            pt="2rem"
            pb={["1rem", "1rem", "3rem", "3rem"]}
          >
            <Box
              minW="70%"
              my="2rem"
              h="1px"
              borderTop="1px solid #fff"
              opacity="0.27"
            ></Box>

            {/* icp  */}
            <Link
              _hover={{ color: "#999" }}
              href="https://beian.miit.gov.cn/"
              isExternal
              fontWeight="400"
              fontSize="0.8rem"
              color="#fff"
            >
              <Box color="#999"> 蜀ICP备2021001286号 </Box>
            </Link>
          </Box>
        </Box>

        {/* mobile  */}

        <Box display={["inline", "inline", "none", "none"]}>
          {/* info */}
          <Flex justifyContent="center" pt="2rem">
            <Box
              w="368px"
              color="#fff"
              fontWeight="700"
              fontSize="1.3rem"
              justifyItems="start"
            >
              <Box as="span" color="#FF8B30">
                E
              </Box>
              thereum{" "}
              <Box as="span" color="#FF8B30">
                C
              </Box>
              ommunity{" "}
              <Box as="span" color="#FF8B30">
                N
              </Box>
              etwork
              <Box my="1rem">以太坊社区网络</Box>
              <Box w="4rem" my="1rem">
                <Img fluid={data.wechat.childImageSharp.fluid} />
              </Box>
            </Box>

            <Box position="absolute" w="8rem" right="10%">
              <Img fluid={data.ethereum.childImageSharp.fluid} />
            </Box>
          </Flex>
          {/* email  */}
          <MailchimpForm />

          {/* social media  */}

          <Flex
            w="368px"
            fontSize="1.5rem"
            //   w="368px"
            justifyContent="space-between"
            color="#fff"
            margin="2rem auto"
          >
            {/* twitter */}
            <Link
              aria-label="twitter"
              href="https://twitter.com/EthereumCN"
              _hover={{ textDecoration: "none" }}
              isExternal
              cursor="pointer"
              border="1px solid #fff"
              p="0.5rem"
              borderRadius="50%"
            >
              {" "}
              <FaTwitter />
            </Link>
                  {/* discord */}
                  <Link
              aria-label="discord"
              href="https://discord.gg/KUywx3JJJU"
              _hover={{ textDecoration: "none" }}
              isExternal
              cursor="pointer"
              border="1px solid #fff"
              p="0.5rem"
              borderRadius="50%"
            >
              {" "}
              <RiDiscordFill />
            </Link>
            {/* wechat */}
            <Link
              aria-label="wechat"
              href="https://i.ibb.co/mBgmDgF/footer-wechat.webp"
              _hover={{ textDecoration: "none" }}
              isExternal
              cursor="pointer"
              border="1px solid #fff"
              p="0.5rem"
              borderRadius="50%"
            >
              {" "}
              <AiFillWechat />
            </Link>

            {/* github */}
            <Link
              aria-label="github"
              href="https://github.com/EthereumCN"
              _hover={{ textDecoration: "none" }}
              isExternal
              cursor="pointer"
              border="1px solid #fff"
              p="0.5rem"
              borderRadius="50%"
            >
              {" "}
              <FaGithub />
            </Link>
            {/* mail */}
            <Link
              aria-label="Email"
              href="Mailto:eth@ecn.co"
              isExternal
              cursor="pointer"
              border="1px solid #fff"
              p="0.5rem"
              borderRadius="50%"
            >
              {" "}
              <FaEnvelope />
            </Link>
      
            {/* rss */}
            <Link
              aria-label="Rss"
              href="https://www.ethereum.cn/rss.xml"
              isExternal
              cursor="pointer"
              border="1px solid #fff"
              p="0.5rem"
              borderRadius="50%"
            >
              {" "}
              <FaRss />
            </Link>
          </Flex>

          {/* donate */}
          <Flex
            w="368px"
            justifyContent="space-between"
            color="#fff"
            margin="2rem auto"
            mb="1rem"
          //   w="368px"
          >
            <Link
              fontSize="1rem"
              aria-label="donate"
              isExternal
              href="https://etherscan.io/address/0xaf30B0285Bb41bdBB732E4a533874901E4943522"
            >
              <BiDonateHeart />
            </Link>
            <Box
              ml="0.7rem"
              fontSize="0.7rem"
              _hover={{ color: "#d9d9d9" }}
              as="span"
              cursor="pointer"
              fontSize="1rem"
              onClick={() =>
                toast({
                  title: "提示",
                  description: "地址复制成功",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              <CopyToClipboard
                text={"0xaf30B0285Bb41bdBB732E4a533874901E4943522"}
              >
                <Box>0xaf30B0285Bb41bdBB732E4a533874901E4943522 </Box>
              </CopyToClipboard>
            </Box>
          </Flex>

          {/* gitcoin */}
          <Flex
            w="368px"
            //   justifyContent="space-between"
            color="#fff"
            margin="0 auto"
          //   w="368px"
          >
            <Link
              fontSize="0.5rem"
              aria-label="Gitcoin"
              isExternal
              href="https://gitcoin.co/grants/380/ethereumcn"
            >
              <Gitcoin />
            </Link>
            <Box
              fontSize="0.9rem"
              ml="0.5rem"
              cursor="pointer"
              role="link"
              onClick={() => {
                navigate("https://gitcoin.co/grants/380/ethereumcn")
              }}
              cursor="pointer"
            >
              {" "}
              Gitcoin捐赠
            </Box>
          </Flex>

          <Box w="368px" margin="0 auto" pb="2rem">
            <Box
              my="2rem"
              h="1px"
              borderTop="1px solid #fff"
              opacity="0.27"
            ></Box>
            {/* icp  */}
            <Link
              _hover={{ color: "#999" }}
              color="rgba(0,0,0,0.6)"
              href="https://beian.miit.gov.cn/"
              isExternal
              fontWeight="400"
              fontSize="0.8rem"
              color="#fff"
            >
              <Box color="#999"> 蜀ICP备2021001286号 </Box>
            </Link>
          </Box>
        </Box>
      </BackgroundImage>
    </Box>
  )
}

export default Footer
