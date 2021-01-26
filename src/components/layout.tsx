import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import HeaderPc from '@/components/header_pc';
import Modal from '@/components/modal/index';

import { modalAtom } from '@/atom/modal';

export default function Layout({ children }) {
  const [modalState, setModalState] = useRecoilState(modalAtom);

  useEffect(() => {
    if (modalState.visible) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `unset`;
    }
  }, [modalState]);

  return (
    <div>
      <HeaderPc />
      {children}
      {modalState.visible && <Modal />}
    </div>
  );
}
