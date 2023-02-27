import React from "react"
import { ExpressItem } from "./ExpressItem"
import styled from "styled-components"
import { Skeleton } from "@chakra-ui/core"

const ExpressViewerContainer = styled.div`
  width: 100%;
  height: 384px;
  overflow-y: auto;

  /* Works on Firefox */
  & {
    scrollbar-width: thin;
    scrollbar-color: #a8a8a8 transparent;
  }

  /* Works on Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a8a8a8;
    border-radius: 6px;
    /* border: 3px solid transparent; */
  }
`

export const ExpressViewer = ({ isLoading, msgs }) => {
  return (
    <ExpressViewerContainer>
      {isLoading
        ? [1, 2, 3, 4].map(i => {
            return (
              <ExpressItem
                isLoading={true}
                key={i}
                content={""}
                username={""}
                imgsrc={""}
              />
            )
          })
        : msgs.map(m => {
            return (
              <ExpressItem
                url={m.expressUrl}
                key={m.id}
                content={m.expressMessage}
                username={m.user.name}
                imgsrc={m.user.discordAvatar}
              />
            )
          })}
    </ExpressViewerContainer>
  )
}
