import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/user.context.jsx";

import { ToggleCartProvider } from "./contexts/toggleCartOpen.context.jsx";
import { CartContextProvider } from "./contexts/cart.contex.jsx";
import { CategoriesProvider } from "./contexts/categories.context.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CategoriesProvider>
        <CartContextProvider>
          <ToggleCartProvider>
            <App />
          </ToggleCartProvider>
        </CartContextProvider>
      </CategoriesProvider>
    </Provider>
  </React.StrictMode>
);
