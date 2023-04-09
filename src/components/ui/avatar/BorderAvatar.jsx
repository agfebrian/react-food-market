import React from "react";
import clsx from "clsx";

export const BorderAvatar = ({ size, rounded, className, children }) => {
  const showSize = (size) => {
    switch (size) {
      case "lg":
        return "h-28 w-28";
      case "md":
        return "h-16 w-16";
      default:
        return "h-28 w-28";
        break;
    }
  };

  const showRounded = (rounded) => {
    if (rounded && rounded === "circle") {
      return "rounded-full";
    }
    return "rounded";
  };

  const style = clsx(
    showRounded(rounded),
    showSize(size),
    "flex items-center justify-center border-2 border-dashed border-brand-secondary",
    className
  );

  return <div className={style}>{children}</div>;
};
