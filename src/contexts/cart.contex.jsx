import { createContext, useEffect, useState } from "react";

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

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [cartQuantity, setCarQuantity] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const clearCartItems = () => {
    setCartItems(clearCart());
  };

  const removeSelectedCartItem = (item) => {
    setCartItems(removeSelectedItem(cartItems, item));
  };

  const removeItemFromCart = (product) => {
    setCartItems(removeItem(cartItems, product));
  };

  useEffect(() => {
    setCarQuantity(getCartQuantity(cartItems));
    setTotalCartPrice(getCartPrice(cartItems));
  }, [cartItems]);

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
