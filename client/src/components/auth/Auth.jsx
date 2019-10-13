import React from 'react';

import SignIn from '../sign-in/SignIn'
import SignUp from '../sign-up/SignUp'
import { AuthPageContainer } from './auth.styles';

const AuthPage = () => (
  <AuthPageContainer>
    <SignIn />
    <SignUp />
  </AuthPageContainer>
);

export default AuthPage;
