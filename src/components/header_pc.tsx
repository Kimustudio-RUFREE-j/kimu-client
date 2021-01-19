import Link from 'next/link';
import { center, onlyPc } from '@/styles/common';
import { headerCss } from '@/styles/header';
import { subMenus, mainMenus } from '@/constants';

export default function HeaderPc() {
  return (
    <header css={[headerCss, onlyPc]}>
      <div css={center}>
        <ul className="sub-menu">
          {subMenus.map((subMenu) => (
            <li key={subMenu.path}>
              <Link href={subMenu.path}>{subMenu.name.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
        <div className="main-header">
          <div className="main-menu">
            <h1 className="logo">
              <Link href="/">
                <img src="/assets/icons/logo.png" alt="키뮤스튜디오 홈으로" />
              </Link>
            </h1>
            <ul>
              {mainMenus.map((mainMenu) => (
                <li key={mainMenu.path}>
                  <Link href={mainMenu.path}>
                    {mainMenu.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="util-menu">
            <ul>
              <li>
                <Link href="/signup/1">회원가입</Link>
              </li>
              <li>
                <Link href="/signin">로그인</Link>
              </li>
            </ul>
            <button type="button">
              <img src="/assets/icons/ic-search.svg" alt="검색 버튼" />
            </button>
            <button type="button">
              <img src="/assets/icons/ic-cart.svg" alt="장바구니로 이동" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
