import React from 'react'
import { connect } from 'react-redux';

import {
  Cell,
  QuantityCell,
  RemoveButton,
  ImageContainer,
  CheckoutItemContainer
} from './checkout-item.styles';

import { clearItemFromCart, addItem, removeItem } from '../../redux/actions/CartActions';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
  const { name, imageUrl, price, quantity} = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={ imageUrl } alt="item" />
      </ImageContainer>
      <Cell>{ name } </Cell>
      <QuantityCell>
        <div
          className="arrow"
          onClick={ () => removeItem(cartItem) }
        >
          &#10094;
        </div>
        <span className="value">{ quantity }</span>
        <div
          className="arrow"
          onClick={ () => addItem(cartItem) }
        >
          &#10095;
        </div>
      </QuantityCell>
      <Cell>{ price } </Cell>
      <RemoveButton
        onClick={
          () => clearItem(cartItem)
        }
      >&#10005;</RemoveButton>
  </CheckoutItemContainer>
  );

};

const mapDispatchToProps = dispatch => (
  {
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item))
  }
)

export default connect(null, mapDispatchToProps)(CheckoutItem);
