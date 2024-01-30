import { createAction } from "@reduxjs/toolkit";

export const CATEGORIES_ACTION_TYPES = {
  SET_PRODUCT: "SET_PRODUCT",
};

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_PRODUCT, categoriesMap);
