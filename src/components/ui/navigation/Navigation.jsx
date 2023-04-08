import React from "react";
import IconArrowBack from "../../../assets/icons/arrow_back.svg";

export const Navigation = ({ isBack, title, description }) => {
  return (
    <div className="flex items-center gap-5 bg-white px-6 pb-6 pt-8">
      {isBack && <img className="cursor-pointer" src={IconArrowBack} />}
      <div className="flex flex-col">
        <h2 className="text-2xl font-medium text-black">{title}</h2>
        <p className="text-sm font-light text-brand-secondary">{description}</p>
      </div>
    </div>
  );
};
