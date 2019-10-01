
export const addItemtoCart  = (cartItems, cartItemToAdd) => {

  // looping through the items in the cart and returning the first one with a matching id to the item being added
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
  
  // if the item being added to the cart already exists loop through all the items in the cart and find the one matching with the item being added using their id's then update the existing one's quantity by 1.
  // if when looping through the items in the cart and you find an item that has an unmatching id, just return that item as is
  if (existingCartItem) {

    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  };

  // if the item being added does not exist inside te cart, return all the items in the cart and add the new item being added with the quantity property being 1
  return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];

}
