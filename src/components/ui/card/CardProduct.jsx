import React from "react";
import { NavLink } from "react-router-dom";
import { Rating } from "../rating/Rating";

export const CardProduct = ({ id, image, title, rating }) => {
  return (
    <div className="min-w-52 h-[210px] flex-shrink-0 rounded-lg bg-white">
      <NavLink className="min-w-52 block" to={`/detail/${id}`}>
        <img
          className="h-36 rounded-lg"
          srcSet={`${image} 300w, ${image} 768w, ${image} 1280w,`}
          sizes="300px, 768px, 1280px"
          width={208}
          height={144}
          src={image}
          alt={title}
        />
      </NavLink>
      <div className="p-3">
        <NavLink className="min-w-52 block" to={`/detail/${id}`}>
          <h3 className="text-base font-normal text-black">{title}</h3>
        </NavLink>
        <div className="mt-1 flex gap-1">
          <Rating rate={rating} />
          <p className="text-xs font-normal text-brand-secondary">{rating}</p>
        </div>
      </div>
    </div>
  );
};
