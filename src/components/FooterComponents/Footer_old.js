import React, { useState } from "react"
import MailchimpForm from "../MailchimpForm"
import { Text, Box, Link, useToast, PseudoBox, Button } from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { FaWeibo, FaTwitter, FaGithub, FaRss, FaEnvelope } from "react-icons/fa"
import { RiBilibiliFill } from "react-icons/ri"
import Img from "gatsby-image"
import footer from "./Footer.module.css"
import { BiDonateHeart } from "react-icons/bi"
import { CopyToClipboard } from "react-copy-to-clipboard"
const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "footer.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [copied, setCopied] = React.useState(false)

  const toast = useToast()

  return (
    <Box position="relative" mt="8rem">
      
      <Box className={footer.showarea} textAlign="right" mt="5rem" zIndex="100">
        
        {/* rss */}
        <Text
          textAlign="left"
          color="white"
          paddingTop="1.5rem"
          paddingBottom="1rem"
        >
          <PseudoBox
            as="a"
            aria-label="Weibo"
            rel="noopener"
            _hover={{ color: "#d9d9d9" }}
            mt="1rem"
            href="https://weibo.com/EthereumCN"
            color="#1A202C"
            target="_blank"
            display="inline-block"
          >
            <FaWeibo
              style={{
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </PseudoBox>

          <PseudoBox
            ml="1rem"
            as="a"
            aria-label="Twitter"
            rel="noopener"
            _hover={{ color: "#d9d9d9" }}
            mt="1rem"
            href="https://twitter.com/EthereumCN"
            color="#1A202C"
            target="_blank"
            display="inline-block"
          >
            <FaTwitter
              style={{
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </PseudoBox>

          <PseudoBox
            as="a"
            rel="noopener"
            aria-label="Github"
            _hover={{ color: "#d9d9d9" }}
            ml="1rem"
            mt="1rem"
            href="https://github.com/EthereumCN"
            color="#1A202C"
            target="_blank"
            display="inline-block"
          >
            <FaGithub
              style={{
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </PseudoBox>

          <PseudoBox
            as="a"
            aria-label="Email"
            rel="noopener"
            _hover={{ color: "#d9d9d9" }}
            ml="1rem"
            mt="1rem"
            href="Mailto:eth@ecn.co"
            color="#1A202C"
            target="_blank"
            display="inline-block"
          >
            <FaEnvelope
              style={{
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </PseudoBox>

          <PseudoBox
            as="a"
            aria-label="bilibili"
            rel="noopener"
            _hover={{ color: "#d9d9d9" }}
            ml="1rem"
            mt="1rem"
            href="https://space.bilibili.com/477283031"
            color="#1A202C"
            target="_blank"
            display="inline-block"
          >
            <RiBilibiliFill
              style={{
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </PseudoBox>

          <PseudoBox
            as="a"
            aria-label="Rss"
            rel="noopener"
            _hover={{ color: "#d9d9d9" }}
            ml="1rem"
            mt="1rem"
            href="https://www.ethereum.cn/rss.xml"
            color="#1A202C"
            target="_blank"
            display="inline-block"
          >
            <FaRss
              style={{
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </PseudoBox>
          
        </Text>

        <Box>
          <Text fontSize="0.5vw" color="#1A202C" >
            <PseudoBox
              as="a"
              aria-label="Donate"
              rel="noopener"
              _hover={{ color: "#d9d9d9" }}
              fontSize="1rem"
              href="https://etherscan.io/address/0x4a334D67dD752e5deB7808D45FcAD775Af299be0"
              color="#1A202C"
              target="_blank"
              display="inline-block"
            >
              <BiDonateHeart
                style={{
                  display: "inline",
                  marginBottom: "0.4rem",
                }}
              />
            </PseudoBox>{" "}
            {/* <CopyToClipboard
              text="0x4a334D67dD752e5deB7808D45FcAD775Af299be0"
            > */}
             
              <PseudoBox
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
                     <CopyToClipboard text={"0x4a334D67dD752e5deB7808D45FcAD775Af299be0"}>
                <span >&nbsp; 0x4a334D67dD752e5deB7808D45FcAD775Af299be0 </span>
                </CopyToClipboard>
              </PseudoBox>{" "}
            {/* </CopyToClipboard>{" "} */}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ fontSize: "1rem" }}>
              Gitcoin Grants: &nbsp;
              <PseudoBox
                as="a"
                aria-label="Donate"
                rel="noopener"
                _hover={{ color: "#d9d9d9" }}
                fontSize="1rem"
                href="https://gitcoin.co/grants/380/ethereumcn"
                color="#1A202C"
                target="_blank"
                display="inline-block"
              >
                gitcoin.co/grants/380/ethereumcn
              </PseudoBox>
            </span>
          </Text>
          
        </Box>

        
      </Box>
  
      {/* <Box className={footer.donate1}>
        <Text fontSize="0.5vw" color="#1A202C">
        <PseudoBox
            as="a"
            aria-label="Donate"
            rel="noopener"
            _hover={{ color: "#d9d9d9" }}
            fontSize="1rem"
            href="https://etherscan.io/address/0x4a334D67dD752e5deB7808D45FcAD775Af299be0"
            color="#1A202C"
            target="_blank"
            display="inline-block"
          >
            <BiDonateHeart
              style={{
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </PseudoBox>： 0x4a334D67dD752e5deB7808D45FcAD775Af299be0  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          

          <PseudoBox
            as="a"
            aria-label="Donate"
            rel="noopener"
            _hover={{ color: "#d9d9d9" }}
            fontSize="1rem"
            href="https://etherscan.io/address/0x4a334D67dD752e5deB7808D45FcAD775Af299be0"
            color="#1A202C"
            target="_blank"
            display="inline-block"
          >
            <BiDonateHeart
              style={{
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </PseudoBox>： 0x4a334D67dD752e5deB7808D45FcAD775Af299be0 &nbsp;
          
        </Text>

      
      </Box> */}

      <Box className={footer.showmail}>
        <MailchimpForm />
        
      </Box>

      <Box w="100%">
        <Img fluid={data.file.childImageSharp.fluid} />
      </Box>

    
      


      <Box className={footer.mobile} textAlign="center">
        <Text color="white" paddingBottom="1rem">
          <Link
            aria-label="Weibo"
            ml="1rem"
            mt="1rem"
            href="https://weibo.com/EthereumCN"
            color="#fff"
            isExternal
            display="inline-block"
          >
            <FaWeibo
              style={{
                color: "#ee771c",
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </Link>

          <Link
            aria-label="Twitter"
            ml="1rem"
            mt="1rem"
            href="https://twitter.com/EthereumCN"
            color="#fff"
            isExternal
            display="inline-block"
          >
            <FaTwitter
              style={{
                color: "#ee771c",
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </Link>

          <Link
            aria-label="Github"
            ml="1rem"
            mt="1rem"
            href="https://github.com/EthereumCN"
            color="#fff"
            isExternal
            display="inline-block"
          >
            <FaGithub
              style={{
                color: "#ee771c",
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </Link>

          <Link
            aria-label="Email"
            ml="1rem"
            mt="1rem"
            href="Mailto:eth@ecn.co"
            color="#fff"
            isExternal
            display="inline-block"
          >
            <FaEnvelope
              style={{
                color: "#ee771c",
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </Link>


          <Link
            aria-label="bilibili"
            ml="1rem"
            mt="1rem"
            href="https://space.bilibili.com/477283031"
            color="#fff"
            isExternal
            display="inline-block"
          >
            <RiBilibiliFill
              style={{
                color: "#ee771c",
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </Link>

          <Link
            aria-label="Rss"
            ml="1rem"
            mt="1rem"
            href="https://www.ethereum.cn/rss.xml"
            color="#fff"
            isExternal
            display="inline-block"
          >
            <FaRss
              style={{
                color: "#ee771c",
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </Link>

          <Link
            aria-label="Donate"
            ml="1rem"
            mt="1rem"
            href="https://etherscan.io/address/0x4a334D67dD752e5deB7808D45FcAD775Af299be0"
            color="#fff"
            isExternal
            display="inline-block"
          >
            <BiDonateHeart
              style={{
                color: "#ee771c",
                display: "inline",
                marginBottom: "0.4rem",
              }}
            />
          </Link>
        </Text>
        <MailchimpForm />

        <Text color="#fff">ECN @2020  </Text>
        <Box mb="1rem" textAlign="center" >
        <Link
          _hover={{textDecoration:"none"}}
          fontSize="0.9rem"
          color="rgba(73,73,76,1)"
          href="http://beian.miit.gov.cn/"
          isExternal
        >
          {" "}
          蜀ICP备2021001286号
        </Link>{" "}
      </Box>
      </Box>
    </Box>
  )
}

export default Footer
