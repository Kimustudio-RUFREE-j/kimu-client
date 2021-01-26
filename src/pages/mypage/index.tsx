import React from 'react';
import Link from 'next/link';

import HeaderMb from '@/components/header_mb';
import Footer from '@/components/footer';

import { containerCss } from '@/styles/common';
import { myPageCss } from '@/styles/mypage';

import { mypageMenus } from '@/constants';

export default function Mypage() {
  return (
    <>
      <HeaderMb />
      <div css={[containerCss, myPageCss]}>
        <h2>키뮤님</h2>
        <ul className="mypage-main-assets">
          <li>
            <Link href="/mypage/coupon">
              <a>
                <h6>쿠폰</h6>
                <span>0 장</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/mypage/mileage">
              <a>
                <h6>마일리지</h6>
                <span>2,500원</span>
              </a>
            </Link>
          </li>
        </ul>
        <ul className="mypage-main-manage">
          {mypageMenus.map((menu, idx) => {
            if (idx >= 2) {
              return (
                <li>
                  <Link href={menu.path}>
                    <a>
                      {menu.name}
                      <i />
                    </a>
                  </Link>
                </li>
              );
            }
            return false;
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
