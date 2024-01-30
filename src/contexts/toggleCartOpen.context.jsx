import { createContext, useReducer, useState } from "react";

export const ToggleCartContext = createContext({
  open: false,
  setOpen: () => null,
});

const INITIAL_TOGGLE_STATE = {
  open: false,
};

const toggleReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "toggle":
      return {
        ...state,
        open: state.open === true ? false : true,
      };

    default: {
      throw new Error(`Unhandled action type ${type} in toggleReducer`);
    }
  }
};

export const ToggleCartProvider = ({ children }) => {
  // const [open, setOpen] = useState(false);

  const [{ open }, dispatch] = useReducer(toggleReducer, INITIAL_TOGGLE_STATE);

  const setOpen = () => {
    dispatch({ type: "toggle" });
  };

  const value = { open, setOpen };

  return (
    <ToggleCartContext.Provider value={value}>
      {children}
    </ToggleCartContext.Provider>
  );
};
