import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/Button';
import CartItem from '../cart/CartItem';

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-times">
      {
        cartItems.map(cartItem => (
          <CartItem key={ cartItem.id } item={ cartItem } />
        ))
      }
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProp = state => (
  console.log(state),
  {
    cartItems: state.cart.cartItems
  }
);

export default connect(mapStateToProp)(CartDropdown);
