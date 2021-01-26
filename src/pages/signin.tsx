import React from 'react';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { signupState, defaultSignupState } from '@/context/signup';

import HeaderMb from '@/components/header_mb';
import Footer from '@/components/footer';

import { onlyPc, containerCss } from '@/styles/common';
import { signinCss } from '@/styles/auth';

export default function Signin() {
  const [signup, setSignup] = useRecoilState(signupState);
  const onClickSignup = () => {
    setSignup({ ...defaultSignupState });
  };

  return (
    <>
      <HeaderMb />
      <div css={[containerCss, signinCss]}>
        <div className="signin">
          <h2>로그인</h2>
          <form>
            <input placeholder="이메일" />
            <p className="signin-noti">
              *등록되지 않은 이메일이거나, 잘못된 비밀번호 입니다.
            </p>
            <input placeholder="비밀번호" />
            <button type="submit">로그인</button>
          </form>
          <ul>
            <li>
              <Link href="/signup">
                <button type="button" onClick={onClickSignup}>
                  회원가입
                </button>
              </Link>
            </li>
            <li>
              <Link href="/findId">계정 찾기</Link>
            </li>
            <li>
              <Link href="/findPw">비밀번호 찾기</Link>
            </li>
          </ul>
        </div>
      </div>
      <div css={onlyPc}>
        <Footer />
      </div>
    </>
  );
}
