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
        <div className="auth-container">
          <h2 className="auth-header">회원가입</h2>
          <form className="auth-form">
            <input type="email" placeholder="이메일" />
            <input
              type="password"
              placeholder="비밀번호 (숫자, 영문 포함 8자리)"
            />
            <input type="password" placeholder="비밀번호 재입력" />
          </form>
        </div>
        <Link href="/signup/3phone">
          <a className="signup-btn">이메일로 가입하기</a>
        </Link>
      </div>
      <div css={onlyPc}>
        <Footer />
      </div>
    </>
  );
}
