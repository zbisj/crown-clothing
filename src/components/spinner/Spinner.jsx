
import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

// creating a HOC componet that takes a componet, 'WrappedComponent' which checks for the 'isLoading' prop on th 'WrappedComponent' if its true then a 'SpinnerContainer' is rendered but its false the 'WrappedComponent' componet gets rendered
const WithSpinner = WrappedComponent => {
 const Spinner = ({isLoading, ...props}) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent { ...props } />
    );
  };
  return Spinner;
};

export default WithSpinner;
