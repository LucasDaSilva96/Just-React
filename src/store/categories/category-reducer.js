import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: [],
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    fetchCategoriesStart(state, action) {
      state.isLoading = true;
    },
    fetchCategoriesSuccess(state, action) {
      state.categoriesMap = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} = categorySlice.actions;

export const categoriesReducer = categorySlice.reducer;

// export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return {
//         ...state,
//         categoriesMap: payload,
//         isLoading: false,
//       };

//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//       toast.error(payload);
//       return {
//         ...state,
//         isLoading: false,
//         error: payload,
//       };

//     default:
//       return state;
//   }
// };
