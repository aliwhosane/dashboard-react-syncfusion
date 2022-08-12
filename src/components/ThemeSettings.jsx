import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck2 } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useContextState } from "../contexts/ContextProvider";
const ThemeSettings = () => {
  const {
    setColor,
    setMode,
    currentMode,
    currentColor,
    setIsThemeSettingsOpen,
  } = useContextState();
  return (
    <div className="w-screen fixed top-0  right-0 bg-half-transparent">
      <div className="float-right  h-screen w-400 dark:text-gray-200  bg-white dark:[#484b52]">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="text-xl font-semibold">Settings</p>
          <button
            type="button"
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => setIsThemeSettingsOpen(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1  border-color  p-4 ml-4">
          <p className="font-semibold  text-2xl">Theme Options</p>
          <div className="mt-3">
            <input
              type="radio"
              id="light"
              name="theme"
              value="light"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === "light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-3">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === "dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1  border-color  p-4 ml-4">
          <p className="font-semibold  text-2xl">Theme Colors</p>
          <div className="flex gap-4">
            {themeColors.map((color, i) => (
              <TooltipComponent
                key={i}
                content={color.name}
                position={"TopCenter"}
              >
                <div className="relative mt-2  cursor-pointer gap-5  items-center">
                  <button
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: color.color }}
                    onClick={() => setColor(color.color)}
                  >
                    <BsCheck2
                      className={`ml-2 text-2xl  text-white  ${
                        color.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
