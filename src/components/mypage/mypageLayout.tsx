import React from 'react';
import Link from 'next/link';
import HeaderMb from '@/components/header_mb';
import Footer from '@/components/footer';
import { containerCss, center } from '@/styles/common';
import { mypageLayoutCss } from '@/styles/mypage';
import { mypageMenus } from '@/constants';

export default function MypageLayout({ children }) {
  return (
    <>
      <HeaderMb />
      <div css={[containerCss, center, mypageLayoutCss]}>
        <ul className="mypage-menu">
          <button className="mypage-back" type="button">
            뒤로
          </button>
          {mypageMenus.map((menu) => (
            <li>
              <Link href={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </ul>
        <div className="mypage-container">{children}</div>
      </div>
      <Footer />
    </>
  );
}
