import { css } from '@emotion/react';

export const globalStyle = css`
  @font-face {
    font-family: 'OpenSansCondensed';
    font-weight: normal;
    src: url('/assets/fonts/OpenSansCondensed/OpenSansCondensed-Light.ttf')
      format('truetype');
  }
  @font-face {
    font-family: 'OpenSansCondensed';
    font-weight: bold;
    src: url('/assets/fonts/OpenSansCondensed/OpenSansCondensed-Bold.ttf')
      format('truetype');
  }
  @font-face {
    font-family: 'OpenSansCondensed';
    font-style: italic;
    src: url('/assets/fonts/OpenSansCondensed/OpenSansCondensed-LightItalic.ttf')
      format('truetype');
  }
  @font-face {
    font-family: 'NanumSquareRound';
    font-weight: 100;
    src: url('/assets/fonts/NanumSquareRound/NanumSquareRoundL.ttf')
      format('truetype');
  }
  @font-face {
    font-family: 'NanumSquareRound';
    font-weight: 400;
    src: url('/assets/fonts/NanumSquareRound/NanumSquareRoundR.ttf')
      format('truetype');
  }
  @font-face {
    font-family: 'NanumSquareRound';
    font-weight: 800;
    src: url('/assets/fonts/NanumSquareRound/NanumSquareRoundB.ttf')
      format('truetype');
  }
  @font-face {
    font-family: 'NanumSquareRound';
    font-weight: 900;
    src: url('/assets/fonts/NanumSquareRound/NanumSquareRoundEB.ttf')
      format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    white-space: normal;
    word-break: break-word;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    font-family: OpenSansCondensed, NanumSquareRound, HGGGothicssi, Roboto,
      'Malgun Gothic', Helvetica, Apple-Gothic, 애플고딕, sans-serif;
    font-weight: normal;
    word-spacing: normal;
    height: 100%;
    overflow: hidden;
  }
  body {
    *word-break: break-all;
    -ms-word-break: break-all;
    white-space: nowrap;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    font-size: 14px;
  }
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  form,
  fieldset,
  p,
  button,
  input {
    line-height: 1;
    margin: 0;
    padding: 0;
    word-spacing: normal;
  }
  body,
  input,
  button {
    color: #1d1d1d;
    word-spacing: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 14px;
  }
  img,
  fieldset,
  iframe {
    border: 0 none;
    padding: 0;
  }
  img {
    vertical-align: top;
    width: 100%;
    height: auto;
  }
  li {
    list-style: none;
  }
  input,
  select,
  button {
    vertical-align: middle;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  select::-ms-expand {
    display: none;
  }
  i,
  em,
  address {
    font-style: normal;
  }
  label,
  button {
    cursor: pointer;
  }
  button {
    margin: 0;
    padding: 0;
  }
  button * {
    position: relative;
  }
  button img {
    *left: auto;
  }
  a {
    font-family: OpenSansCondensed, NanumSquareRound, HGGGothicssi, Roboto,
      'Malgun Gothic', Helvetica, Apple-Gothic, 애플고딕, sans-serif;
    color: #1d1d1d;
    text-decoration: none;
    word-spacing: normal;
  }
  a:hover {
    text-decoration: none;
  }
  option {
    padding-right: 6px;
  }
  hr {
    display: none;
  }
  legend {
    *width: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  menu,
  section,
  summary {
    display: block;
  }
  *,
  header,
  footer,
  section,
  article,
  aside,
  nav,
  hgroup,
  details,
  menu,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }
  input,
  button {
    border: 0 none;
    -moz-border: 0 none;
    -webkit-border: 0 none;
    -o-border: 0 none;
    background-color: transparent;
    -moz-background-color: transparent;
    -webkit-background-color: transparent;
    -o-background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input::-ms-clear {
    display: none;
  }
  input,
  textarea,
  select,
  button {
    font-family: OpenSansCondensed, NanumSquareRound, HGGGothicssi, Roboto,
      'Malgun Gothic', Helvetica, Apple-Gothic, 애플고딕, sans-serif;
  }
`;
