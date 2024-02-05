import { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

// Own logger ↓

// const loggerMiddleWare = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

// console.log("type ", action.type);
// console.log("payload ", action.payload);
// console.log("currentState ", store.getState());

// next(action);

// console.log("next state: ", store.getState());
// };

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [
//   process.env.NODE_ENV === "development" && logger,
//   thunk,
// ].filter(Boolean);

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// ! Old way ↓
// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// * New way
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: () => [thunk],
});

export const persistor = persistStore(store);
