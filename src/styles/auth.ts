import { css } from '@emotion/react';
import { mq } from '@/styles/common';

export const signinCss = css`
  display: flex;
  justify-content: center;
  /* 페이지 wrap */
  .signin,
  .non-member {
    width: 100%;
    max-width: 385px;
    margin-top: 103px;
    margin-bottom: 150px;
    padding: 0 52px;
    h2 {
      font-size: 20px;
      text-align: center;
      margin-bottom: 60px;
    }
    /* input form */
    form {
      width: 100%;
      input {
        display: block;
        width: 100%;
        padding: 15px 0;
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

  /* 로그인 페이지 */
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
        > a,
        > button {
          font-size: 15px;
          color: #6b6b6b;
        }
      }
    }
  }

  /* 비회원 페이지 */
  .non-member {
    form {
      button {
        margin: 34px auto 0;
      }
    }
    .non-member-noti {
      font-size: 13px;
      line-height: 1.54;
      color: #3f4142;
      margin-top: 10px;
    }
  }

  ${mq[0]} {
    display: block;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    /* 페이지 wrap */
    .signin,
    .non-member {
      margin: 52px auto 0;
      padding: 0;
    }

    /* 로그인 페이지 */
    .signin {
      > ul {
        > li {
          padding: 0 15px;
          > a {
            font-size: 13px;
          }
        }
      }
    }
  }
`;

export const signupCss = css`
  max-width: 468px;
  width: 100%;
  margin: 43px auto 0;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  /* 회원가입 전체 페이지 공통 */
  h2 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 26px;
    &.signup-header {
      margin-top: 60px;
      margin-bottom: 57px;
    }
    &.pick-issue-header {
      margin-bottom: 26px;
    }
  }
  .signup-btn {
    display: block;
    width: 220px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    margin: 35px auto 110px;
    padding: 18px 10px;
    box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.15);
    opacity: 0.5;
    background-color: #1d1d1d;
    cursor: not-allowed;
    &.signup {
      margin-top: 99px;
    }
    &.fill {
      opacity: 1;
      cursor: pointer;
    }
  }

  /* 약관동의 페이지 */
  .signup-agree-wrap {
    .header {
      margin-top: 60px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .container .check-box {
      &:nth-of-type(1) {
        padding-bottom: 8px;
      }
    }
    .textarea {
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
    .noti {
      font-size: 12px;
      line-height: 1.5;
      color: #6b6b6b;
    }

    /* 약관동의 체크박스 */
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
  }

  /* 약관동의를 제외한 input 입력 페이지 */
  .signup-wrap {
    padding-left: 20px;
    padding-right: 20px;
  }

  .signup-form {
    input:not([type='radio']) {
      display: block;
      width: 100%;
      padding: 14px 13px;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      box-sizing: border-box;
      background-color: #f8f8f8;
      &:focus {
        background-color: #fff;
      }
    }

    .validation {
      font-size: 13px;
      color: red;
      padding: 5px 0 7px;
      box-sizing: border-box;
      &.val-email {
        padding: 5px 0 38px;
      }
      &.black {
        color: #1d1d1d;
        padding-left: 15px;
      }
    }

    /* 휴대폰 인증 input & button */
    .tel {
      margin-top: 32px;
      > div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        input:not([type='radio']) {
          width: calc(100% - 110px);
        }
        button {
          width: 110px;
          color: #fff;
          line-height: 1.4;
          margin-left: 10px;
          padding: 15px 10px;
          border-radius: 5px;
          background-color: #d5d5d5;
          &.fill {
            background-color: #1d1d1d;
          }
        }
      }
    }
  }

  /* 생년월일 입력 selectbox */
  .signup-birth,
  .signup-gender {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #6b6b6b;
    margin-top: 35px;
    > span {
      width: 60px;
      margin-right: 50px;
    }
  }
  .signup-birth {
    .custom-datepicker {
      position: relative;
      width: calc(100% - 60px);
      &:after {
        position: absolute;
        top: 50%;
        right: 20px;
        width: 5px;
        height: 5px;
        border-style: solid;
        border-width: 0px 1px 1px 0px;
        border-color: #6b6b6b;
        transform: rotate(45deg) translateY(-50%);
        content: '';
      }
      &.on:after {
        transform: rotate(-135deg);
      }
      > div {
        width: 100%;
      }
    }
  }

  /* 성별 입력 */
  .signup-gender {
    padding-bottom: 35px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    label:last-of-type {
      margin-left: 20px;
    }
    input[type='radio'] {
      display: none;
    }
    input[type='radio'] + label span {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: middle;
      margin: -2px 5px 0 0;
      border: 1px solid #838383;
      border-radius: 50%;
      cursor: pointer;
    }
    input[type='radio']:checked + label span:after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #6b6b6b;
      content: '';
    }
  }

  /* 사회 이슈 선택 */
  .pick-issue {
    max-width: 370px;
    margin: 0 auto;
  }
  .pick-issue-subtitle {
    display: block;
    text-align: center;
    color: #6b6b6b;
  }
  .pick-issue-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 7px;
    margin-top: 44px;
    > li {
      > input[type='checkbox'] {
        display: none;
      }
      > label {
        position: relative;
        display: block;
        width: 105px;
        min-height: 100px;
        border: 3px solid rgba(29, 29, 29, 0.1);
        border-radius: 18px;
        background-color: #67c296;
        > img {
          position: absolute;
          top: 8px;
          right: 8px;
          display: none;
          width: 23px;
          height: 23px;
          border-radius: 50%;
          &.on {
            display: block;
          }
        }
        > span {
          position: absolute;
          bottom: 13px;
          left: 13px;
          color: #fff;
        }
      }
    }
  }

  ${mq[0]} {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 43px;

    /* 회원가입 전체 페이지 공통 */
    h2 {
      font-size: 15px;
      text-align: left;
      margin-bottom: 0;
      &.signup-header {
        font-size: 17px;
        margin: 25px 0;
      }
      &.pick-issue-header {
        margin-bottom: 10px;
      }
    }
    .signup-btn {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      font-size: 15px;
      margin: 39px auto 0;
      padding: 14px 5px;
      box-shadow: none;
      &.signup {
        margin-top: 0;
      }
    }

    /* 약관동의 페이지 반응형 */
    .signup-agree-wrap {
      height: 100%;
      overflow-y: auto;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 22px;
        padding: 29px 20px 36px;
      }
      .container {
        padding: 0 20px;
        box-sizing: border-box;
      }
      /* 약관동의 체크박스 */
      label {
        margin: 0;
      }
    }

    /* 약관 동의를 제외한 input 입력 페이지 */
    .signup-wrap {
      height: 100%;
      overflow-y: auto;
    }

    /* 생년월일 입력 selectbox */
    .signup-birth,
    .signup-gender {
      margin-top: 25px;
    }
    .signup-gender {
      padding-bottom: 25px;
    }

    /* 사회 이슈 선택 */
    .pick-issue-subtitle {
      text-align: left;
    }
    .pick-issue-container {
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 25px;
      > li {
        > label {
          width: auto;
          height: 27vw;
          min-height: auto;
          max-height: 100px;
        }
      }
    }
  }
`;
