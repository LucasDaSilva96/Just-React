import { USER_ACTION_TYPES } from "./user-reducer";

export const setCurrentUser = (user, dispatch) => {
  dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
};
