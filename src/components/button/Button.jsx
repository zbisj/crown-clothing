import React from 'react';


import './button.styles.scss';

const Button = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps,
}) => (

  <button
    { ...otherProps}
    className={`
      ${ inverted && 'inverted' }
      ${ isGoogleSignIn && 'google-signin' }
      custom-button
    `}
  >
    { children }
  </button>

);

export default Button;
