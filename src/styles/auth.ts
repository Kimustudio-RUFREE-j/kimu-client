import { css } from '@emotion/react';
import { mq } from '@/styles/common';

export const signinCss = css`
  display: flex;
  justify-content: center;
  margin-top: 43px;
  margin-bottom: 61px;
  .signin,
  .non-member {
    width: 100%;
    max-width: 385px;
    margin: 60px 0;
    padding: 0 52px;
    h2 {
      font-size: 20px;
      text-align: center;
      margin-bottom: 60px;
    }
    form {
      width: 100%;
      input {
        display: block;
        width: 100%;
        padding: 10px 0;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        &:nth-of-type(2) {
          margin-top: 30px;
        }
      }
      button {
        display: block;
        width: 100%;
        max-width: 220px;
        color: #fff;
        margin: 80px auto 0;
        padding: 16px 10px;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #1d1d1d;
      }
    }
  }

  .signin {
    > ul {
      display: flex;
      justify-content: center;
      margin-top: 34px;
      > li {
        position: relative;
        padding: 0 25px;
        &:after {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          display: block;
          width: 1px;
          height: 70%;
          content: '';
          background-color: #838383;
        }
        &:first-of-type {
          padding-left: 0;
          &:after {
            display: none;
          }
        }
        &:last-of-type {
          padding-right: 0;
        }
        > a {
          font-size: 15px;
          color: #6b6b6b;
        }
      }
    }
  }

  .non-member {
    border-left: 1px solid rgba(0, 0, 0, 0.25);
    form {
      button {
        margin: 30px auto 0;
      }
    }
  }
  .non-member-noti {
    font-size: 13px;
    line-height: 1.54;
    color: #3f4142;
    margin-top: 10px;
  }

  ${mq[0]} {
    display: block;
    margin: 33px 0;
    padding: 0 20px;
    box-sizing: border-box;
    .signin,
    .non-member {
      margin: 0 auto;
      padding: 0;
      h2 {
        font-size: 17x;
        margin-bottom: 36px;
      }
      form {
        button {
          max-width: 100%;
          margin: 35px auto 0;
          padding: 14px 8px;
        }
      }
    }

    .signin {
      > ul {
        margin-top: 27px;
        > li {
          padding: 0 15px;
          > a {
            font-size: 13px;
          }
        }
      }
    }

    .non-member {
      border-left: none;
      h2 {
        font-size: 13px;
        margin-top: 73px;
        margin-bottom: 25px;
      }
      form {
        button {
          margin: 10px auto 0;
        }
      }
    }
    .non-member-noti {
      font-size: 12px;
    }
  }
`;
