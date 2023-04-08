import React from "react";
import clsx from "clsx";

export const Button = ({ type, color, className, children, handleClick }) => {
  const setColor = (color) => {
    switch (color) {
      case "primary":
        return "bg-brand text-black";
      case "secondary":
        return "bg-brand-secondary text-white";
      default:
        return "bg-brand text-black";
    }
  };

  const style = clsx(
    `rounded-lg border-none ${setColor(color)} p-3 text-base font-medium`,
    className
  );

  return (
    <button type={type} className={style} onClick={handleClick}>
      {children}
    </button>
  );
};
