import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { signupAtom } from '@/atom/auth';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';

import { containerCss } from '@/styles/common';
import { signupCss } from '@/styles/auth';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

dayjs.extend(duration);

export default function BasicInfo() {
  const [signup, setSignup] = useRecoilState(signupAtom);
  const [basicInfo, setBasicInfo] = useState({
    userName: ``,
    birth: {
      year: dayjs().get(`year`),
      month: dayjs().get(`month`) + 1,
      day: dayjs().get(`date`),
    },
    gender: `female`,
    phone: ``,
    validatePhone: ``,
    sendPhoneNum: false,
    confirmPhone: false,
  });
  const defaultVerificationCounter = 210;
  const [counter, setCounter] = useState(defaultVerificationCounter);
  const {
    userName,
    birth,
    gender,
    phone,
    validatePhone,
    sendPhoneNum,
    confirmPhone,
  } = basicInfo;

  const onChangeBasicInfo = (e: any) => {
    const { name, value } = e.target;
    setBasicInfo({ ...basicInfo, [name]: value });
  };

  const onChangeBirth = (date: any) => {
    setBasicInfo({ ...basicInfo, birth: date });
  };

  const onConfirmBasicInfo = (e: any) => {
    e.preventDefault();
    const birthDate = dayjs(
      new Date(birth.year, birth.month - 1, birth.day),
    ).format(`YYYYMMDD`);
    setSignup({
      ...signup,
      userName,
      birth: birthDate,
      gender,
      phone,
      step: 3,
    });
  };

  const onSendVerificationCode = () => {
    setCounter(defaultVerificationCounter);
    setBasicInfo({
      ...basicInfo,
      sendPhoneNum: true,
    });
  };

  useEffect(() => {
    const verificationCodeTimer =
      sendPhoneNum &&
      setInterval(() => {
        if (counter <= 0 || !!confirmPhone) {
          clearInterval(verificationCodeTimer);
        } else {
          setCounter(counter - 1);
        }
      }, 1000);
    return () => {
      clearInterval(verificationCodeTimer);
    };
  }, [sendPhoneNum, counter]);

  return (
    <div css={[containerCss, signupCss]}>
      <div className="signup-wrap">
        <h2 className="signup-header">기본 정보</h2>
        <form className="signup-form" onSubmit={onConfirmBasicInfo}>
          <input
            name="userName"
            type="text"
            value={userName}
            placeholder="이름 (필수)"
            onChange={onChangeBasicInfo}
          />
          <div className="signup-birth">
            <span>생년월일</span>
            <div className="custom-datepicker">
              <DatePicker
                value={{
                  ...birth,
                  month: birth.month,
                }}
                calendarClassName="responsive-calendar"
                calendarPopperPosition="bottom"
                onChange={(date: any) => onChangeBirth(date)}
              />
            </div>
          </div>
          <div className="signup-gender">
            <span>성별</span>
            <div>
              <input
                id="female"
                name="gender"
                type="radio"
                value="female"
                checked={gender === `female`}
                onChange={onChangeBasicInfo}
              />
              <label htmlFor="female">
                <span />
                여자
              </label>
              <input
                id="male"
                name="gender"
                type="radio"
                value="male"
                checked={gender === `male`}
                onChange={onChangeBasicInfo}
              />
              <label htmlFor="male">
                <span />
                남자
              </label>
            </div>
          </div>

          {/* 전화번호 인증 */}
          <div className="tel">
            <div>
              <input
                name="phone"
                type="tel"
                value={phone}
                placeholder="휴대전화번호 입력"
                disabled={!!confirmPhone}
                onChange={onChangeBasicInfo}
              />
              <button
                className={phone !== `` ? `fill` : ``}
                type="button"
                disabled={phone === `` || !!confirmPhone}
                onClick={onSendVerificationCode}
              >
                인증번호 전송
              </button>
            </div>
            <p className="validation" />
            <div>
              <input
                name="validatePhone"
                type="number"
                value={validatePhone}
                placeholder="인증번호 입력"
                onChange={onChangeBasicInfo}
              />
              <button
                className={validatePhone !== `` ? `fill` : ``}
                type="button"
                disabled={validatePhone === ``}
                onClick={() => {
                  setBasicInfo({ ...basicInfo, confirmPhone: true });
                }}
              >
                인증번호 확인
              </button>
            </div>
            <p className="validation black">
              {!!sendPhoneNum &&
                dayjs
                  .duration({
                    seconds: counter % 60,
                    minutes: Math.floor(counter / 60),
                  })
                  .format(`mm:ss`)}
            </p>
            <button
              className={`signup-btn signup ${
                !!confirmPhone && userName !== `` && ` fill`
              }`}
              type="submit"
              disabled={!confirmPhone || userName === ``}
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
