import React from "react"
import { Flex, Box, Heading, PseudoBox, Text } from "@chakra-ui/core"
import Img from "gatsby-image"
import { Link } from "gatsby"
// 第一行右侧的三篇文章（组件化）
const Item = ({ data,order }) => {
  return (
    <Link to={data.path}>  
    <PseudoBox color="white" cursor="pointer" _hover={{ color: " #ee771c " }} h="100%" >
      <Flex justifyContent="space-between" minH="100%" alignItems="center">
        <Box w="100%" alignSelf={order}> 

          
          {/* tag     */}
          <Heading
            as="h2"
            fontSize="0.9rem"
            color="#000"
            borderRadius="2rem"
            paddingX="0.5rem"
            backgroundColor="#ee771c"
            display="inline-box"
          >
            {data.mainTag}
          </Heading>

          {/* title */}
          <Heading as="h1" fontSize="1.5rem" pt="0.45rem" whiteSpace="nowrap" style={{textOverflow:"ellipsis"}} overflow="hidden">
            {data.title}
          </Heading>

        {/*  cover */}
          
        <Box w="100%"  alignSelf={order} mt="3rem">
          <Img fluid={data.cover.childImageSharp.fluid} />
        </Box>

          {/* summary */}
          <Text color="#ccc" pt="1rem" fontSize="1rem" >{data.summary}</Text>
        </Box>
        {/* right side */}

      </Flex>
    </PseudoBox>
    </Link>
  )
}

export default Item
