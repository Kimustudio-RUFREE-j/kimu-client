import React from 'react';
import Link from 'next/link';

import HeaderMb from '@/components/header_mb';
import Footer from '@/components/footer';

import { onlyPc, containerCss } from '@/styles/common';
import { signupCss } from '@/styles/auth';

export default function Signup2() {
  return (
    <>
      <HeaderMb />
      <div css={[containerCss, signupCss]}>
        <div className="signup-wrap">
          <h2 className="signup-header">회원가입</h2>
          <form className="signup-form">
            <input type="email" placeholder="이메일" />
            <input
              type="password"
              placeholder="비밀번호 (숫자, 영문 포함 8자리)"
            />
            <input type="password" placeholder="비밀번호 재입력" />
          </form>
        </div>
        <div className="signup-btn-wrap">
          <Link href="/signup/agree">
            <button className="signup-btn signup" type="button">
              이메일로 가입하기
            </button>
          </Link>
        </div>
      </div>
      <div css={onlyPc}>
        <Footer />
      </div>
    </>
  );
}
