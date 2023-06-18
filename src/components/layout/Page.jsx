import React from "react";
import clsx from "clsx";

export const Page = ({ className, children }) => {
  return (
    <div className={clsx(className, "w-full bg-brand-grey")}>{children}</div>
  );
};
