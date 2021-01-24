import { css } from '@emotion/react';
import { mq } from '@/styles/common';

export const footerCss = css`
  background-color: #1d1d1d;

  > div {
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 45px 20px;
    box-sizing: border-box;
  }

  .info-wrap {
    display: flex;
    > div {
      padding-right: 70px;
      > h6 {
        padding-bottom: 10px;
      }
      &.co-info {
        > h6 {
          padding-bottom: 5px;
        }
        > address {
          margin-top: 15px;
        }
      }
      &.account-info {
        padding-right: 0;
      }
    }

    p,
    address {
      line-height: 1.79;
    }
    em {
      display: block;
    }
  }

  .policy-info {
    display: flex;
    margin-top: 30px;
    > a {
      color: #fff;
      padding-right: 5px;
      &:last-of-type {
        position: relative;
        padding-left: 5px;
        &::before {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          display: block;
          content: '';
          width: 1px;
          height: 70%;
          background-color: #fff;
        }
      }
    }
  }

  .social-info {
    width: 180px;
    white-space: normal;
    li {
      display: inline-block;
      width: 33.3333%;
      text-align: right;
      padding-left: 25px;
      padding-bottom: 25px;
      box-sizing: border-box;
      img {
        width: 35px;
        height: 35px;
      }
    }
  }

  ${mq[1]} {
    .social-info {
      width: 120px;
      li {
        width: 50%;
      }
    }
  }

  ${mq[0]} {
    > div {
      display: block;
    }

    .info-wrap {
      display: block;
      > div {
        padding-right: 0;
        &.co-info > address,
        &.help-info,
        &.account-info {
          white-space: normal;
          word-break: break-word;
          margin-top: 30px;
        }
      }
    }

    .social-info {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 30px;
      padding-top: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      li {
        width: auto;
        text-align: center;
        padding-left: 0;
        padding-bottom: 0;
      }
    }
  }
`;
