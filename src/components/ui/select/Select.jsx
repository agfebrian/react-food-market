import React from "react";

export const Select = ({ label, children, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-[6px]">
        {label}
      </label>
      <select
        className="rounded-lg border border-black px-3 py-2 outline-none focus:border-green-300"
        {...rest}
      >
        {children}
      </select>
    </div>
  );
};
