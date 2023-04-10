import React from "react";

export const CardProductFlex = ({ image, title, subtitle }) => {
  return (
    <div className="flex items-center">
      <img
        src={image}
        className="h-[60px] w-[60px] rounded-lg"
        loading="lazy"
      />
      <div className="ml-3 flex flex-col justify-center">
        <p className="text-base font-normal text-black">{title}</p>
        <p className="text-sm font-normal text-brand-secondary">{subtitle}</p>
      </div>
      <div className="ml-auto flex flex-col justify-center"></div>
    </div>
  );
};