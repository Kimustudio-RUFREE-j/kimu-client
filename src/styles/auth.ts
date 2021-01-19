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
    margin: 33px 0 55px;
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

export const signupCss = css`
  max-width: 468px;
  width: 100%;
  margin: 0 auto;
  padding: 43px 20px;
  box-sizing: border-box;

  .agree-header {
    margin-top: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 26px;
  }

  .agree-container .check-box {
    &:nth-of-type(1) {
      padding-bottom: 8px;
    }
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #3f4142;
    margin: 15px 0;
    -webkit-box-align: center;
    cursor: pointer;
    &:before {
      content: '';
      width: 16px;
      height: 16px;
      margin-right: 10px;
      border: 1px solid rgb(63, 65, 66);
      border-radius: 2px;
      box-sizing: border-box;
      background: rgb(255, 255, 255);
    }
  }

  input {
    display: none;
  }
  input[type='checkbox']:checked + label:before {
    background-color: rgb(29, 29, 29);
  }
  input[type='checkbox']:checked + label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 6px;
    display: block;
    width: 5px;
    height: 8px;
    border-width: 2px 0px 0px 2px;
    border-style: solid;
    border-color: rgb(255, 255, 255);
    border-radius: 3px;
    box-sizing: border-box;
    transform: rotate(-135deg);
  }

  .text-area {
    width: 100%;
    height: 160px;
    margin: 15px 0;
    padding: 12px;
    border: 1px solid #dce0e5;
    background-color: #f8f8f8;
    > p {
      height: 100%;
      line-height: 1.5;
      white-space: pre-line;
      overflow: scroll;
    }
  }

  .info {
    font-size: 12px;
    line-height: 1.5;
    color: #6b6b6b;
  }

  .agree-btn {
    display: block;
    width: 220px;
    font-size: 15px;
    color: #fff;
    margin: 35px auto 60px;
    padding: 18px 10px;
    box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.15);
    background-color: #1d1d1d;
  }

  ${mq[0]} {
    padding: 0;
    .agree-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 22px;
      padding: 29px 20px 36px;
    }

    h2 {
      font-size: 15px;
      text-align: left;
      margin-bottom: 0;
    }

    .agree-container {
      padding: 0 20px;
      box-sizing: border-box;
    }

    label {
      margin: 0;
    }

    .agree-btn {
      width: 100%;
      font-size: 15px;
      margin: 39px auto 0;
      padding: 14px 5px;
      box-shadow: none;
    }
  }
`;
