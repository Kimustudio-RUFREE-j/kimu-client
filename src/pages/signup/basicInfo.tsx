import React, { useState } from 'react';
import Link from 'next/link';

import HeaderMb from '@/components/header_mb';
import Footer from '@/components/footer';
import Dropdown from '@/components/dropdown';

import { onlyPc, containerCss } from '@/styles/common';
import { signupCss } from '@/styles/auth';
import { dropdownCss } from '@/styles/dropdown';

export default function Signup3() {
  const [tags, setTags] = useState([`서울`, `장난감`]);

  const onRegionChange = (title: string, id: number) => {
    setTags([...tags, title]);
  };

  const regionList = [
    { id: 0, title: `1930`, selected: false },
    { id: 1, title: `1931`, selected: false },
    { id: 2, title: `1932`, selected: false },
  ];
  return (
    <>
      <HeaderMb />
      <div css={[containerCss, signupCss]}>
        <div className="signup-wrap">
          <h2 className="signup-header">기본 정보</h2>
          <form className="signup-form">
            <input type="text" placeholder="이름 (필수)" />
            <div className="signup-birth">
              <span>생년월일</span>
              <div>
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
            <div className="signup-birth">
              <span>성별</span>
              <div css={dropdownCss}>
                <Dropdown
                  category="성별"
                  items={regionList}
                  onChange={onRegionChange}
                />
              </div>
            </div>
          </form>
        </div>

        {/* 전화번호 인증 */}
        <div className="signup-wrap">
          <h2 className="signup-header">전화번호 인증</h2>
          <form className="signup-form">
            <div>
              <input type="phone" placeholder="휴대전화번호 입력" />
              <button type="button">인증번호 전송</button>
            </div>
            <div>
              <input type="number" placeholder="인증번호 입력" />
              <button type="button">인증번호 확인</button>
            </div>
          </form>
        </div>
        <div className="signup-btn-wrap">
          <Link href="/">
            <a className="signup-btn">확인</a>
          </Link>
        </div>
      </div>
      <div css={onlyPc}>
        <Footer />
      </div>
    </>
  );
}
