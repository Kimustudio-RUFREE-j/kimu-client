import React from 'react';
import { useRecoilState } from 'recoil';
import { modalAtom } from '@/atom/modal';

type ConfirmModalProps = {
  id: number;
  ModalText: string;
  ConfirmBtnText: string;
  CancelBtnText: string;
  // onSuccess: (id: number) => void;
};

export default function ConfirmModal({
  id,
  ModalText,
  ConfirmBtnText,
  CancelBtnText,
}: ConfirmModalProps) {
  const [modalState, setModalState] = useRecoilState(modalAtom);
  const onCloseModal = () => {
    setModalState({ ...modalState, visible: false });
  };
  // onSuccess

  return (
    <div>
      <p>{ModalText}</p>
      <div>
        <button
          type="button"
          className="btn-confirm"
          // onClick={() => onSuccess(id)}
        >
          {ConfirmBtnText}
        </button>
        <button type="button" onClick={onCloseModal}>
          {CancelBtnText}
        </button>
      </div>
    </div>
  );
}
