import React from "react";

export const ItemTab = ({ activeTab, indexTab, children }) => {
  return (
    <>{activeTab === indexTab && <div className="px-6 py-4">{children}</div>}</>
  );
};
