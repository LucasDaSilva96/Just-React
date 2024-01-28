import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../api/shop-data";

export const ProductContext = createContext({
  products: null,
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
