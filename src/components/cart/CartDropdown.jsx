import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss'

import Button from '../button/Button';
import CartItem from '../cart/CartItem';

import { selectCartItems } from '../../redux/selectors/CartSelectors';
import { toggleCartHidden } from '../../redux/actions/CartActions';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-times">
      {
        cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={ cartItem.id } item={ cartItem } />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )
      }
    </div>
    <Button onClick={
        () => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }
      }
    >GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProp = createStructuredSelector(
  {
    cartItems: selectCartItems
  }
);

export default withRouter(connect(mapStateToProp)(CartDropdown));
