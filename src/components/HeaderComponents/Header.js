import React from "react"
import {
  Flex,
  Box,
  PseudoBox,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Drawer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/core"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import Search from "../search"
import Stat from "./Stat"
import StatModule from "./Stat.module.css"
import GasFee from "./GasFee"

const searchIndices = [{ name: `Pages`, title: `Pages` }]

const Header = () => {
  // local src 提取
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "eco_logo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  // 设定拉上拉下菜单
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  let navList = [
    { name: "新闻资讯", link: "/" },
    { name: "零时学院", link: "/c0llege" },
    { name: "开发者门户", link: "/develop" },
    { name: "生态漫游", link: "/ecos" },
    // { name: "DApp", link: "/" },
  ]

  return (
    <Box
      
     
      w="100vw"
      height="4rem"
      top="0rem"
      position="fixed"
      zIndex="5"
      // backgroundColor="#1A202C"
      backgroundColor="#191919"
      left="0"
      pl={["1rem", "1rem", "5rem", "5rem"]}
    >
      {/* header左侧 */}
      <Flex justifyContent="space-between">
        <Flex justifyContent="flex-start">
          {/* logo */}
          <Link to="/">
            <Img
              style={{ marginTop: "1rem" }}
              fixed={data.file.childImageSharp.fixed}
              alt="logo"
            />
          </Link>
          {/* pc nav-bar */}
          <Box display={["none", "none", "none", "inline"]}>
            <nav>
              <ul style={{ listStyleType: "none" }}>
                <PseudoBox
                  as="li"
                  float="left"
                  ml={["1.2rem", "2.2rem", "2.2rem", "2.2rem"]}
                >
                  <PseudoBox
                    _hover={{ color: "#ee771c" }}
                    fontSize="1.2rem"
                    cursor="pointer"
                    color="#fff"
                    lineHeight="4rem"
                    fontFamily="'Noto Sans SC', sans-serif"
                    fontWeight="500"
                  >
                    <Link to="/">新闻资讯</Link>
                  </PseudoBox>
                </PseudoBox>

                <li
                  style={{
                    marginLeft: "0.3rem",
                    float: "left",
                    color: "#fff",
                    marginTop: "0.8rem",
                  }}
                >
                  <Menu ml="5rem">
                    {({ isOpen }) => (
                      <React.Fragment>
                        <MenuButton
                          padding="0"
                          isActive={isOpen}
                          as={Button}
                          minWidth="0"
                          fontSize="1.2rem"
                          backgroundColor="#191919"
                          _hover={{
                            backgroundColor: "#191919",
                          }}
                          _active={{ backgroundColor: "#191919" }}
                          _focus={{ boxShadow: "0" }}
                        >
                          {isOpen ? (
                            <FiChevronUp
                              style={{ color: !isOpen ? "#fff" : "#ee771c" }}
                            />
                          ) : (
                            <FiChevronDown
                              style={{ color: !isOpen ? "#fff" : "#ee771c" }}
                            />
                          )}
                        </MenuButton>
                        <MenuList
                          backgroundColor="#191919"
                          _hover={{ backgroundColor: "#191919" }}
                          _active={{ backgroundColor: "#191919" }}
                          border="0"
                          padding="0"
                        >
                          <MenuItem
                            height="20px"
                            _focus={{ backgroundColor: "#191919" }}
                          >
                            <PseudoBox
                              as="p"
                              _hover={{ color: "#ee771c" }}
                              display="inline"
                              textAlign="center"
                              w="100%"
                              fontSize="1rem"
                              fontFamily="'Noto Sans SC', sans-serif"
                            >
                              {" "}
                              <Link to="/Eth2">ETH 2.0</Link>
                            </PseudoBox>
                          </MenuItem>

                          <MenuItem
                            height="20px"
                            _focus={{ backgroundColor: "#191919" }}
                          >
                            <PseudoBox
                              as="p"
                              _hover={{ color: "#ee771c" }}
                              display="inline"
                              textAlign="center"
                              w="100%"
                              fontSize="1rem"
                              fontFamily="'Noto Sans SC', sans-serif"
                            >
                              {" "}
                              <Link to="/Layer2">Layer2</Link>
                            </PseudoBox>
                          </MenuItem>

                          <MenuItem
                            height="20px"
                            _focus={{ backgroundColor: "#191919" }}
                          >
                            <PseudoBox
                              as="p"
                              _hover={{ color: "#ee771c" }}
                              display="inline"
                              textAlign="center"
                              w="100%"
                              fontSize="1rem"
                              fontFamily="'Noto Sans SC', sans-serif"
                            >
                              {" "}
                              <Link to="/Technology">技术</Link>
                            </PseudoBox>
                          </MenuItem>
                          <MenuItem
                            height="20px"
                            _focus={{ backgroundColor: "#191919" }}
                          >
                            <PseudoBox
                              as="p"
                              _hover={{ color: "#ee771c" }}
                              display="inline"
                              textAlign="center"
                              w="100%"
                              fontSize="1rem"
                              fontFamily="'Noto Sans SC', sans-serif"
                            >
                              {" "}
                              <Link to="/Staking">Staking</Link>
                            </PseudoBox>
                          </MenuItem>
                          <MenuItem
                            height="20px"
                            _focus={{ backgroundColor: "#191919" }}
                          >
                            <PseudoBox
                              as="p"
                              _hover={{ color: "#ee771c" }}
                              display="inline"
                              textAlign="center"
                              w="100%"
                              fontSize="1rem"
                              fontFamily="'Noto Sans SC', sans-serif"
                            >
                              <Link to="/DeFi">DeFi</Link>
                            </PseudoBox>
                          </MenuItem>
                          <MenuItem
                            height="20px"
                            _focus={{ backgroundColor: "#191919" }}
                          >
                            <PseudoBox
                              as="p"
                              _hover={{ color: "#ee771c" }}
                              display="inline"
                              textAlign="center"
                              w="100%"
                              fontSize="1rem"
                              fontFamily="'Noto Sans SC', sans-serif"
                            >
                              <Link to="/Eth1x">ETH 1.X</Link>
                            </PseudoBox>
                          </MenuItem>
                          <MenuItem
                            height="20px"
                            _focus={{ backgroundColor: "#191919" }}
                          >
                            <PseudoBox
                              as="p"
                              _hover={{ color: "#ee771c" }}
                              display="inline"
                              textAlign="center"
                              w="100%"
                              fontSize="1rem"
                              fontFamily="'Noto Sans SC', sans-serif"
                            >
                              <Link to="/Ecosystem">生态</Link>
                            </PseudoBox>
                          </MenuItem>
                          <MenuItem
                            height="20px"
                            _focus={{ backgroundColor: "#191919" }}
                          >
                            <PseudoBox
                              as="p"
                              _hover={{ color: "#ee771c" }}
                              display="inline"
                              textAlign="center"
                              w="100%"
                              fontSize="1rem"
                              fontFamily="'Noto Sans SC', sans-serif"
                            >
                              <Link to="/Thinking">思辨</Link>
                            </PseudoBox>
                          </MenuItem>
                          <MenuItem
                            height="20px"
                            _focus={{ backgroundColor: "#191919" }}
                          >
                            <PseudoBox
                              as="p"
                              _hover={{ color: "#ee771c" }}
                              display="inline"
                              textAlign="center"
                              w="100%"
                              fontSize="1rem"
                              fontFamily="'Noto Sans SC', sans-serif"
                            >
                              <Link to="/Announcement">通告</Link>
                            </PseudoBox>
                          </MenuItem>
                          <MenuItem
                            height="20px"
                            _focus={{ backgroundColor: "#191919" }}
                          >
                            <PseudoBox
                              as="p"
                              _hover={{ color: "#ee771c" }}
                              display="inline"
                              textAlign="center"
                              w="100%"
                              fontSize="1rem"
                              fontFamily="'Noto Sans SC', sans-serif"
                            >
                              {" "}
                              <Link to="/Activity">活动</Link>
                            </PseudoBox>
                          </MenuItem>
                        </MenuList>
                      </React.Fragment>
                    )}
                  </Menu>
                </li>

                <PseudoBox
                  as="li"
                  float="left"
                  ml={["3rem", "3rem", "3rem", "4rem"]}
                >
                  <PseudoBox
                    _hover={{ color: "#ee771c" }}
                    fontSize="1.2rem"
                    cursor="pointer"
                    color="#fff"
                    lineHeight="4rem"
                    fontFamily="'Noto Sans SC', sans-serif"
                    fontWeight="500"
                  >
                    <Link to="/c0llege">零时学院</Link>
                  </PseudoBox>
                </PseudoBox>

                <PseudoBox
                  as="li"
                  float="left"
                  ml={["3rem", "3rem", "3rem", "4rem"]}
                >
                  <PseudoBox
                    _hover={{ color: "#ee771c" }}
                    fontSize="1.2rem"
                    cursor="pointer"
                    color="#fff"
                    lineHeight="4rem"
                    fontFamily="'Noto Sans SC', sans-serif"
                    fontWeight="500"
                  >
                    <Link to="/develop">开发者门户</Link>
                  </PseudoBox>
                </PseudoBox>

                <PseudoBox
                  as="li"
                  float="left"
                  ml={["3rem", "3rem", "3rem", "4rem"]}
                >
                  <PseudoBox
                    _hover={{ color: "#ee771c" }}
                    fontSize="1.2rem"
                    cursor="pointer"
                    color="#fff"
                    lineHeight="4rem"
                    fontFamily="'Noto Sans SC', sans-serif"
                    fontWeight="500"
                  >
                    <Link to="/ecos">生态漫游</Link>
                  </PseudoBox>
                </PseudoBox>

                {/* 第五行 */}
                {/* <Box display="inline" className={StatModule.useEth}>
                  <PseudoBox
                    as="li"
                    float="left"
                    ml={["3rem", "3rem", "3rem", "4rem"]}
                  >
                    <PseudoBox
                      _hover={{ color: "#ee771c" }}
                      fontSize="1.2rem"
                      cursor="pointer"
                      color="#fff"
                      lineHeight="4rem"
                      fontFamily="'Noto Sans SC', sans-serif"
                      fontWeight="500"
                    >
                      <a
                        href="https://knol.ethereum.cn/use_ethereum"
                        target="_blank"
                      >
                        使用以太坊
                      </a>
                    </PseudoBox>
                  </PseudoBox>
                  <li
                    style={{
                      marginLeft: "0.3rem",
                      float: "left",
                      color: "#fff",
                      marginTop: "0.8rem",
                    }}
                  >
                    <Menu ml="5rem">
                      {({ isOpen }) => (
                        <React.Fragment>
                          <MenuButton
                            padding="0"
                            isActive={isOpen}
                            as={Button}
                            minWidth="0"
                            fontSize="1.2rem"
                            backgroundColor="#191919"
                            _hover={{
                              backgroundColor: "#191919",
                            }}
                            _active={{ backgroundColor: "#191919" }}
                            _focus={{ boxShadow: "0" }}
                          >
                            {isOpen ? (
                              <FiChevronUp
                                style={{ color: !isOpen ? "#fff" : "#ee771c" }}
                              />
                            ) : (
                              <FiChevronDown
                                style={{ color: !isOpen ? "#fff" : "#ee771c" }}
                              />
                            )}
                          </MenuButton>
                          <MenuList
                            backgroundColor="#191919"
                            _hover={{ backgroundColor: "#191919" }}
                            _active={{ backgroundColor: "#191919" }}
                            border="0"
                            padding="0"
                          >
                            <MenuItem
                              height="20px"
                              _focus={{ backgroundColor: "#191919" }}
                            >
                              <PseudoBox
                                as="p"
                                _hover={{ color: "#ee771c" }}
                                display="inline"
                                textAlign="center"
                                w="100%"
                                fontSize="1rem"
                                fontFamily="'Noto Sans SC', sans-serif"
                              >
                                {" "}
                                <a
                                  href="https://knol.ethereum.cn/clients_wallets"
                                  target="_blank"
                                >
                                  钱包
                                </a>
                              </PseudoBox>
                            </MenuItem>

                            <MenuItem
                              height="20px"
                              _focus={{ backgroundColor: "#191919" }}
                            >
                              <PseudoBox
                                as="p"
                                _hover={{ color: "#ee771c" }}
                                display="inline"
                                textAlign="center"
                                w="100%"
                                fontSize="1rem"
                                fontFamily="'Noto Sans SC', sans-serif"
                              >
                                {" "}
                                <a
                                  href="https://knol.ethereum.cn/how_to_get_ether"
                                  target="_blank"
                                >
                                  购买ETH
                                </a>
                              </PseudoBox>
                            </MenuItem>
                            <MenuItem
                              height="20px"
                              _focus={{ backgroundColor: "#191919" }}
                            >
                              <PseudoBox
                                as="p"
                                _hover={{ color: "#ee771c" }}
                                display="inline"
                                textAlign="center"
                                w="100%"
                                fontSize="1rem"
                                fontFamily="'Noto Sans SC', sans-serif"
                              >
                                {" "}
                                <a
                                  href="https://knol.ethereum.cn/explorer"
                                  target="_blank"
                                >
                                  浏览器
                                </a>
                              </PseudoBox>
                            </MenuItem>
                            <MenuItem
                              height="20px"
                              _focus={{ backgroundColor: "#191919" }}
                            >
                              <PseudoBox
                                as="p"
                                _hover={{ color: "#ee771c" }}
                                display="inline"
                                textAlign="center"
                                w="100%"
                                fontSize="1rem"
                                fontFamily="'Noto Sans SC', sans-serif"
                              >
                                <a
                                  href="https://eth2.ethereum.cn/staking/jiao-cheng/zhu-wang-zhi-ya-jiao-cheng/"
                                  target="_blank"
                                >
                                  质押ETH
                                </a>
                              </PseudoBox>
                            </MenuItem>
                          </MenuList>
                        </React.Fragment>
                      )}
                    </Menu>
                  </li>
                </Box> */}
              </ul>
            </nav>
          </Box>

          <PseudoBox
            display={["inline", "inline", "inline", "none"]}
            _hover={{ color: "#ee771c" }}
            fontSize="1rem"
            cursor="pointer"
            ml="2rem"
            ref={btnRef}
            variantColor="teal"
            onClick={onOpen}
            color="#fff"
            mt="1.2rem"
          >
            Ξ
          </PseudoBox>
        </Flex>

        {/* 🔍搜索 */}
        <Flex className={StatModule.box}>
          <Stat />
          <Box
            mr={["1.9rem", "1.9rem", "5.9rem", "5.9rem"]}
            float="right"
            verticalAlign="middle"
          >
            <Search indices={searchIndices} />
          </Box>
        </Flex>
      </Flex>

      {/* header右侧 */}
      <Box>
        <>
          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                {navList.map((item, index) => (
                  <PseudoBox
                    cursor="pointer"
                    _active={{ color: "#ee771c" }}
                    fontSize="1rem"
                    key={index}
                    textAlign="center"
                    py="0.4rem"
                  >
                    <Link to={item.link}>{item.name}</Link>
                  </PseudoBox>
                ))}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Box>

      {/* <GasFee /> */}
    </Box>
  )
}

export default Header
