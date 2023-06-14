import React from "react";
import { Avatar } from "../avatar/Avatar";
import IconArrowBack from "~/assets/icons/arrow_back.svg";

export const Navigation = ({
  isBack,
  title,
  description,
  avatar,
  handleBack,
}) => {
  return (
    <div className="flex items-center gap-5 bg-white px-6 pb-6 pt-8">
      {isBack && (
        <img
          className="cursor-pointer"
          src={IconArrowBack}
          onClick={handleBack}
        />
      )}
      <div className="flex flex-col">
        <h2 className="text-2xl font-medium text-black">{title}</h2>
        <p className="text-sm font-light text-brand-secondary">{description}</p>
      </div>
      {avatar && <Avatar className="ml-auto" photo={avatar} size="md" />}
    </div>
  );
};
