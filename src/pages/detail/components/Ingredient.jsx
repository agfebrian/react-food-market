import React from "react";

export const Ingredient = ({ text }) => {
  return (
    <div className="mt-4">
      <p className="text-base font-normal">Ingredients:</p>
      <p className="mt-1 text-base font-normal text-brand-secondary">{text}</p>
    </div>
  );
};
