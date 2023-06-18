import React from "react";
import chevronRight from "~/assets/icons/chevron-right.svg";
import { NavLink } from "react-router-dom";

export const Item = ({ title, link }) => {
  return (
    <NavLink to={link} className="flex items-center justify-between">
      <p className="text-sm font-normal text-black">{title}</p>
      <img src={chevronRight} alt="icon-right" />
    </NavLink>
  );
};
