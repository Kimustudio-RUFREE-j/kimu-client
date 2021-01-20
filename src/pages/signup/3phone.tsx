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
          <h2 className="auth-header">전화번호 인증</h2>
          <form className="auth-form">
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
        <Link href="/signup/4basicinfo">
          <a className="signup-btn">인증 완료</a>
        </Link>
      </div>
      <div css={onlyPc}>
        <Footer />
      </div>
    </>
  );
}
