import React from 'react';

import SignIn from '../sign-in/SignIn'
import SignUp from '../sign-up/SignUp'
import './auth.styles.scss';

const AuthPage = () => (
  <div className="auth">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthPage;
