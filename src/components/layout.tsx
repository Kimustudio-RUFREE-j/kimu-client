import HeaderPc from '@/components/header_pc';
import Footer from '@/components/footer';
import { containerCss } from '@/styles/common';

export default function Layout({ children }) {
  return (
    <div>
      <HeaderPc />
      <div css={containerCss}>{children}</div>
      <Footer />
    </div>
  );
}
