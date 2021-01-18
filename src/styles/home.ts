import { css } from '@emotion/react';

export const homeCss = css`
  .visual {
    padding-top: 115px;
    background-color: yellow;
    overflow: hidden;
  }
  .visual-slider {
    position: relative;
    height: calc(100vh - 115px);
    > p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .main {
    padding: 0 20px;
    > .main-title {
      margin-bottom: 35px;
      > h2 {
        display: inline-block;
        font-size: 32px;
        font-weight: bold;
        vertical-align: middle;
        margin-right: 25px;
        > i {
          color: #00a19a;
        }
      }
      > button {
        vertical-align: middle;
        padding: 8px;
        color: #fff;
        border-radius: 2px;
        background: #00a19a;
        &:after {
          display: inline-block;
          width: 7px;
          height: 7px;
          content: '';
          margin-left: 4px;
          transform: rotate(-45deg);
          border-style: solid;
          border-width: 0px 1px 1px 0px;
          border-color: #fff;
        }
      }
    }
  }

  .main.new-arrival {
    margin-top: 50px;
    .new-arrival-slider {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    }
  }

  .main.pre-order {
    > .main-title {
      margin-bottom: 115px;
      > h2 > i {
        color: #eccb00;
      }
      > button {
        background: #eccb00;
      }
    }
  }

  .main.magazine {
    > .main-title {
      > h2 > i {
        color: #eb5a3d;
      }
      > button {
        background: #eb5a3d;
      }
    }
  }
`;
