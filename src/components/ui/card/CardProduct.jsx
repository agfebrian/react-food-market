import React from "react";
import { Rating } from "../rating/Rating";

export const CardProduct = ({ image, title, rating }) => {
  return (
    <div className="min-w-52 h-[210px] flex-shrink-0 rounded-lg bg-white">
      <img className="h-36 rounded-lg" src={image} />
      <div className="p-3">
        <h3 className="text-base font-normal text-black">{title}</h3>
        <div className="mt-1 flex gap-1">
          <Rating rate={rating} />
          <p className="text-xs font-normal text-brand-secondary">{rating}</p>
        </div>
      </div>
    </div>
  );
};
