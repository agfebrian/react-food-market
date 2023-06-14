import React from "react";
import { Rating } from "~/components/ui";

export const Title = ({ name, rating, loading }) => {
  return (
    <div className="flex flex-col gap-2">
      {!loading ? (
        <h2 className="text-lg font-normal">{name}</h2>
      ) : (
        <div className="h-3 w-60 animate-pulse rounded-lg bg-brand-grey-1"></div>
      )}
      {!loading ? (
        <div className="flex items-center">
          <Rating rate={rating} />
          <span className="ml-2 text-sm font-normal text-brand-secondary">
            {rating}
          </span>
        </div>
      ) : (
        <div className="h-3 w-56 animate-pulse rounded-lg bg-brand-grey-1"></div>
      )}
    </div>
  );
};
