import { css } from '@emotion/react';
import { mq } from '@/styles/common';

export const myPageCss = css`
  max-width: 980px;
  margin: 0 auto;
  > h2 {
    font-size: 25px;
    text-align: center;
    margin-top: 51px;
    margin-bottom: 66px;
  }
  > .mypage-main-assets {
    display: flex;
    text-align: center;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.08);
    > li {
      width: 50%;
      > a {
        position: relative;
        display: block;
        padding: 41px 20px;
        > h6 {
          font-size: 13px;
          color: #3f4142;
        }
        > span {
          display: block;
          font-size: 17px;
          color: #1d1d1d;
          margin-top: 10px;
        }
      }
      &:last-of-type > a {
        &:after {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          display: block;
          width: 1px;
          height: 50%;
          content: '';
          background-color: rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
  .mypage-main-manage {
    margin-top: 10px;
    margin-bottom: 200px;
    > li {
      > a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
`;

export const mypageLayoutCss = css`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  > .mypage-menu {
    width: 245px;
    box-shadow: 3px 0 5px 0 rgba(0, 0, 0, 0.12);
    padding-bottom: 300px;
    .mypage-back {
      margin-top: 50px;
      margin-bottom: 48px;
    }
    > li {
      > a {
        font-size: 17px;
        color: #868686;
      }
      margin-bottom: 24px;
    }
  }
  > .mypage-container {
    width: calc(100% - 245px);
  }
`;

export const couponCss = css`
  padding-left: 92px;
  > h2 {
    font-size: 36px;
    margin-top: 50px;
    margin-bottom: 48px;
  }
  .coupon-input {
    > span {
      font-size: 15px;
      color: #3f4142;
    }
    > div {
      margin-top: 12px;
      padding-bottom: 28px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      > input {
        width: 325px;
        height: 48px;
        line-height: 48px;
        padding: 0 15px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        background-color: #f8f8f8;
      }
      > button {
        width: 110px;
        height: 48px;
        line-height: 48px;
        color: #fff;
        margin-left: 10px;
        border-radius: 5px;
        background-color: #1d1d1d;
      }
      > p {
        font-size: 13px;
        color: #ff4343;
        margin-top: 12px;
      }
    }
  }
  > .coupon-container {
    margin-top: 28px;
    > span {
      font-size: 15px;
    }
    .coupon-list {
      margin-top: 26px;
    }
  }
`;
