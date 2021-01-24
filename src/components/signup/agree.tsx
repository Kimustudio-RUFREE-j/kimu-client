import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import signupState from '@/context/signup';

import { containerCss } from '@/styles/common';
import { signupCss } from '@/styles/auth';

import { privacyPolicy, termsAndConditions } from '@/constants';

export default function Agree() {
  const [signup, setSignup] = useRecoilState(signupState);
  const [agreePp, setAgreePp] = useState(false);
  const [agreeTnc, setAgreeTnc] = useState(false);
  const agreeAll = agreePp && agreeTnc;

  const onClickAgreeAll = () => {
    if (agreeAll) {
      setAgreePp(false);
      setAgreeTnc(false);
    } else {
      setAgreePp(true);
      setAgreeTnc(true);
    }
  };

  const onClickAgree = (e: any) => {
    const { name } = e.target;
    if (name === `agree-pp`) setAgreePp(!agreePp);
    if (name === `agree-tnc`) setAgreeTnc(!agreeTnc);
  };

  const onClickNext = () => {
    if (agreeAll) setSignup({ ...signup, step: 1 });
  };

  return (
    <div css={[containerCss, signupCss]}>
      <div className="signup-agree-wrap">
        <div className="header">
          <h2>약관동의</h2>
          <div className="check-box">
            <input
              id="agree-all"
              name="agree-all"
              type="checkbox"
              checked={agreeAll}
              onChange={onClickAgreeAll}
            />
            <label htmlFor="agree-all">전체 동의</label>
          </div>
        </div>
        <div className="container">
          <div className="check-box">
            <input
              id="agree-pp"
              name="agree-pp"
              type="checkbox"
              checked={agreePp}
              onChange={onClickAgree}
            />
            <label htmlFor="agree-pp">개인정보처리방침 [필수]</label>
            <div className="textarea">
              <p>{privacyPolicy}</p>
            </div>
          </div>
          <div className="check-box">
            <input
              id="agree-tnc"
              name="agree-tnc"
              type="checkbox"
              checked={agreeTnc}
              onChange={onClickAgree}
            />
            <label htmlFor="agree-tnc">이용약관 [필수]</label>
            <div className="textarea">
              <p>{termsAndConditions}</p>
            </div>
          </div>
          <p className="noti">
            키뮤스튜디오는 만 14세 이상부터 이용가능하며, 타인의 계정으로 본
            서비스를 사용하는 경우 정보통신망 이용 촉진 및 정보보호 등에 관한
            법률에 의겨하여 처벌 반들 수 있습니다.
          </p>
        </div>
      </div>
      <button
        type="button"
        className={`signup-btn ${agreeAll && ` fill`}`}
        disabled={!agreeAll}
        onClick={onClickNext}
      >
        동의하고 다음 단계로
      </button>
    </div>
  );
}
