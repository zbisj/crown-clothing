import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss'

import Button from '../button/Button';
import CartItem from '../cart/CartItem';

import { selectCartItems } from '../../redux/selectors/CartSelectors';

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
  {
    cartItems: selectCartItems(state)
  }
);

export default connect(mapStateToProp)(CartDropdown);
