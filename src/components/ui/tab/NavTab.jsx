import React from "react";
import clsx from "clsx";

export const NavTab = ({ activeTab, indexTab, text, handleChange }) => {
  const colorText =
    activeTab === indexTab ? "text-black" : "text-brand-secondary";
  const colorBorderBottom = activeTab === indexTab ? "bg-black" : "";

  return (
    <div
      className="relative flex cursor-pointer justify-center py-4"
      onClick={() => handleChange(indexTab)}
    >
      <p className={clsx("flex-shrink-0 text-sm font-medium", colorText)}>
        {text}
      </p>
      <div
        className={clsx(
          "absolute -bottom-[2px] w-1/2 rounded-md p-[2px]",
          colorBorderBottom,
        )}
      ></div>
    </div>
  );
};
