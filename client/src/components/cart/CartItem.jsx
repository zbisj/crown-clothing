import React from 'react';

import  { CartItemContainer, ItemDetails} from './cart-item.styles';
// below we are using ES6 destructing syntax: firstly getting the item from props, then the imageUrl, prie, and name from the item itself
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (

  <CartItemContainer>
    <img src={ imageUrl} alt={ name } />
    <ItemDetails>
      <span className="name">{ name }</span>
      <span className="price">{ quantity } x ${ price }</span>
    </ItemDetails>
  </CartItemContainer>
)
export default CartItem;
