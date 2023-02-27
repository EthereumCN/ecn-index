import React from "react"
import { IconButton } from "@chakra-ui/core"

export const IconBtn = ({ children, ariaLabel, ...rest }) => {
  return (
    <IconButton
      variant="unstyled"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      // p={0}
      aria-label={ariaLabel}
      icon={() => children}
      {...rest}
    ></IconButton>
  )
}
