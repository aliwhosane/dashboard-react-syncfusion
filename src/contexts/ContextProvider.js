import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  userProfile: false,
  notification: false,
  chat: false,
  cart: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isOpen, toggleIsOpen] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const onNavButtonClick = (menuItemClicked) => {
    toggleIsOpen({ ...initialState, [menuItemClicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isOpen,
        toggleIsOpen,
        onNavButtonClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useContextState = () => useContext(StateContext);
