import React from "react";
import { Link, NavLink } from "react-router-dom";
// icon  imports
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// dummy data
import { links } from "../data/dummy";
// Context import
import { useContextState } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, currentColor } = useContextState();
  const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2`;
  const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md m-2 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray`;

  return (
    <div className="ml-3 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              onClick={() => {}}
              className="items-center mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 gap-3 ml-3"
            >
              <SiShopware /> <span>React Dashboard</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(false)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((link) => (
              <div key={link.title}>
                <h1 className="text-gray-400 m-3 mt-4 uppercase">
                  {link.title}
                </h1>
                {link.links.map((subLink) => (
                  <NavLink
                    to={`/${subLink.name}`}
                    key={subLink.name}
                    onClick={() => setActiveMenu((prev) => !prev)}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive
                          ? currentColor
                          : "transparent",
                      };
                    }}
                  >
                    {subLink.icon}
                    <span className="capitalize">{subLink.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
