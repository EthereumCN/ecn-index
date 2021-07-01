import React from "react"
import { Box, Flex, Text, PseudoBox, Heading } from "@chakra-ui/core"
import { Carousel } from "react-bootstrap"
import { motion } from "framer-motion"

const Video = ({ data }) => {
  // 1. Create a custom motion component from Box
  const MotionBox = motion.custom(Box)

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.nodes[0].cover.childImageSharp.fixed.src}
          alt="First slide"
        />
        <Carousel.Caption>
          <Box
            style={{
              background:
                "linear-gradient(rgba(38, 37, 90, 0) 0%, rgba(38, 37, 90, 0.8) 100%)",
            }}
            height="100%"
            w="100%"
          >
            <MotionBox
              whileHover={{ scale: 0.97 }}
              position="relative"
              height="100%"
              px={["5vw", 0, 0, 0]}
              w="100%"
            >
              <i
                class="iconfont icon-iconset0481"
                style={{
                  color: "white",
                  fontSize: "5rem",
                  position: "absolute",
                  left: "1.5vw",
                  bottom: "12vh",
                }}
              ></i>
              <Text
                bottom="3vh"
                left="2vw"
                position="absolute"
                w={["100%", "100%", "40vw", "40vw"]}
                color="#aaa"
                fontWeight="700"
                fontSize="0.5rem"
                lineHeight="1.3rem"
                textAlign="left"
              >
                2019-11-22
              </Text>

              <PseudoBox
                bottom="5vh"
                left="2vw"
                position="absolute"
                _hover={{ color: " #6873e5" }}
                mb="12px"
                fontWeight="900"
                fontFamily="NotoSansSC-Medium"
                color="#fff"
                cursor="pointer"
              >
                <Heading mb="12px" fontSize="1.3rem" mt={"1.2rem"}>
                  Vitalik Buterin：25分钟走近以太坊
                </Heading>
              </PseudoBox>
            </MotionBox>
          </Box>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.nodes[1].cover.childImageSharp.fixed.src}
          alt="Third slide"
        />

        <Carousel.Caption>
          <Box
            style={{
              background:
                "linear-gradient(rgba(38, 37, 90, 0) 0%, rgba(38, 37, 90, 0.8) 100%)",
            }}
            height="100%"
            w="100%"
          >
            <MotionBox
              whileHover={{ scale: 0.97 }}
              position="relative"
              height="100%"
              px={["5vw", 0, 0, 0]}
              w="100%"
            >
              <i
                class="iconfont icon-iconset0481"
                style={{
                  color: "white",
                  fontSize: "5rem",
                  position: "absolute",
                  left: "1.5vw",
                  bottom: "12vh",
                }}
              ></i>
              <Text
                bottom="3vh"
                left="2vw"
                position="absolute"
                w={["100%", "100%", "40vw", "40vw"]}
                color="#aaa"
                fontWeight="700"
                fontSize="0.5rem"
                lineHeight="1.3rem"
                textAlign="left"
              >
                2019-11-22
              </Text>

              <PseudoBox
                bottom="5vh"
                left="2vw"
                position="absolute"
                _hover={{ color: " #6873e5" }}
                mb="12px"
                fontWeight="900"
                fontFamily="NotoSansSC-Medium"
                color="#fff"
                cursor="pointer"
              >
                <Heading mb="12px" fontSize="1.3rem" mt={"1.2rem"}>
                  Vitalik Buterin：25分钟走近以太坊
                </Heading>
              </PseudoBox>
            </MotionBox>
          </Box>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.nodes[2].cover.childImageSharp.fixed.src}
          alt="Third slide"
        />

        <Carousel.Caption>
          <Box
            style={{
              background:
                "linear-gradient(rgba(38, 37, 90, 0) 0%, rgba(38, 37, 90, 0.8) 100%)",
            }}
            height="100%"
            w="100%"
          >
            <MotionBox
              whileHover={{ scale: 0.97 }}
              position="relative"
              height="100%"
              px={["5vw", 0, 0, 0]}
              w="100%"
            >
              <i
                class="iconfont icon-iconset0481"
                style={{
                  color: "white",
                  fontSize: "5rem",
                  position: "absolute",
                  left: "1.5vw",
                  bottom: "12vh",
                }}
              ></i>
              <Text
                bottom="3vh"
                left="2vw"
                position="absolute"
                w={["100%", "100%", "40vw", "40vw"]}
                color="#aaa"
                fontWeight="700"
                fontSize="0.5rem"
                lineHeight="1.3rem"
                textAlign="left"
              >
                2019-11-26
              </Text>

              <PseudoBox
                bottom="5vh"
                left="2vw"
                position="absolute"
                _hover={{ color: " #6873e5" }}
                mb="12px"
                fontWeight="900"
                fontFamily="NotoSansSC-Medium"
                color="#fff"
                cursor="pointer"
              >
                <Heading mb="12px" fontSize="1.3rem" mt={"1.2rem"}>
                  Vitalik Buterin：25分钟走近以太坊
                </Heading>
              </PseudoBox>
            </MotionBox>
          </Box>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Video
