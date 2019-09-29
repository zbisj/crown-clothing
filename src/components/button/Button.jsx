import React from 'react';


import './button.styles.scss';

const Button = ({children, isGoogleSignIn, ...otherProps}) => (

  <button
    { ...otherProps}
    className={`${ isGoogleSignIn && 'google-signin' } custom-button`}
  >
    { children }
  </button>

);

export default Button;
