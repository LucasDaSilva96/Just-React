import { CART_ACTION_TYPES } from "./cart-types";

export const addCartItem = (cartItems, productToAdd) => {
  const hasItem = cartItems.find((el) => el.id === productToAdd.id);

  if (hasItem) {
    return cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, product) => {
  const items = cartItems;
  const index = items.findIndex((el) => el.id === product.id);
  items[index].quantity--;

  return items.filter((el) => !el.quantity < 1);
};

export const removeSelectedItem = (cartItems, item) => {
  return cartItems.filter((el) => el.id !== item.id);
};

export const setIsCartOpen = (dispatch) =>
  dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN });
