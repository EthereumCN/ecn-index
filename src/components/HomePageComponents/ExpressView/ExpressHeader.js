import { IconButton } from "@chakra-ui/core"
import React from "react"
import styled from "styled-components"
import { BsRssFill } from "react-icons/bs"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// const useImgQuery = () => {
//   return useStaticQuery(graphql`
//     {
//       file(relativePath: { eq: "rss.png" }) {
//         childImageSharp {
//           fixed(width: 24) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   `)
// }

const Heading = styled.h2`
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  color: #ffffff;
`

const ExpressHeader = () => {
  // const rssimg = useImgQuery()
  return (
    <div
      style={{
        height: "70px",
        width: "100%",
        borderTopRightRadius: "16px",
        borderTopLeftRadius: "16px",
        backgroundColor: "#3D3D3D",
        display: "flex",
        paddingLeft: "26px",
        paddingRight: "23px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Heading>E群誌</Heading>
      {/* <IconButton
        variant="unstyled"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        // p={0}
        aria-label="rss"
        icon={() => (
          <Img
            // style={{ marginTop: "1rem" }}
            fixed={rssimg.file.childImageSharp.fixed}
            alt="rss"
          />
        )}
      ></IconButton> */}
    </div>
  )
}
export default ExpressHeader
