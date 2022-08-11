import React, { useEffect } from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Cart, Chat, Notification, UserProfile } from "../components";
import NavButton from "./NavButton";
// icons import
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import avatar from "../data/avatar.jpg";

// Context import
import { useContextState } from "../contexts/ContextProvider";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isOpen,
    onNavButtonClick,
    screenSize,
    setScreenSize,
  } = useContextState();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="flex justify-between p-2 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color="gray"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Chat"
          dotColor={"#03c9d7"}
          customFunc={() => onNavButtonClick("chat")}
          color="gray"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Cart"
          customFunc={() => onNavButtonClick("cart")}
          color="gray"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Notifications"
          dotColor={"#03c9d7"}
          customFunc={() => onNavButtonClick("notifications")}
          color="gray"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="User Profile" position="BottomCenter">
          <div
            className="flex rouded-lg items-center gap-2 cursor-poinnter p-1 hover:bg-light-gray"
            onClick={() => onNavButtonClick("profile")}
          >
            <img className="rounded-full w-7 h-7" src={avatar} alt="" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                Examiner
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isOpen.cart && <Cart />}
        {isOpen.chat && <Chat />}
        {isOpen.notification && <Notification />}
        {isOpen.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
