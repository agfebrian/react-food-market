import React from "react";
import clsx from "clsx";

export const Avatar = ({ size, rounded, photo, className }) => {
  const showSize = (size) => {
    // Size available like as sizing on tailwind classes
    return `w-${size} h-${size}`;
  };

  const showRounded = (rounded) => {
    if (rounded && rounded === "circle") {
      return "rounded-full";
    }
    return "rounded";
  };

  const style = clsx(
    "flex items-center justify-center bg-brand-grey",
    showSize(size),
    showRounded(rounded),
    className
  );

  return (
    <>
      {photo ? (
        <img
          src={photo}
          className={clsx(showSize(size), showRounded(rounded), className)}
          loading="lazy"
        />
      ) : (
        <div className={style}>
          <p className="text-sm font-light text-brand-secondary">Add Photo</p>
        </div>
      )}
    </>
  );
};
