import { socials } from '@/constants';
import { center } from '@/styles/common';
import { footerCss } from '@/styles/footer';

export default function Footer() {
  return (
    <footer css={footerCss}>
      <div css={center}>
        <div>
          <div className="info-wrap">
            <div className="co-info">
              <h6>주식회사 키뮤</h6>
              <p>남장원</p>
              <address>
                <em>
                  서울 성동구 뚝섬로 1나길 5, 헤이그라운드 성수시작점 G-206
                </em>
                <em>2019-서울성동-01905호</em>
                <em>486-81-01099</em>
              </address>
            </div>
            <div className="help-info">
              <h6>고객센터</h6>
              <p>
                <em>10:00 - 18:00 (점심시간 12:00 - 13:00)</em>
                <em>070-4159-6789</em>
                <em>md@kimustudio.com</em>
              </p>
            </div>
            <div className="account-info">
              <h6>입금계좌</h6>
              <p>
                <em>신한은행 100-0330375311</em>
                <em>주식회사 키뮤</em>
              </p>
            </div>
          </div>
          <div className="policy-info">
            <a href="/">개인정보처리방침</a>
            <a href="/">이용약관</a>
          </div>
        </div>
        <ul className="social-info">
          {socials.map((social) => (
            <li key={social.name}>
              <a href={social.url}>
                <img src={social.src} alt={social.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
