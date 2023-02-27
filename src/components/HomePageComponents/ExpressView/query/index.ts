// import { NEXT_PUBLIC_API_URL } from "@/constants"
const GATSBY_EXPRESS_API_URL = process.env.GATSBY_EXPRESS_API_URL
export const fetchMonthMessage = async ({
  dateStr,
  fromDate,
  toDate,
}: {
  dateStr: string
  fromDate?: string
  toDate?: string
}): Promise<{
  navInfo: {
    maxDate: Date
    minDate: Date
    currentDate: Date
    nextMonthDate: Date
    previousMonthDate: Date
  }
  messagesOfMonth: ({
    id: string
    expressUrl: string
    expressMessage: string
    verifiedAt: Date
    userId: string
    contentType: string
  } & {
    user: {
      name: string
      discordAvatar: string
    }
  })[]
}> => {
  const fromDateQuery = fromDate ? `&fromDate=${fromDate}` : ""
  const toDateQuery = toDate ? `&toDate=${toDate}` : ""
  const response = await fetch(
    `${GATSBY_EXPRESS_API_URL}/message/?date=${dateStr}${fromDateQuery}${toDateQuery}`
  )
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return response.json()
}
