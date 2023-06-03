import React from "react";

export const CardSkeleton = () => {
  return (
    <div className="min-w-52 h-[210px] flex-shrink-0 animate-pulse rounded-lg bg-white">
      <div className="h-36 w-60 rounded-lg bg-brand-grey-1 "></div>
      <div className="p-3">
        <div className="h-3 rounded-lg bg-brand-grey-1"></div>
        <div className="mt-2 h-3 rounded-lg bg-brand-grey-1"></div>
      </div>
    </div>
  );
};
