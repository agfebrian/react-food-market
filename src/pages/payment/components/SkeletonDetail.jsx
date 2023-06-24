import React from "react";
import { ProfileSkeleton } from "~/components/ui";
import { SkeletonFlex } from ".";

export const SkeletonDetail = () => {
  return (
    <div className="mt-6 bg-white px-6 py-4">
      <ProfileSkeleton />
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4].map((item) => (
          <SkeletonFlex key={item} />
        ))}
      </div>
    </div>
  );
};
