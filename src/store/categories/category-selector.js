import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

// Memoization Selector ↓
export const selectCategories = createSelector(
  // input
  [selectCategoryReducer],
  // output
  (categoriesSlice) => categoriesSlice.categoriesMap
);

// Memoization Selector ↓
export const selectCategoriesMap = createSelector(
  // input
  [selectCategories],
  // output
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;

      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
