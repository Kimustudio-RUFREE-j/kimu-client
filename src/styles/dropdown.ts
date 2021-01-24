import { css } from '@emotion/react';

export const dropdownCss = css`
  > span {
    color: #6b6b6b;
    margin-left: 5px;
    margin-right: 14px;
  }
  &.last {
    > span {
      margin-right: 0;
    }
  }

  .dd-box {
    display: inline-block;
    cursor: pointer;
  }

  .dd-wrapper {
    position: relative;
    text-align: right;
  }

  .dd-header {
    position: relative;
    text-transform: capitalize;
    font-size: 13px;
    color: #6b6b6b;
    padding: 12px 10px;
    border: 1px solid #d5d5d5;
    box-sizing: content-box;
    background-color: #f8f8f8;
    &:after {
      display: inline-block;
      width: 5px;
      height: 5px;
      margin-left: 10px;
      margin-bottom: 3px;
      border-style: solid;
      border-width: 0px 1px 1px 0px;
      border-color: #6b6b6b;
      transform: rotate(45deg);
      content: '';
    }
    &.on:after {
      margin-bottom: 1px;
      transform: rotate(-135deg);
    }
  }

  .dd-list {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    min-height: 300px;
    margin-top: 2px;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  .dd-list-item {
    &:hover {
      background-color: #f8f8f8;
    }
    &.selected {
      display: none;
    }
    color: #6b6b6b;
    text-align: center;
    text-transform: capitalize;
    text-overflow: ellipsis;
    overflow: hidden;
    user-select: none;
    padding: 10px 5px;
    box-sizing: content-box;
    background-color: #fff;
  }
`;

/* ${props => {
if (props.disabled) {
  return `
    pointer-events: none;
    .dd-header{
      background-color: #eee !important;
    }
  `;
}
}} */
