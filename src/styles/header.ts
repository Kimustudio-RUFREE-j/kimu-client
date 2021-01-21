import { css } from '@emotion/react';
import { mq, fadeIn, fadeOut } from '@/styles/common';

export const headerCss = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 6px 0px;

  .sub-menu {
    display: flex;
    justify-content: flex-end;
    padding: 22px 20px 20px;
    box-sizing: border-box;
    > li {
      margin-right: 26px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 9px;
    box-sizing: border-box;
  }

  .main-menu {
    display: flex;
    align-items: center;
    > ul {
      display: flex;
      > li {
        margin-left: 36px;
        > a {
          font-size: 22px;
          font-weight: bold;
        }
      }
    }
  }

  .logo {
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
    }
  }

  .util-menu {
    display: flex;
    align-items: center;
    > ul {
      display: flex;
      > li {
        padding: 0 5px;
        &:last-of-type {
          position: relative;
          &::before {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            display: block;
            content: '';
            width: 1px;
            height: 70%;
            background-color: #1d1d1d;
          }
        }
      }
    }
    > button {
      margin-left: 30px;
    }
  }

  ${mq[0]} {
    padding: 15px 20px;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      cursor: pointer;
      img {
        width: 25px;
        height: 25px;
      }
    }
    .search-btn {
      > img {
        width: 20px;
      }
    }
  }
`;

export const burgerIcon = css`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;

  .line {
    position: absolute;
    left: 0;
    display: block;
    width: 20px;
    height: 2px;
    margin-top: 2px;
    opacity: 1;
    transform: rotate(0deg);
    transition: all 0.25s;
    background-color: #1d1d1d;
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 7px;
    }
    &:nth-of-type(3) {
      top: 14px;
    }
    &:nth-of-type(4) {
      top: 7px;
      background-color: transparent;
      &:before,
      &:after {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        transform: rotate(0deg);
        background-color: #1d1d1d;
        content: '';
        transition: all 0.25s;
      }
      &:before {
        transform: rotate(45deg) translateX(-10px) translateZ(0);
      }
      &:after {
        transform: rotate(-45deg) translateX(10px) translateZ(0);
      }
    }
  }

  &.active {
    .line {
      &:nth-of-type(1) {
        opacity: 0;
        transform: translateX(-100%);
      }
      &:nth-of-type(2) {
        opacity: 0;
        transform: translateX(100%);
        transition-delay: 80ms;
      }
      &:nth-of-type(3) {
        opacity: 0;
        transform: translateX(-100%);
        transition-delay: 160ms;
      }
      &:nth-of-type(4) {
        &:before,
        &:after {
          transition: opacity 0.2s, transform 0.38s;
        }
        &:before {
          opacity: 1;
          transform: rotate(45deg) translateX(0px) translateZ(0);
          transition-delay: 150ms;
        }
        &:after {
          opacity: 1;
          transform: rotate(-45deg) translateX(0px) translateZ(0);
          transition-delay: 250ms;
        }
      }
    }
  }
`;

export const mbMenuCss = css`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  opacity: 0;
  animation: ${fadeOut} 0.3s;
  animation-fill-mode: forwards;
  background-color: #fff;
  &.active {
    display: block;
    animation: ${fadeIn} 0.3s;
    animation-fill-mode: forwards;
  }

  .mb-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(29, 29, 29, 0.15);
    > h2 {
      font-size: 15px;
    }
    .cart-btn {
      > img {
        width: 25px;
      }
    }
  }

  .mb-main-menu {
    padding: 19px 25px;
    box-sizing: border-box;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.08);
    > li {
      padding: 19px 8px;
      font-size: 22px;
    }
  }

  .mb-sub-menu {
    padding: 3px 25px 0;
    > li {
      > a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 17px 8px 13px;
        border-bottom: 1px solid rgba(29, 29, 29, 0.15);
        > i {
          display: inline-block;
          width: 7px;
          height: 7px;
          content: '';
          transform: rotate(-45deg);
          border-style: solid;
          border-width: 0px 1px 1px 0px;
          border-color: #1d1d1d;
        }
      }
    }
  }

  .mb-menu-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    > a {
      display: inline-block;
      width: 50%;
      font-size: 15px;
      line-height: 1.5;
      text-align: center;
      color: #fff;
      padding: 14px 0;
      background-color: #1d1d1d;
      &:last-of-type {
        position: relative;
        &:after {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          width: 1px;
          height: 30%;
          content: '';
          background-color: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
`;
