import React from "react"
import { Flex, Box, Heading, PseudoBox, Text } from "@chakra-ui/core"
import Img from "gatsby-image"
import { Link } from "gatsby"
// 第一行右侧的三篇文章（组件化）
const Item = ({ data, order }) => {
  return (
    <Link to={data.path}>
      <PseudoBox
        color="white"
        cursor="pointer"
        _hover={{ color: " #ee771c " }}
        h="100%"
      >
        <Flex justifyContent="space-between" minH="100%" alignItems="center">
          <Box w="60%" alignSelf={order} H="100%">
            {/* tag     */}
            {/* <Link to={data.mainTag} > */}
            <Link
              to={
                data.mainTag == "Ether2"
                  ? "/Eth2"
                  : data.mainTag == "Ether1"
                  ? "/Eth1x"
                  : "/" + data.mainTag
              }
            >
              <Heading
                as="h2"
                fontSize="1rem"
                color="#000"
                borderRadius="2rem"
                paddingX="0.5rem"
                backgroundColor="#ee771c"
                display="inline-box"
              >
                {data.chineseMainTag}
              </Heading>
            </Link>

            {/* title */}
            <Heading
              as="h1"
              mt="1rem"
              fontSize="1.5rem"
              whiteSpace="nowrap"
              style={{ textOverflow: "ellipsis" }}
              overflow="hidden"
            >
              {data.title}
            </Heading>

            {/* summary */}
            <Text
              color="#ccc"
              pt="1rem"
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            >
              {data.summary}
            </Text>
          </Box>
          {/* right side */}
          <Box w="30%" alignSelf={order}>
            <Img
              style={{ borderRadius: "0.8rem" }}
              fluid={data.cover.childImageSharp.fluid}
            />
          </Box>
        </Flex>
      </PseudoBox>
    </Link>
  )
}

export default Item
