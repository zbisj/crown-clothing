import React from 'react';


import Button from '../button/Button';

import './cart-dropdown.styles.scss'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-times" />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
