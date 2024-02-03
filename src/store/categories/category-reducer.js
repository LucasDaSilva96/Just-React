import toast from "react-hot-toast";
import { CATEGORIES_ACTION_TYPES } from "./category-action";

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesMap: payload,
        isLoading: false,
      };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      toast.error(payload);
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
