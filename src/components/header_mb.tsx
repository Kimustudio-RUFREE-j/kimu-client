import { useState } from 'react';
import Link from 'next/link';
import { onlyMb, headerCss, burgerIcon, mbMenuCss } from '@/styles/common';
import { subMenus, mainMenus } from '../constants';

export default function HeaderMb() {
  const [burger, setBurger] = useState(false);
  const onClickBurger = () => {
    setBurger(!burger);
  };

  return (
    <header css={[headerCss, onlyMb]}>
      <div>
        <button type="button" className="search-btn">
          <img src="/assets/icons/ic-search.svg" alt="검색 버튼" />
        </button>
        <h1 className="logo">
          <Link href="/">
            <img src="/assets/icons/logo.png" alt="키뮤스튜디오 홈으로" />
          </Link>
        </h1>
        <button
          css={burgerIcon}
          className={`burger${burger && ` active`}`}
          type="button"
          onClick={onClickBurger}
        >
          <span className="line" /> <span className="line" />
          <span className="line" /> <span className="line" />
        </button>
      </div>
      <nav css={mbMenuCss} className={`mb-menu${burger && ` active`}`}>
        <div>
          <div className="mb-menu-header">
            <button type="button" className="cart-btn">
              <img src="/assets/icons/ic-cart.svg" alt="장바구니로 이동" />
            </button>
            <h2>MENU</h2>
            <button
              css={burgerIcon}
              className={`burger${burger && ` active`}`}
              type="button"
              onClick={onClickBurger}
            >
              <span className="line" /> <span className="line" />
              <span className="line" /> <span className="line" />
            </button>
          </div>
          <ul className="mb-main-menu">
            {mainMenus.map((mainMenu) => (
              <li key={mainMenu.path}>
                <Link href={mainMenu.path}>{mainMenu.name.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
          <ul className="mb-sub-menu">
            {subMenus.map((subMenu) => (
              <li key={subMenu.path}>
                <Link href={subMenu.path}>
                  <a>
                    <span>{subMenu.name.toUpperCase()}</span>
                    <i />
                  </a>
                </Link>
                <i />
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-btn">
          <Link href="/signin">회원가입</Link>
          <Link href="/login">로그인</Link>
        </div>
      </nav>
    </header>
  );
}
