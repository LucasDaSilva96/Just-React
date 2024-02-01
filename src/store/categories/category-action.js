export const CATEGORIES_ACTION_TYPES = {
  SET_PRODUCT: "SET_PRODUCT",
};

export const setCategoriesArray = (categoriesArray, dispatch) =>
  dispatch({
    type: CATEGORIES_ACTION_TYPES.SET_PRODUCT,
    payload: categoriesArray,
  });
