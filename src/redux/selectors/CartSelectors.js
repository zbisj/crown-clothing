
import { createSelector } from 'reselect';

// this pull out the cart state from the entire state object .i.e state { user: "...", cart: "..." } this is called an input selector
const selectCart = state => state.cart;

// createSelector takes 2 arguments: an array and a callback, the array is the input selectors we need and the call back take any arguments based on the input selectors passed into the array and in the order of the contents of the array
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount =  createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);
