import React from 'react';
import Slider from 'react-slick';

import HeaderMb from '@/components/header_mb';
import Footer from '@/components/footer';

import { center, containerCss } from '@/styles/common';
import { homeCss } from '@/styles/home';

export default function Home() {
  const visualSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  return (
    <>
      <HeaderMb />
      <div css={[containerCss, homeCss]}>
        <div className="visual">
          <Slider {...visualSlider}>
            <div className="visual-slider">
              <p>안녕하세요.</p>
            </div>
            <div className="visual-slider">
              <p>어서오소.</p>
            </div>
          </Slider>
        </div>
        <div css={center}>
          <div className="main new-arrival">
            <div className="main-title">
              <h2>
                <i>#</i> NEW ARRIVAL
              </h2>
              <button type="button">전체상품 보기</button>
            </div>
          </div>
          <div className="main pre-order">
            <div className="main-title">
              <h2>
                <i>#</i> PRE-ORDER
              </h2>
              <button type="button">프리오더 전체보기</button>
            </div>
          </div>
          <div className="main best-items">
            <div className="main-title">
              <h2>
                <i>#</i> BEST ITEMS
              </h2>
              <button type="button">전체상품 보기</button>
            </div>
          </div>
          <div className="main magazine">
            <div className="main-title">
              <h2>
                <i>#</i> MAGAZINE
              </h2>
              <button type="button">매거진 바로가기</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
