import React, { useState } from "react";

export const Counter = ({ count, handleChange }) => {
  const min = () => {
    if (count > 1) {
      handleChange(count - 1);
    }
  };

  const plus = () => handleChange(count + 1);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={min}
        className="flex h-7 w-7 items-center justify-center rounded-md border border-black outline-none"
      >
        <svg
          width="8"
          height="2"
          viewBox="0 0 8 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.312 0.52V1.752H0.928V0.52H7.312Z" fill="#020202" />
        </svg>
      </button>
      <span className="text-base font-normal text-black">{count}</span>
      <button
        onClick={plus}
        className="flex h-7 w-7 items-center justify-center rounded-md border border-black outline-none"
      >
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.688 4.816H5.312V8.224H3.888V4.816H0.528V3.488H3.888V0.0639992H5.312V3.488H8.688V4.816Z"
            fill="#020202"
          />
        </svg>
      </button>
    </div>
  );
};
