import { addItemtoCart, removeItemFromCart } from "../../utils/cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemtoCart(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        // we are keeping only the cart items with id's that dont match the id in the payload and filtering out the matching ones
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default CartReducer;
