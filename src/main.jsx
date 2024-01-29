import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/user.context.jsx";

import { ToggleCartProvider } from "./contexts/toggleCartOpen.context.jsx";
import { CartContextProvider } from "./contexts/cart.contex.jsx";
import { CategoriesProvider } from "./contexts/categories.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoriesProvider>
      <UserProvider>
        <CartContextProvider>
          <ToggleCartProvider>
            <App />
          </ToggleCartProvider>
        </CartContextProvider>
      </UserProvider>
    </CategoriesProvider>
  </React.StrictMode>
);
