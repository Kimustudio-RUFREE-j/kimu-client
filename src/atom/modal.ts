import { atom } from 'recoil';

interface ModalInfo {
  closable: boolean;
  visible: boolean;
  type: string;
  component: React.ReactNode;
}

export const modalAtom = atom<ModalInfo>({
  key: `modalState`,
  default: {
    closable: false,
    visible: false,
    type: ``,
    component: null,
  },
});
