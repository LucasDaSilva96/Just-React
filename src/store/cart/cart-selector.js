import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const cartItemsArray = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const cartCount = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
export const cartTotal = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);
