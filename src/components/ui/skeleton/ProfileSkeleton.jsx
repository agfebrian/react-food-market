import React from "react";

export const ProfileSkeleton = () => {
  return (
    <div className="mb-3 flex w-full animate-pulse rounded-lg bg-white">
      <div className="h-[60px] w-[60px] rounded-lg bg-brand-grey-1 "></div>
      <div className="w-full p-3">
        <div className="h-3 w-full rounded-lg bg-brand-grey-1"></div>
        <div className="mt-2 h-3 w-full rounded-lg bg-brand-grey-1"></div>
      </div>
    </div>
  );
};
