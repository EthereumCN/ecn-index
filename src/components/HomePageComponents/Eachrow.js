import React from "react"
import { Flex, PseudoBox, Box } from "@chakra-ui/core"
import Eachrowitem from "./Eachrowitem"
import { Link } from "gatsby"
import eachRow from "./eachRow.module.css"
import hovStyle from "../css/hover.module.css"

const Eachrow = ({ data, rowName }) => {
  return (
    <>
      <Flex
        mt={["2rem", "2rem", "2rem", "3rem"]}
        className={eachRow.rowsp}
        alignItems="center"
        textAlign="center"
        gridColumn="1 / -1"
      >
        <Link to={data[0].mainTag}>
          <PseudoBox className={hovStyle.ccc}>{rowName}</PseudoBox>
        </Link>
      </Flex>
      <Flex flexWrap="wrap" mt="4rem" justifyContent="space-between">
        <Eachrowitem data={data[0]} />

        <Eachrowitem data={data[1]} />

        <Eachrowitem data={data[2]} />
      </Flex>
    </>
  )
}

export default Eachrow
