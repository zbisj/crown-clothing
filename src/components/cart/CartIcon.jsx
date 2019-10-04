import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ItemCount, ShoppingIcon, CartIconContainer } from './cart-icon.styles';

import { selectCartItemsCount } from '../../redux/selectors/CartSelectors';
import { toggleCartHidden } from '../../redux/actions/CartActions';

const CartIcon = ({toggleCartHidden, itemCount}) => (

  <CartIconContainer onClick={ toggleCartHidden }>
    <ShoppingIcon />
    <ItemCount>{ itemCount }</ItemCount>
  </CartIconContainer>

);

const mapDispatchToProps = dispatch => (
  {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
);


const mapStateToProps = createStructuredSelector(
  // using the reduce function, we initiate itemCount as 0 wich is the same as or equal to the accumulatedQuantity then we add on it all the quantities of items in the cart
  // so the first item quantity value will be added to 0, then the second quantity will be added to the first one plus zero and so on
  // that is then assigned to the itemCount property

  {
    itemCount: selectCartItemsCount
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
