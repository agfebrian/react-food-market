import React from "react";

export const Button = ({ type, color, children }) => {
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

  return (
    <button
      type={type}
      className={`rounded-lg border-none ${setColor(
        color
      )} p-3 text-base font-medium`}
    >
      {children}
    </button>
  );
};
