import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import signupState from '@/context/signup';

import { validateEmail, validatePwd } from '@/utils/validation';

import { containerCss } from '@/styles/common';
import { signupCss } from '@/styles/auth';

export default function EmailSignup() {
  const [signup, setSignup] = useRecoilState(signupState);
  const [signupInfo, setSignupInfo] = useState({
    email: ``,
    pwd: ``,
    confirmPwd: ``,
    emailValidation: ``,
    pwdValidation: ``,
    confirmPwdValidation: ``,
  });

  const onChangeSignupInfo = (e) => {
    const { name, value } = e.target;
    if (name === `email`) {
      setSignupInfo({
        ...signupInfo,
        [name]: value,
        emailValidation: ``,
      });
    } else if (name === `pwd`) {
      setSignupInfo({
        ...signupInfo,
        [name]: value,
        pwdValidation: ``,
      });
    } else {
      setSignupInfo({
        ...signupInfo,
        [name]: value,
        confirmPwdValidation: ``,
      });
    }
  };

  const onSubmitSignupInfo = (e) => {
    e.preventDefault();
    const { email, pwd, confirmPwd } = signupInfo;
    let emailValidation = ``;
    let pwdValidation = ``;
    let confirmPwdValidation = ``;
    if (!validateEmail(email))
      emailValidation = `이메일 주소를 바르게 입력해주세요.`;
    if (!validatePwd(pwd))
      pwdValidation = `영문, 숫자 포함 최소 8자리를 입력해주세요.`;
    if (pwd !== confirmPwd) confirmPwdValidation = `비밀번호가 같지 않습니다.`;
    if (
      emailValidation !== `` ||
      pwdValidation !== `` ||
      confirmPwdValidation !== ``
    ) {
      setSignupInfo({
        ...signupInfo,
        emailValidation,
        pwdValidation,
        confirmPwdValidation,
      });
      return false;
    }
    setSignup({ ...signup, email, password: pwd, step: 1 });
    return true;
  };

  return (
    <div css={[containerCss, signupCss]}>
      <div className="signup-wrap">
        <h2 className="signup-header">회원가입</h2>
        <form className="signup-form" onSubmit={onSubmitSignupInfo} noValidate>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={signupInfo.email}
            onChange={onChangeSignupInfo}
          />
          <p className="validation">{signupInfo.emailValidation}</p>
          <input
            type="password"
            name="pwd"
            placeholder="비밀번호 (숫자, 영문 포함 8자리)"
            value={signupInfo.pwd}
            onChange={onChangeSignupInfo}
          />
          <p className="validation">{signupInfo.pwdValidation}</p>
          <input
            type="password"
            name="confirmPwd"
            placeholder="비밀번호 재입력"
            value={signupInfo.confirmPwd}
            onChange={onChangeSignupInfo}
          />
          <p className="validation">{signupInfo.confirmPwdValidation}</p>
          <button
            className={`signup-btn signup ${
              signupInfo.email !== `` &&
              signupInfo.pwd !== `` &&
              signupInfo.confirmPwd !== `` &&
              ` fill`
            }`}
            type="submit"
            disabled={
              signupInfo.email === `` ||
              signupInfo.pwd === `` ||
              signupInfo.confirmPwd === ``
            }
          >
            이메일로 가입하기
          </button>
        </form>
      </div>
    </div>
  );
}
