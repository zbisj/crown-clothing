import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/selectors/CartSelectors';
import { toggleCartHidden } from '../../redux/actions/CartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({toggleCartHidden, itemCount}) => (

  <div className="cart-icon" onClick={ toggleCartHidden }>
    <ShoppingIcon className="shopping-icon"  />
    <span className="item-count">{ itemCount }</span>
  </div>

);

const mapDispatchToProps = dispatch => (
  {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
);


const mapStateToProps = state => (
  // using the reduce function, we initiate itemCount as 0 wich is the same as or equal to the accumulatedQuantity then we add on it all the quantities of items in the cart
  // so the first item quantity value will be added to 0, then the second quantity will be added to the first one plus zero and so on
  // that is then assigned to the itemCount property
  console.log('mma'),
  {
    itemCount: selectCartItemsCount(state)
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
