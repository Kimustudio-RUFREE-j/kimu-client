import React from 'react';

interface SignupInfo {
  email: string;
  password: string;
  phone: string;
  name: string;
  birth: string;
}

const SignupContext = React.createContext<SignupInfo>({
  email: null,
  password: null,
  phone: null,
  name: null,
  birth: null,
});

export default SignupContext;
