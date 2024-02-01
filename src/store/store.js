import { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

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

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
