import React from 'react';
import { useRecoilState } from 'recoil';
import signupState from '@/context/signup';

import HeaderMb from '@/components/header_mb';
import Footer from '@/components/footer';
import EmailSignup from '@/components/signup/emailSignup';
import Agree from '@/components/signup/agree';
import BasicInfo from '@/components/signup/basicInfo';
import PickIssues from '@/components/signup/pickIssues';

import { onlyPc } from '@/styles/common';

export default function Signup() {
  const [signup, setSignup] = useRecoilState(signupState);

  let currentPage = null;
  if (signup.step === 0) {
    currentPage = <Agree />;
  } else if (signup.step === 1) {
    currentPage = <EmailSignup />;
  } else if (signup.step === 2) {
    currentPage = <BasicInfo />;
  } else if (signup.step === 3) {
    currentPage = <PickIssues />;
  }

  return (
    <>
      <HeaderMb />
      {currentPage}
      <div css={onlyPc}>
        <Footer />
      </div>
    </>
  );
}
