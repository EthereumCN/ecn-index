import { Avatar, Skeleton, Text } from "@chakra-ui/core"
import React from "react"
import styled from "styled-components"

const ExpressItemA = styled.a`
  /* min-height: 128px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 12px;
  padding-bottom: 12px;
  position: relative;
  /* margin-bottom: 5px;
  margin-top: 5px; */
  /* background-color: green; */
  &::after {
    width: calc(100% - 46px);
    height: 100%;
    content: "";
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid #3d3d3d;
  }
  &:hover {
    background-color: #353230;
  }
`
const ExpressContentSpan = styled.span`
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.375rem;
  width: 100%;
  margin-bottom: 10px;
  /* min-height: 66px; */

  color: #ffffff;
`
const ExpressAuthorDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`
export const ExpressItem = ({
  content,
  username,
  imgsrc,
  isLoading = false,
  url,
}) => {
  return (
    <ExpressItemA
      href={url || "javascript:void(0);"}
      target={isLoading ? "_self" : "_blank"}
    >
      {isLoading ? (
        <>
          <Skeleton height="20px" my="10px" w="100%" />
          <Skeleton height="20px" my="10px" w="100%" />
        </>
      ) : (
        <ExpressContentSpan>{content}</ExpressContentSpan>
      )}
      <ExpressAuthorDiv>
        <Avatar
          defaultValue={"https://cdn.discordapp.com/embed/avatars/0.png"}
          src={imgsrc}
          w="25px"
          h="25px"
        />
        <Text
          pl="8px"
          lineHeight="25px"
          fontSize="0.8rem"
          color="#fff"
          cursor="pointer"
        >
          {username}
        </Text>
      </ExpressAuthorDiv>
    </ExpressItemA>
  )
}
