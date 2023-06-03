import React from "react";

export const Ingredient = ({ text, loading }) => {
  return (
    <div className="mt-4">
      <p className="text-base font-normal">Ingredients:</p>
      {!loading ? (
        <p className="mt-1 text-base font-normal text-brand-secondary">
          {text}
        </p>
      ) : (
        <div className="mt-2 h-3 w-56 animate-pulse rounded-lg bg-brand-grey-1"></div>
      )}
    </div>
  );
};
