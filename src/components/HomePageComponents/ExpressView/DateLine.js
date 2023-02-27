import React from "react"
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi"
import { IconBtn } from "./IconBtn"
import styled from "styled-components"
import { Skeleton } from "@chakra-ui/core"

const DateText = styled.span`
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
  /* padding-left: 12.7%;
  padding-right: 12.7%; */
  /* line-height: 34px; */
  /* identical to box height */

  color: #ffffff;
`
export const DateLine = ({
  hasPre,
  hasNext,
  onPre,
  onNext,
  dateText,
  isLoading,
}) => {
  return (
    <div
      style={{
        height: "56px",
        width: "100%",
        paddingLeft: "4%",
        paddingRight: "4%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#313131",
        justifyContent: "space-between",
      }}
    >
      <IconBtn isDisabled={!hasPre} onClick={onPre} ariaLabel={"previous-day"}>
        <HiChevronDoubleLeft color="white" size={"28px"} />
      </IconBtn>

      {isLoading ? (
        <Skeleton h={"50%"} w={"60%"} />
      ) : (
        <DateText>{dateText}</DateText>
      )}
      <IconBtn isDisabled={!hasNext} onClick={onNext} ariaLabel={"next-day"}>
        <HiChevronDoubleRight color="white" size={"28px"} />
      </IconBtn>
    </div>
  )
}
