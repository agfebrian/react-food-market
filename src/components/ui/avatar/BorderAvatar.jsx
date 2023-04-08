import React from "react";
import clsx from "clsx";

export const BorderAvatar = ({ size, rounded, className, children }) => {
  const showSize = (size) => {
    // Size available like as sizing on tailwind classes
    return `h-${size} w-${size} border-2 border-dashed border-brand-secondary`;
  };

  const showRounded = (rounded) => {
    if (rounded && rounded === "circle") {
      return "rounded-full";
    }
    return "rounded";
  };

  const style = clsx(
    `flex items-center justify-center ${showSize(size)} ${showRounded(
      rounded
    )}`,
    className
  );

  return <div className={style}>{children}</div>;
};
