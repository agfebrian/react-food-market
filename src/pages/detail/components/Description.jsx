import React from "react";

export const Description = ({ text, loading }) => {
  return (
    <div className="mt-3">
      {!loading ? (
        <p className="text-base font-normal text-brand-secondary">{text}</p>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="h-3 w-full animate-pulse rounded-lg bg-brand-grey-1"></div>
          <div className="h-3 w-full animate-pulse rounded-lg bg-brand-grey-1"></div>
          <div className="rounded-lganimate-pulse h-3  w-1/2 bg-brand-grey-1"></div>
        </div>
      )}
    </div>
  );
};
