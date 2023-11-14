import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "./HomeIcon";
import OrderIcon from "./OrderIcon";
import AccountIcon from "./AccountIcon";

export const NavigationBottom = () => {
  return (
    <div className="fixed bottom-0 left-0 flex h-[60px] w-full items-center justify-center bg-white">
      <div className="flex w-full max-w-xl justify-evenly">
        <NavLink to="/" aria-label="Home Page">
          {HomeIcon}
        </NavLink>
        <NavLink to="/orders" aria-label="Order Page">
          {OrderIcon}
        </NavLink>
        <NavLink to="/account" aria-label="Account Page">
          {AccountIcon}
        </NavLink>
      </div>
    </div>
  );
};
