import React from 'react';

import './cart-item.styles.scss';
// below we are using ES6 destructing syntax: firstly getting the item from props, then the imageUrl, prie, and name from the item itself
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (

  <div className="cart-item">
    <img src={ imageUrl} alt={ name } />
    <div className="item-details">
      <span className="name">{ name }</span>
      <span className="price">{ quantity } x ${ price }</span>
    </div>
  </div>
)
export default CartItem;
