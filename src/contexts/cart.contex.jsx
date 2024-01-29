import { createContext, useEffect, useReducer, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
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

const removeItem = (cartItems, product) => {
  const items = cartItems;
  const index = items.findIndex((el) => el.id === product.id);
  items[index].quantity--;

  return items.filter((el) => !el.quantity < 1);
};

const clearCart = () => {
  return [];
};

const removeSelectedItem = (cartItems, item) => {
  return cartItems.filter((el) => el.id !== item.id);
};

const getCartPrice = (cartItems) => {
  if (cartItems.length < 1) return 0;

  return cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
};

const getCartQuantity = (cartItems) => {
  if (cartItems.length < 1) return 0;

  return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
};

export const CartContext = createContext({
  cartItems: [],
  totalCartPrice: 0,
  cartQuantity: 0,
  addItemToCart: () => {},
  clearCartItems: () => {},
  removeSelectedCartItem: () => {},
  removeItemFromCart: () => {},
});

// Reducer
const INITIAL_CART_STATE = {
  cartItems: [],
  totalCartPrice: 0,
  quantity: 0,
};

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  CLEAR_CART: "CLEAR_CART",
  REMOVE_SELECTED_ITEM: "REMOVE_SELECTED_ITEM",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        cartQuantity: state.cartQuantity + 1,
        totalCartPrice:
          state.totalCartPrice + payload.price * state.cartQuantity,
        cartItems: [...state.cartItems, payload],
      };

    case CART_ACTION_TYPES.CLEAR_CART:
      return INITIAL_CART_STATE;

    case CART_ACTION_TYPES.REMOVE_SELECTED_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el.id === payload.id),
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartContextProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  // const [totalCartPrice, setTotalCartPrice] = useState(0);
  // const [cartQuantity, setCarQuantity] = useState(0);

  // Reducer
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);
  const { cartItems, totalCartPrice, cartQuantity } = state;

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    console.log(newCartItems);
    updateCartItemsReducer(newCartItems);
  };

  const clearCartItems = () => {
    const newCartItems = clearCart();
    updateCartItemsReducer(newCartItems);
  };

  const removeSelectedCartItem = (item) => {
    const newCartItems = removeSelectedItem(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (product) => {
    const newCartItems = removeItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: {
        cartItems: newCartItems,
        totalCartPrice: totalCartPrice,
        quantity: cartQuantity,
      },
    });
  };

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    totalCartPrice,
    cartQuantity,
    clearCartItems,
    removeSelectedCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
