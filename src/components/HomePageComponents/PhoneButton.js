import React from "react"
import * as framerMotion from "framer-motion"
import { Box,  Text } from "@chakra-ui/core"

const PhoneButton = ({ color, value }) => {
  // Create a custom motion component from Box
  const MotionBox = framerMotion.motion.custom(Box)
  return (

    <Box w="20%">
      <MotionBox
        marginY="1rem"
        bg={color + ".500"}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Box textAlign="center" color="#fff">
          <Text>{value}</Text>
        </Box>
      </MotionBox>
    </Box>
  )
}

export default PhoneButton
