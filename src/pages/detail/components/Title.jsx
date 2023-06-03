import React from "react";
import { Rating } from "../../../components/ui";

export const Title = ({ name, rating }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-normal">{name}</h2>
      <div className="flex items-center">
        <Rating rate={rating} />
        <span className="ml-2 text-sm font-normal text-brand-secondary">
          {rating}
        </span>
      </div>
    </div>
  );
};
