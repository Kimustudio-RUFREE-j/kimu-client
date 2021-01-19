import React from 'react';
import Link from 'next/link';
import HeaderMb from '@/components/header_mb';
import { signupCss } from '@/styles/auth';
import { privacyPolicy, termsAndConditions } from '@/constants';

export default function Signup1() {
  return (
    <>
      <HeaderMb />
      <div css={signupCss}>
        <div className="agree-header">
          <h2>약관동의</h2>
          <div className="check-box">
            <input id="agree-all" name="agree-all" type="checkbox" />
            <label htmlFor="agree-all">전체 동의</label>
          </div>
        </div>
        <div className="agree-container">
          <div className="check-box">
            <input id="agree-pp" name="agree-pp" type="checkbox" />
            <label htmlFor="agree-pp">개인정보처리방침 [필수]</label>
            <div className="text-area">
              <p>{privacyPolicy}</p>
            </div>
          </div>
          <div className="check-box">
            <input id="agree-tnc" name="agree-tnc" type="checkbox" />
            <label htmlFor="agree-tnc">이용약관 [필수]</label>
            <div className="text-area">
              <p>{termsAndConditions}</p>
            </div>
          </div>
          <p className="info">
            키뮤스튜디오는 만 14세 이상부터 이용가능하며, 타인의 계정으로 본
            서비스를 사용하는 경우 정보통신망 이용 촉진 및 정보보호 등에 관한
            법률에 의겨하여 처벌 반들 수 있습니다.
          </p>
        </div>
        <button className="agree-btn" type="button">
          동의하고 다음 단계로
        </button>
      </div>
    </>
  );
}
