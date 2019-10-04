import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  EmptyMessage,
  CheckoutButton,
  DropdownContainer,
  CartItemsContainer
} from './cart-dropdown.styles'

import Button from '../button/Button';
import CartItem from '../cart/CartItem';

import { selectCartItems } from '../../redux/selectors/CartSelectors';
import { toggleCartHidden } from '../../redux/actions/CartActions';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <DropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={ cartItem.id } item={ cartItem } />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )
      }
    </CartItemsContainer>
    <CheckoutButton
      onClick={
        () => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }
      }
    >GO TO CHECKOUT</CheckoutButton>
  </DropdownContainer>
);

const mapStateToProp = createStructuredSelector(
  {
    cartItems: selectCartItems
  }
);

export default withRouter(connect(mapStateToProp)(CartDropdown));
