import React, { useState } from 'react';
// import Link from 'next/link';

import HeaderMb from '@/components/header_mb';
import Footer from '@/components/footer';
import Dropdown from '@/components/dropdown';

import { onlyPc, containerCss } from '@/styles/common';
import { dropdownCss } from '@/styles/dropdown';
import { signupCss } from '@/styles/auth';

export default function Signup2() {
  const regionList = [
    { id: 0, title: `1930`, selected: false },
    { id: 1, title: `1931`, selected: false },
    { id: 2, title: `1932`, selected: false },
  ];

  const [tags, setTags] = useState([`서울`, `장난감`]);

  const onRegionChange = (title: string, id: number) => {
    setTags([...tags, title]);
  };

  return (
    <>
      <HeaderMb />
      <div css={[containerCss, signupCss]}>
        <div className="auth-container">
          <h2 className="auth-header">기본 정보</h2>
          <form className="auth-form">
            <input type="text" placeholder="이름 (필수)" />
            <input type="email" placeholder="이메일 (필수)" />
            <div className="auth-birth">
              <span>생년월일</span>
              <div className="birth-input">
                <div css={dropdownCss}>
                  <Dropdown
                    category="연도"
                    items={regionList}
                    onChange={onRegionChange}
                  />
                  <span>년</span>
                </div>
                <div css={dropdownCss}>
                  <Dropdown
                    category="연도"
                    items={regionList}
                    onChange={onRegionChange}
                  />
                  <span>월</span>
                </div>
                <div css={dropdownCss} className="last">
                  <Dropdown
                    category="연도"
                    items={regionList}
                    onChange={onRegionChange}
                  />
                  <span>일</span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <button className="signup-btn" type="button">
          확인
        </button>
      </div>
      <div css={onlyPc}>
        <Footer />
      </div>
    </>
  );
}
