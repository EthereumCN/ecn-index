import React from "react"
// ui
import { Flex, Box, Text, Stack, PseudoBox, Heading } from "@chakra-ui/core"
// 图片引入】
import Img from "gatsby-image"
import { Link } from "gatsby"

const EachList = ({ value }) => {
  return (
    <>
      <Link to={"/" + value.path}>
        <PseudoBox
          w="100%"
          maxW={1080}
          mx="auto"
          pt={["20px", "20px", "50px", "11vh"]}
          _hover={{ color: " #6873e5" }}
        >
          <Flex
            flexDir={["column", "column", "column", "row"]}
            paddingBottom="0.5vw"
            w={["100%", "100%", "100%", "100%"]}
            mx="auto"
            justifyContent="space-between "
          >
            <PseudoBox
              w={["100%", "100%", "100%", "45%"]}
              mx={["auto", "auto", "auto", 0]}
              position="relative"
              display={["inline", "inline", "inline", "none"]}
            >
              <Img style={{borderRadius:"0.8rem"}} fluid={value.cover.childImageSharp.fluid} />
            </PseudoBox>

            <Box
              w={["100%", "100%", "100%", "45%"]}
              my="auto"
              px={["2vw", 0, 0, 0]}
              ml={[0, 0, 0, 0]}
              cursor="pointer"
            >
              <PseudoBox
                mb="12px"
                fontSize="1.6rem"
                mt={["1.2rem", "1.2rem", "1.2rem", 0]}
                fontWeight="800"
                lineHeight="1.2em"
                letterSpacing="0.05vw"
                fontFamily="NotoSansSC-Bold"
              >
                <Heading
                  mb="12px"
                  fontSize="2xl"
                  mt={"1.2rem"}
                  color="#fff"
                  as="h4"
                >
                  {value.title}
                </Heading>
              </PseudoBox>
              <Text
                mb="1.2em"
                fontSize="1rem"
                lineHeight="1.5em"
                color="#969696"
                letterSpacing="0.025vw"
              >
                {value.summary}
              </Text>
              <Stack isInline>
                <Img
                  fixed={value.authorImg.childImageSharp.fixed}
                  style={{ borderRadius: "50%" }}
                />
                <Text
                  fontSize="0.5rem"
                  color="#6873e5"
                  fontWeight="700"
                  lineHeight="1.5rem"
                  ml="1rem"
                >
                  {value.author}
                </Text>
                <Text
                  fontSize="0.5rem"
                  color="#aaa"
                  fontWeight="700"
                  lineHeight="1.5rem"
                >
                  {value.publishDate}
                </Text>
              </Stack>
            </Box>
            <PseudoBox
              w={["100%", "100%", "100%", "45%"]}
              mx={["auto", "auto", "auto", 0]}
              position="relative"
              display={["none", "none", "none", "inline"]}
            >
              <Img style={{borderRadius:"0.8rem"}} fluid={value.cover.childImageSharp.fluid} />
            </PseudoBox>
          </Flex>
        </PseudoBox>
      </Link>
    </>
  )
}

export default EachList
