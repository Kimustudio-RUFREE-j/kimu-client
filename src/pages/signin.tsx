import React, { useState } from 'react';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { signupAtom, defaultSignupAtom } from '@/atom/auth';

import HeaderMb from '@/components/header_mb';
import Footer from '@/components/footer';

import { onlyPc, containerCss } from '@/styles/common';
import { signinCss } from '@/styles/auth';

export default function Signin() {
  const [signup, setSignup] = useRecoilState(signupAtom);
  const [signin, setSignin] = useState({
    email: ``,
    pwd: ``,
    validateSignin: ``,
  });
  const { email, pwd, validateSignin } = signin;

  const onClickSignup = () => {
    setSignup({ ...defaultSignupAtom });
  };

  const onChangeSignin = (e: any) => {
    const { name, value } = e.target;
    setSignin({ ...signin, [name]: value });
  };

  const onSubmitSignin = (e: any) => {
    e.preventDefault();
    setSignin({
      ...signin,
      validateSignin: `*등록되지 않은 이메일이거나, 잘못된 비밀번호 입니다.`,
    });
  };

  return (
    <>
      <HeaderMb />
      <div css={[containerCss, signinCss]}>
        <div className="signin">
          <h2>로그인</h2>
          <form onSubmit={onSubmitSignin} noValidate>
            <input
              name="email"
              type="email"
              placeholder="이메일"
              value={email}
              onChange={onChangeSignin}
            />
            <p className="signin-noti">{validateSignin}</p>
            <input
              name="pwd"
              type="password"
              placeholder="비밀번호"
              value={pwd}
              onChange={onChangeSignin}
            />
            <button
              className={email !== `` && pwd !== `` ? `fill` : ``}
              type="submit"
              disabled={email === `` || pwd === ``}
            >
              로그인
            </button>
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
