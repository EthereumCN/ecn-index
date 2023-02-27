import { useQuery } from "@tanstack/react-query"
import { formatISO, isSameDay } from "date-fns"
import uniq from "lodash.uniq"
import { useCallback } from "react"

import { fetchMonthMessage } from "./index"

const idfun = t => t
export const useMonthMsgQuery = <
  T = Awaited<ReturnType<typeof fetchMonthMessage>>
>({
  dateStr,
  fromDate,
  toDate,
  select = idfun,
}: // select,
{
  dateStr: string
  fromDate?: string
  toDate?: string
  select?: (data: Awaited<ReturnType<typeof fetchMonthMessage>>) => T
}) => {
  return useQuery({
    queryKey: ["message", `${dateStr}-${fromDate}=${toDate}`],
    queryFn: () => fetchMonthMessage({ dateStr, fromDate, toDate }),
    select: select,
    keepPreviousData: true,
    staleTime: 60 * 1000,
  })
  // console.log("data", data);
}

// const;
