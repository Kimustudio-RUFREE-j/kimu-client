import MypageLayout from '@/components/mypage/mypageLayout';
import { couponCss } from '@/styles/mypage';

export default function Coupon() {
  return (
    <MypageLayout>
      <div css={couponCss}>
        <h2>쿠폰</h2>
        <div className="coupon-input">
          <span>쿠폰번호를 입력해주세요.</span>
          <div>
            <input type="text" />
            <button type="button">쿠폰 받기</button>
            <p>입력하신 번호가 유효하지 않습니다.</p>
          </div>
        </div>
        <div className="coupon-container">
          <span>현재 사용 가능한 쿠폰</span>
          <ul className="coupon-list">
            <li>
              <div>
                <span>할인</span>
                <span>3,000원</span>
              </div>
              <div>
                <span>가입축하 쿠폰</span>
                <span>2020년 9월 10일</span>
                <span>30,000원 이상 주문시 | 2020년 9월 30일 까지</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </MypageLayout>
  );
}
