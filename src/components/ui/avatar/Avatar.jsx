import React from "react";
import clsx from "clsx";

export const Avatar = ({ size, rounded, photo, className }) => {
  const showSize = (size) => {
    switch (size) {
      case "lg":
        return "h-24 w-24";
      case "md":
        return "h-14 w-14";
      default:
        return "h-24 w-24";
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
          srcSet={`${photo} 300w`}
          sizes="300px"
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
