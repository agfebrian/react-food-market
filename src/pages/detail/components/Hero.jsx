import React from "react";

export const Hero = ({ image }) => {
  return (
    <div className="relative h-64 w-full">
      {!image ? (
        <div className="h-full w-full animate-pulse bg-brand-grey-1"></div>
      ) : (
        <img
          src={image}
          alt="food"
          width="100%"
          height="256"
          className="h-64 bg-cover object-center"
        />
      )}
    </div>
  );
};
