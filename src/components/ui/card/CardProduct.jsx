import React from "react";
import { NavLink } from "react-router-dom";
import { Rating } from "../rating/Rating";

export const CardProduct = ({
  id,
  image,
  title,
  rating,
  fetchpriority = "low",
}) => {
  return (
    <div className="min-w-52 min-h-[210px] flex-shrink-0 space-y-2 rounded-lg bg-white">
      <NavLink className="min-w-52 block h-[155px]" to={`/detail/${id}`}>
        <img
          className="rounded-lg object-contain"
          sizes="(min-width: 640px): 208px, calc(100vw - 2rem)"
          // eslint-disable-next-line react/no-unknown-property
          fetchpriority={fetchpriority}
          width={208}
          height={144}
          src={image}
          alt={title}
        />
      </NavLink>
      <div className="rounded-b-lg px-3 pb-3">
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
