import { createContext, useReducer } from "react";

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

const INITIAL_CART_STATE = {
  cartItems: [],
  totalCartPrice: 0,
  quantity: 0,
};
export const CartContext = createContext({
  INITIAL_CART_STATE,
});

// Reducer

export const CART_ACTION_TYPES = {
  SET_CART: "SET_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartContextProvider = ({ children }) => {
  // Reducer
  const [{ cartItems, totalCartPrice, quantity }, dispatch] = useReducer(
    cartReducer,
    INITIAL_CART_STATE
  );

  function updateCartItemsReducer(newCartItems) {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART,
      payload: {
        cartItems: newCartItems,
        totalCartPrice: newCartTotal,
        quantity: newCartCount,
      },
    });
  }
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
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

  const value = {
    cartItems,
    totalCartPrice,
    quantity,
    addItemToCart,
    removeItemFromCart,
    clearCartItems,
    removeSelectedCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
