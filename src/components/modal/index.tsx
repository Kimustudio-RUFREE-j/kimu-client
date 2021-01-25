import React from 'react';
import Portal from '@/components/modal/portal';

export default function Modal() {
  return (
    <Portal elementId="modal-root">
      <div className="overlay" />
      <div className="modal-wrap">
        {/* <div className="modal-inner" tabIndex={0} type={modalState.type}>
          {modalState.component}
        </div> */}
      </div>
    </Portal>
  );
}
