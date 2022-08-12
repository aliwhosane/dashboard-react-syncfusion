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
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("light");
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false);

  const onNavButtonClick = (menuItemClicked) => {
    toggleIsOpen({ ...initialState, [menuItemClicked]: true });
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("mode", e.target.value);

    setIsThemeSettingsOpen(false);
  };

  const setColor = (color) => {
    console.log(color);
    setCurrentColor(color);
    localStorage.setItem("ColorMode", color);
    setIsThemeSettingsOpen(false);
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
        currentColor,
        setColor,
        currentMode,
        setMode,
        isThemeSettingsOpen,
        setIsThemeSettingsOpen,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useContextState = () => useContext(StateContext);
