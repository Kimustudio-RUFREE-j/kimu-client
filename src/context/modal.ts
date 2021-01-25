import { atom } from 'recoil';

interface ModalInfo {
  closable: boolean;
  visible: boolean;
  type: string;
  component: HTMLElement;
}

const modalState = atom<ModalInfo>({
  key: `modalState`,
  default: {
    closable: false,
    visible: false,
    type: ``,
    component: null,
  },
});

export default modalState;
