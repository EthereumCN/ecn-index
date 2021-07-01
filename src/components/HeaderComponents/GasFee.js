import React, { useState, useEffect } from "react"
import axios from "axios"
import { Spinner, Box, PseudoBox, StatArrow } from "@chakra-ui/core"
import StatModule from "./Stat.module.css"
import Epoch from "./Epoch"

const GasFee = () => {
  const [data, setData] = useState(0)

  const [data2, setData2] = useState(0)

  let rate = Math.round(data2.usd_24h_change * 100) / 100

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://ethgasstation.info/api/ethgasAPI.json?api-key=cfdb0db15075b2fcda1589258fe706a492009546a0d3380536b2c8d464cb"
      )
      setData(result.data.average / 10)
    }

    fetchData(data)

    const fetchData3 = async () => {
      const result2 = await axios(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true"
      )

      setData2(result2.data.ethereum)
    }
    fetchData3(data2)

    const timer = setInterval(() => {
      setData(0)
      setData2(0)

      const fetchData1 = async () => {
        const result = await axios(
          "https://ethgasstation.info/api/ethgasAPI.json?api-key=cfdb0db15075b2fcda1589258fe706a492009546a0d3380536b2c8d464cb"
        )
        setData(result.data.average / 10)
      }

      fetchData1(data)

      const fetchData2 = async () => {
        const result2 = await axios(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true"
        )
        setData2(result2.data.ethereum)
      }

      fetchData2(data)
    }, 30000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Box
      pb="1rem"
      backgroundColor="#191919"
      color="#fff"
      fontSize="1rem"
      fontWeight="900"
      left="0"
      w="100%"
      position="fixed"
      className={StatModule.gas}
      paddingLeft="13.5rem"
    >
      <PseudoBox as="span" color="#fff">
        {" "}
        <PseudoBox fontWeight="900" as="span" color="rgba(238, 119, 28, 0.65)">
          ETH
        </PseudoBox>{" "}
        &nbsp; $
        {data2 === 0 ? <Spinner size="sm" /> : <> {data2.usd} &nbsp; </>}
        <StatArrow
          type={rate >= 0 ? "increase" : "decrease"}
          fontSize="0.5rem"
        />{" "}
        <>
          {data2 === 0 ? (
            <Spinner size="sm" />
          ) : (
            <> {rate + "%"} &nbsp; &nbsp;&nbsp;</>
          )}
        </>
      </PseudoBox>
      &nbsp;
      <>
        Gas:&nbsp;{" "}
        {data === 0 ? (
          <Spinner size="sm" />
        ) : (
          <span style={{ color: "rgba(238,119,28,0.65)" }}>{data} Gwei</span>
        )}
      </>
      <Epoch />
    </Box>
  )
}

export default GasFee
