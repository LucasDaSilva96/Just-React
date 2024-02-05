import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeItem, removeSelectedItem } from "./cart-action";

const INITIAL_CART_STATE = {
  cartItems: [],
  totalCartPrice: 0,
  quantity: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_CART_STATE,
  reducers: {
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeItem(state.cartItems, action.payload);
    },
    removeSelectedItemFromCart(state, action) {
      state.cartItems = removeSelectedItem(state.cartItems, action.payload);
    },

    setIsCartOpen(state, action) {
      state.isCartOpen = !state.isCartOpen;
    },
    clearCart(state, action) {
      state.cartItems = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  removeSelectedItemFromCart,
  setIsCartOpen,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

// export const cartReducer = (state = INITIAL_CART_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: payload,
//       };

//     case CART_ACTION_TYPES.SET_CART_EMPTY:
//       return {
//         ...state,
//         ...INITIAL_CART_STATE,
//       };

//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: state.isCartOpen === true ? false : true,
//       };
//     default:
//       return state;
//   }
// };
