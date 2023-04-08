import React from "react";

export const Input = ({ label, type, placeholder, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-[6px]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-lg border border-black px-3 py-2 outline-none focus:border-green-300"
        {...rest}
      />
    </div>
  );
};
