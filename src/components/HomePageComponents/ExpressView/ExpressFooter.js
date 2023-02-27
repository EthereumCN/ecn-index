import React from "react"
import styled from "styled-components"

const expressLink = process.env.GATSBY_EXPRESS_LINK

const Link = styled.a`
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 600;
  font-size: 0.9rem;

  text-decoration-line: underline;

  color: #ffffff;
  &:hover {
    color: #e1722f;
  }
`
export const ExpressFooter = () => {
  return (
    <div
      style={{
        height: "40px",
        width: "100%",
        borderBottomRightRadius: "16px",
        borderBottomLeftRadius: "16px",
        backgroundColor: "#3D3D3D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link target={"_blank"} href={expressLink}>
        {" "}
        更多{" "}
      </Link>
    </div>
  )
}
