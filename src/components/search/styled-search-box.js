import styled, { css } from "styled-components"
import SearchBox from "./search-box"
// width: 8em;
const open = css`
  border-radius: 10px;
  background-color: rgba(73, 73, 76, 1);
  cursor: text;
  margin-left: -1.6em;
  padding-left: 0.6em;
  @media screen and (min-width: 1200px) {
    width: 230px;
  }

  @media screen and (min-width: 960px) and (max-width: 1090px) {
    width: 160px;
  }

  @media screen and (min-width: 1030px) and (max-width: 1048px) {
    width: 140px;
  }

  @media screen and (min-width: 1013px) and (max-width: 1029px) {
    width: 120px;
  }

  @media screen and (min-width: 997px) and (max-width: 1012px) {
    width: 110px;
  }

  @media screen and (min-width: 990px) and (max-width: 996px) {
    width: 100px;
  }

  @media screen and (min-width: 800px) and (max-width: 989px) {
    width: 180px;
  }

  @media screen and (min-width: 550px) and (max-width: 799px) {
    width: 170px;
  }

  @media screen and (min-width: 372px) and (max-width: 549px) {
    width: 150px;
  }

  @media screen and (min-width: 278px) and (max-width: 371px) {
    width: 85px;
  }

  @media screen and (max-width: 277px) {
    width: 60px;
  }
`



export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;

  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};
    font-size: 1.1em;
    transition: 100ms;
    border-radius: 2px;
    color: ${({ theme }) => theme.foreground};
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : open)}
  }

  .SearchIcon {
    width: 1em;
    margin: 0.3em;
    color: rgba(238, 119, 28, 0.7);
    pointer-events: none;
  }
`
