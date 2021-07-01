import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  Stat,
  StatLabel,
  StatArrow,
  Spinner,
  Link,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PseudoBox,
} from "@chakra-ui/core"
import { Ri24HoursLine } from "react-icons/ri"
import StatModule from "./Stat.module.css"

const Stats = () => {
  const [data, setData] = useState(0)

  // const [data2, setData2] = useState(0)

  // let rate = Math.round(data.usd_24h_change * 100) / 100

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true"
  //     )

  //     setData(result.data.ethereum)
  //   }

  //   fetchData()

    // const fetchData2 = async () => {
    //   const result = await axios(
    //     "https://ethgasstation.info/api/ethgasAPI.json?api-key=cfdb0db15075b2fcda1589258fe706a492009546a0d3380536b2c8d464cb"
    //   )
    //   setData2(result.data.average / 10)
    // }

    // fetchData2(data2)

    // 自动刷新
  //   const timer = setInterval(() => {
  //     const fetchData1 = async () => {
  //       const result = await axios(
  //         "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true"
  //       )
  //       setData(result.data.ethereum)
  //     }

  //     fetchData1(data)
  //   }, 8000)

  //   return () => clearInterval(timer)
  // }, [])

  return (
    <Stat mt="1.4rem" className={StatModule.onebox}>
      <StatLabel fontSize="1rem">
        {data === 0 ? (
          // <Spinner size="sm" textAlign="left" />
          <span/>
        ) : (
          <>
            <PseudoBox as="span" color="#fff">
              {" "}
              <PseudoBox
                fontWeight="900"
                as="span"
                color="rgba(238, 119, 28, 0.65)"
              >
                {/* ETH */}
              </PseudoBox>{" "}
              {/* &nbsp; ${data.usd} &nbsp; */}
              {/* <StatArrow
                type={rate >= 0 ? "increase" : "decrease"}
                fontSize="0.5rem"
              />{" "} */}
              <>
                {/* {rate + "%"} &nbsp; &nbsp;&nbsp; */}
                {/* Gas: */}
                {/* {data2 === 0 ? <Spinner size="sm" /> : data2 + " " + "Gwei"} */}
              </>{" "}
            </PseudoBox>
          </>
        )}
      </StatLabel>
    </Stat>
  )
}

export default Stats
