import React from "react"
import { Box } from "@chakra-ui/core"
import videoDealogModule from "./videoDialog.module.css"
import EachVideo from "./eachVideo"



const Test = () => {
  return (
    <Box className={videoDealogModule.featured}>
      <EachVideo />
      <EachVideo />
      <EachVideo />
      <EachVideo />
    </Box>
  )
}

export default Test
