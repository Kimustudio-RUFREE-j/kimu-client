import { atom } from 'recoil';

interface SignupInfo {
  email: string;
  password: string;
  userName: string;
  birth: string;
  gender: string;
  phone: string;
  pickIssues: { id: number; title: string }[];
  step: number;
}

const signupState = atom<SignupInfo>({
  key: `signupState`,
  default: {
    email: null,
    password: null,
    userName: null,
    birth: null,
    gender: null,
    phone: null,
    pickIssues: null,
    step: 0,
  },
});

export default signupState;
