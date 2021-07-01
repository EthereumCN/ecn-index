import React from "react"
import Header from "./HeaderComponents/Header"
import { Box, Link } from "@chakra-ui/core"
import Footer from "./FooterComponents/Footer"
import "../components/css/layout.css"

const Layout = ({ children }) => {
  return (
    // <Box position="relative" mx={["1rem", "1rem", "5rem", "5rem"]}>
    <Box maxW="1920px" margin="0 auto">
      <Box  position="relative" mx={["1rem", "1rem", "5rem", "5rem"]}  >
        <Header />

        <Box maxW="1440px" margin="0 auto">
        {children}
        </Box>
        {/* <Box className={footer.beian}  position="relative" textAlign="center" >
        <Link
        _hover={{textDecoration:"none"}}
          position="relative"
          top={["0rem", "0rem", "0rem", "-3rem"]}
          fontSize="0.9rem"
          color="rgba(73,73,76,1)"
          href="http://beian.miit.gov.cn/"
          isExternal
        >
          {" "}
          蜀ICP备2021001286号
        </Link>{" "}
      </Box> */}
      </Box>
      <Footer/>
    </Box>
  )
}

export default Layout
