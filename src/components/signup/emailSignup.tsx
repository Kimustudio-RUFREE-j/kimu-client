import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { signupAtom } from '@/atom/auth';

import { validateEmail, validatePwd } from '@/utils/validation';

import { containerCss } from '@/styles/common';
import { signupCss } from '@/styles/auth';

export default function EmailSignup() {
  const [signup, setSignup] = useRecoilState(signupAtom);
  const [signupInfo, setSignupInfo] = useState({
    email: ``,
    pwd: ``,
    confirmPwd: ``,
    emailValidation: ``,
    pwdValidation: ``,
    confirmPwdValidation: ``,
  });
  const { email, pwd, confirmPwd } = signupInfo;
  let { emailValidation, pwdValidation, confirmPwdValidation } = signupInfo;

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
    if (!validateEmail(email))
      emailValidation = `*이메일 형식대로 다시 입력해주세요.`;
    if (!validatePwd(pwd))
      pwdValidation = `*비밀번호는 숫자, 영문을 포함한 8자기 이상이여야 합니다.`;
    if (pwd !== confirmPwd)
      confirmPwdValidation = `*비밀번호가 일치하지 않습니다.`;
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
    setSignup({ ...signup, email, password: pwd, step: 2 });
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
            value={email}
            onChange={onChangeSignupInfo}
          />
          <p className="validation val-email">{emailValidation}</p>
          <input
            type="password"
            name="pwd"
            placeholder="비밀번호 (숫자, 영문 포함 8자리)"
            value={pwd}
            onChange={onChangeSignupInfo}
          />
          <p className="validation">{pwdValidation}</p>
          <input
            type="password"
            name="confirmPwd"
            placeholder="비밀번호 재입력"
            value={confirmPwd}
            onChange={onChangeSignupInfo}
          />
          <p className="validation">{confirmPwdValidation}</p>
          <button
            className={`signup-btn signup ${
              email !== `` && pwd !== `` && confirmPwd !== `` && ` fill`
            }`}
            type="submit"
            disabled={email === `` || pwd === `` || confirmPwd === ``}
          >
            다음 단계로
          </button>
        </form>
      </div>
    </div>
  );
}
