import { css, keyframes } from '@emotion/react';

const breakpoints: number[] = [980, 1024, 1280];
export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const center = css`
  width: 1280px;
  margin: 0 auto;
  ${mq[2]} {
    width: 100%;
  }
`;

export const onlyPc = css`
  display: block;
  ${mq[0]} {
    display: none;
  }
`;

export const onlyMb = css`
  display: none;
  ${mq[0]} {
    display: block;
  }
`;

export const containerCss = css`
  padding-top: 115px;
  ${mq[0]} {
    padding-top: 55px;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;

  }
  to {
    opacity: 0;
  }
`;
