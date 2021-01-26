import React from 'react';

import HeaderMb from '@/components/header_mb';
import Footer from '@/components/footer';

import { onlyPc, containerCss } from '@/styles/common';
import { signinCss } from '@/styles/auth';

export default function Signin() {
  return (
    <>
      <HeaderMb />
      <div css={[containerCss, signinCss]}>
        <div className="non-member">
          <h2>비회원 주문조회 하기</h2>
          <form>
            <input placeholder="주문자명" />
            <input placeholder="주문번호" />
            <p className="non-member-noti">
              * 주문번호는 주문시 SNS로 발송됩니다.
              <br />
              주문번호를 잊으신 경우 고객센터로 문의해주세요.
            </p>
            <button type="submit">비회원으로 주문조회 가기</button>
          </form>
        </div>
      </div>
      <div css={onlyPc}>
        <Footer />
      </div>
    </>
  );
}