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

const getCartPrice = (cartItems) => {
  if (cartItems.length < 1) return 0;

  return cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
};

export const CartContext = createContext({
  cartItems: [],
  totalCartPrice: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (product) => {
    setCartItems(removeItem(cartItems, product));
  };

  useEffect(() => {
    setTotalCartPrice(getCartPrice(cartItems));
  }, [cartItems]);

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    totalCartPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
