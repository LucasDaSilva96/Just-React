import { CATEGORIES_ACTION_TYPES } from "./category-action";

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: [],
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_PRODUCT:
      return {
        ...state,
        categoriesMap: payload,
      };

    default:
      return state;
  }
};
