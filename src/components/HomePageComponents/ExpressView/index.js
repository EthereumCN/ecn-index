import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ExpressApp } from "./ExpressApp"
const queryClient = new QueryClient()

const ExpressView = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ExpressApp />
    </QueryClientProvider>
  )
}
export default ExpressView
