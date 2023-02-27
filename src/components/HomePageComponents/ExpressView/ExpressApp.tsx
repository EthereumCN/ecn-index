import React, { useEffect, useMemo, useState } from "react"
import { Box, Flex } from "@chakra-ui/core"
import ExpressHeader from "./ExpressHeader"
import { ExpressFooter } from "./ExpressFooter"
import { DateLine } from "./DateLine"
import { ExpressViewer } from "./ExpressViewer"
import { useMonthMsgQuery } from "./query/queries"
import { format, formatISO, isSameDay, sub } from "date-fns"
import uniq from "lodash.uniq"

const fromDate = format(
  sub(new Date(), {
    months: 5,
  }),
  "yyyy-MM"
)
const dateStr = format(new Date(), "yyyy-MM")

const calcDayNavInfo = (days: string[], cur: string) => {
  const hasNext =
    days.indexOf(cur) !== days.length - 1 && days.indexOf(cur) !== -1
  const nextString = hasNext ? days[days.indexOf(cur) + 1] : null
  const hasPre = days.indexOf(cur) !== 0 && days.indexOf(cur) !== -1
  const preString = hasPre ? days[days.indexOf(cur) - 1] : null

  return {
    hasNext,
    nextString,
    hasPre,
    preString,
  }
}

const ExpressApp = () => {
  const { data, isLoading, isSuccess } = useMonthMsgQuery({ fromDate, dateStr })
  const [currentDate, setCurrentDate] = useState<string>("")

  const dates = useMemo(() => {
    console.log("dates")
    return uniq(
      data
        ? data.messagesOfMonth?.map(v =>
            formatISO(new Date(v.verifiedAt), { representation: "date" })
          )
        : []
    )
  }, [data?.navInfo.maxDate])
  const msgs = useMemo(() => {
    return data
      ? data.messagesOfMonth.filter(m =>
          isSameDay(new Date(currentDate), new Date(m.verifiedAt))
        )
      : []
  }, [currentDate, data?.navInfo.maxDate])

  useEffect(() => {
    if (isSuccess && data && data.navInfo && data.navInfo.currentDate)
      setCurrentDate(format(new Date(data?.navInfo.currentDate), "yyyy-MM-dd"))
  }, [isSuccess])

  const { hasNext, hasPre, nextString, preString } = calcDayNavInfo(
    dates,
    currentDate
  )
  // console.log("data", data)

  return (
    <Flex
      direction={"column"}
      borderRadius={"16px"}
      w={["100%", "100%", "35%", "27.5%"]}
      h="550px"
      backgroundColor="#282828"
      alignSelf={"flex-start"}
    >
      <ExpressHeader />
      <DateLine
        isLoading={isLoading}
        hasNext={hasNext}
        hasPre={hasPre}
        onNext={() => {
          setCurrentDate(nextString || currentDate)
        }}
        onPre={() => {
          setCurrentDate(preString || currentDate)
        }}
        dateText={`${currentDate} 刊`}
      />
      <ExpressViewer isLoading={isLoading} msgs={msgs} />

      <ExpressFooter />
    </Flex>
  )
}

export { ExpressApp }
