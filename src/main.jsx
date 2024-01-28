import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/user.context.jsx";
import { ProductProvider } from "./contexts/products.context.jsx";
import { ToggleCartProvider } from "./contexts/toggleCartOpen.context.jsx";
import { CartContextProvider } from "./contexts/cart.contex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <UserProvider>
        <CartContextProvider>
          <ToggleCartProvider>
            <App />
          </ToggleCartProvider>
        </CartContextProvider>
      </UserProvider>
    </ProductProvider>
  </React.StrictMode>
);
