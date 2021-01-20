import HeaderPc from '@/components/header_pc';
import Footer from '@/components/footer';

export default function Layout({ children }) {
  return (
    <div>
      <HeaderPc />
      {children}
    </div>
  );
}
