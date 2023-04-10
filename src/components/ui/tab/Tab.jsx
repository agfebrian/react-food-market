import React from "react";
import clsx from "clsx";
import { NavTab } from "./NavTab";

export const Tab = ({
  items,
  activeTab,
  handleChange,
  className,
  children,
}) => {
  return (
    <div className={clsx("bg-white", className)}>
      <div className="flex gap-6 border border-x-0 border-t-0 border-b-brand-grey-1 pl-6">
        {items.map((item, index) => (
          <NavTab
            key={index}
            activeTab={activeTab}
            indexTab={index}
            text={item}
            handleChange={handleChange}
          />
        ))}
      </div>
      {children}
    </div>
  );
};
