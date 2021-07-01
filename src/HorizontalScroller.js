import React from 'react';
import styled from 'styled-components';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const HorizontalScroller = ({ children, ...other }) => (
  <Wrapper {...other}>
    <ScrollMenu
      transition={0.4}
      dragging={false}
      wheel={false}
      arrowLeft={<ArrowLeft />}
      arrowRight={<Arrow />}
      hideArrows={true}
      hideSingleArrow={true}
      alignCenter={false}
      translate={0.001}
      data={children}
    />
  </Wrapper>
);

const Arrow = styled.div`
  width: 54px;
  height: 54px;
  background-color: white;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  color: black;
  &::after {
    content: '';
    position: absolute;
    top: 21px;
    left: 18px;
    width: 12px;
    height: 12px;
    border-top: 3px solid ;
    border-right: 3px solid ;
    transform: rotate(45deg);
  }
`;

const ArrowLeft = styled(Arrow)`
  &::after {
    transform: rotate(-135deg);
    left: 22px;
    color: black;
  }
`;

const Wrapper = styled.div`
  .horizontal-menu {
    position: relative;
  }

  .menu-item-wrapper {
    > a {
      display: block;
      margin-left: 4px;
      width: 268px;
    }

    &:not(:first-child) {
      > a {
        margin-left: 30px;
      }
    }
  }

  .menu-wrapper {
    padding: 24px 0;
  }

  .scroll-menu-arrow {
    z-index: 1;
    transition: opacity 0.1s ease-in;
    position: absolute;
    left: auto;
    right: -27px;

    &:first-of-type {
      left: -27px;
      right: auto;
    }

    &--disabled {
      opacity: 0;
    }

    @media (max-width: 576px) {
      left: auto;
      right: -16px;

      &:first-of-type {
        left: -16px;
        right: auto;
      }
    }
  }

  ${props =>
    props.video &&
    `
    .scroll-menu-arrow {
      top: 72px;
    }

    .menu-wrapper {
      padding-top: 0;
    }

    .menu-item-wrapper {
      > div {
        width: 268px;
        margin-left: 0;
      }

      &:not(:first-child) {
        > div {
          margin-left: 32px;
        }
      }
    }
  `};
`;

export default HorizontalScroller;
