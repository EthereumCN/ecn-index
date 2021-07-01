import styled from "styled-components"

export default styled.div`
  position: relative;
 
  top:32%;
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
    top:35%;
  }

  @media screen and (min-width: 800px) and (max-width: 989px) {
    width: 180px;
    top:35%;
  }

  @media screen and (min-width: 550px) and (max-width: 799px) {
    width: 170px;
    top:35%;
  }

  @media screen and (min-width: 372px) and (max-width: 549px) {
    width: 150px;
    top:35%;
  }

  @media screen and (min-width: 278px) and (max-width: 371px) {
    width: 85px;
    top:35%;
  }

  @media screen and (max-width: 277px) {
    width: 60px;
    top:35%;
  }
`