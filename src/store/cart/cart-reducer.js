import { CART_ACTION_TYPES } from "./cart-types";

const INITIAL_CART_STATE = {
  cartItems: [],
  totalCartPrice: 0,
  quantity: 0,
  isCartOpen: false,
};

export const cartReducer = (state = INITIAL_CART_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    case CART_ACTION_TYPES.SET_CART_EMPTY:
      return {
        ...state,
        ...INITIAL_CART_STATE,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: state.isCartOpen === true ? false : true,
      };
    default:
      return state;
  }
};
