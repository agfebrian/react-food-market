import React from "react";
import clsx from "clsx";

export const Button = ({
  type,
  color,
  className,
  children,
  handleClick,
  disabled,
  loading,
}) => {
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

  const hovered = (color) => {
    switch (color) {
      case "primary":
        return "hover:bg-brand-dark";
      case "secondary":
        return "hover:bg-brand-secondary-dark";
      default:
        return "hover:bg-brand-dark";
    }
  };

  const style = clsx(
    `rounded-lg border-none ${setColor(color)} p-3 text-base font-medium ${
      disabled ? "bg-brand-grey-1 text-brand-secondary" : `${hovered(color)}`
    }`,
    className
  );

  return (
    <button
      type={type}
      className={style}
      onClick={handleClick}
      disabled={disabled}
    >
      {loading ? "Memuat..." : children}
    </button>
  );
};
