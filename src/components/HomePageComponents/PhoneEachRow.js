import React from "react"
import { Flex, Heading, Box, PseudoBox, Text, Stack } from "@chakra-ui/core"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PhoneEachRow = ({ data }) => {
  return (
    <PseudoBox
      w={["100%", "100%", "31%", "31%"]}
      mx="auto"
      mb="2vw"
      pb="2vw"
      _hover={{ color: " #6873e5" }}
    >
      {/* 图片 */}
      <PseudoBox
        w="100%"
        // maxW={["400px", "400px", "620px", "620px"]}
        mx="auto"
        position="relative"
      >
        <Img fluid={data.cover.childImageSharp.fluid} />
      </PseudoBox>
      {/* 描述 */}
      <Link to={data.path}>
        <Box px={["5vw", 0, 0, 0]}>
          <PseudoBox
            _hover={{ color: " #6873e5" }}
            mb="12px"
            fontWeight="900"
            fontSize={["2rem", "2rem", "2rem", "1.5rem"]}
            lineHeight={["2.5rem", "2.5rem", "2.5rem", "2rem"]}
            mt={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
            fontFamily="NotoSansSC-Medium"
            color="#fff"
            cursor="pointer"
          >
            <Heading mb="12px" fontSize="1.3rem" mt={"1.2rem"}>
              {data.title}
            </Heading>
          </PseudoBox>
          <Text
            mb="1.5em"
            fontSize="0.9rem"
            lineHeight="1.5em"
            color="#999"
            letterSpacing="0.025vw"
            fontFamily="NotoSansSC-Medium !important"
          >
            {data.summary}
          </Text>
          <Stack isInline>
            {" "}
            <Img
              fixed={data.authorImg.childImageSharp.fixed}
              style={{ borderRadius: "50%" }}
            />
            <Flex flexDir="column" ml="0.5vw">
              <Text
                fontSize="0.5rem"
                color="#6873e5"
                fontWeight="700"
                lineHeight="1rem"
              >
                {data.author}
              </Text>
              <Text
                color="#aaa"
                fontWeight="700"
                fontSize="0.5rem"
                lineHeight="1.3rem"
              >
                {data.publishDate}
              </Text>
            </Flex>
          </Stack>
        </Box>
        {/* </Link> */}
      </Link>
    </PseudoBox>
  )
}

export default PhoneEachRow
