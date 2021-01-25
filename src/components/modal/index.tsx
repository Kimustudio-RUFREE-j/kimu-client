import React from 'react';
import { useRecoilState } from 'recoil';
import Portal from '@/components/modal/portal';
import { modalAtom } from '@/context/modal';

export default function Modal() {
  const [modalState, setModalState] = useRecoilState(modalAtom);
  const onMaskClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setModalState({ ...modalState, visible: false });
    }
  };
  const onCloseModal = () => {
    setModalState({ ...modalState, visible: false });
  };

  return (
    <Portal elementId="modal-root">
      <div className="modal-overlay" />
      <div
        className="modal-wrap"
        role="menuitem"
        tabIndex={-1}
        onKeyPress={(e) => console.log(e)}
        onClick={(e) => onMaskClick(e)}
      >
        <div
          className={`modal-inner modal-type-${modalState.type}`}
          role="menuitem"
          tabIndex={0}
        >
          {modalState.closable && (
            <button type="button" className="btn-close" onClick={onCloseModal}>
              닫기
            </button>
          )}
          {modalState.component}
        </div>
      </div>
    </Portal>
  );
}
