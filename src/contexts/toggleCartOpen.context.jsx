import { createContext, useState } from "react";

export const ToggleCartContext = createContext({
  open: false,
  setOpen: () => null,
});

export const ToggleCartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const value = { open, setOpen };

  return (
    <ToggleCartContext.Provider value={value}>
      {children}
    </ToggleCartContext.Provider>
  );
};
