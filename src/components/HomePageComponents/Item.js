import React from "react"
import { Flex, Box, Heading, PseudoBox, Text } from "@chakra-ui/core"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Item = ({ data }) => {
  return (
    <Link to={data.path}>
      <PseudoBox
        color="white"
        cursor="pointer"
        _hover={{ color: " #ee771c " }}
        h="100%"
        w="100%"
      >
        <Flex
          direction="column"
          justifyContent="space-between"
          h="100%"
          w="100%"
          alignItems="center"
        >
          <div
            style={{
              width: "90%",
              height: "74%",
              position: "relative",
              // backgroundColor: "green",
            }}
          >
            <Img
              style={{
                borderRadius: "0.8rem",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}
              fluid={data.cover.childImageSharp.fluid}
            />
            <div
              style={{
                position: "absolute",

                top: "7px",
                right: "9px",
              }}
            >
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
                  paddingY={"2px"}
                  backgroundColor="#ee771c"
                  display="inline-box"
                >
                  {data.chineseMainTag}
                </Heading>
              </Link>
            </div>
          </div>
          {/* right side */}
          <div
            style={{
              alignSelf: "flex-start",
              paddingLeft: "5%",
              paddingRight: "5%",
              width: "100%",
              height: "21.4%",
              // backgroundColor: "yellow",
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Heading
              textAlign={"start"}
              as="h1"
              // mt="1rem"
              fontSize="1.3rem"
              whiteSpace="nowrap"
              style={{ textOverflow: "ellipsis" }}
              overflow="hidden"
            >
              {data.title}
            </Heading>
          </div>
        </Flex>
      </PseudoBox>
    </Link>
  )
}

export default Item
