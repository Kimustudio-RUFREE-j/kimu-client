import HeaderPc from '@/components/header_pc';
import HeaderMb from '@/components/header_mb';
import Footer from '@/components/footer';

export default function Layout({ children }) {
  return (
    <div>
      <HeaderPc />
      <HeaderMb />
      {children}
      <Footer />
    </div>
  );
}
