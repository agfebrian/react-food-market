import React from "react";
import { useCurrentLocation, useColorsNavBottom } from "~/hooks";

const OrderIcon = () => {
  const currentLocation = useCurrentLocation();
  const colors = useColorsNavBottom();
  const orderIcon =
    currentLocation == "/orders" ? (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.954 22.1521C28.4579 26.8791 24.7529 31 19.9991 31L12.0009 31C7.24709 31 3.54211 26.8791 4.04596 22.1521L5.06665 12.576C5.28339 10.5425 6.99908 9 9.04412 9H22.9559C25.0009 9 26.7166 10.5425 26.9333 12.576L27.954 22.1521ZM10.1377 17C10.1377 16.4477 10.5854 16 11.1377 16H20.8623C21.4146 16 21.8623 16.4477 21.8623 17C21.8623 17.5523 21.4146 18 20.8623 18H11.1377C10.5854 18 10.1377 17.5523 10.1377 17ZM11.1377 20C10.5854 20 10.1377 20.4477 10.1377 21C10.1377 21.5523 10.5854 22 11.1377 22H20.8623C21.4146 22 21.8623 21.5523 21.8623 21C21.8623 20.4477 21.4146 20 20.8623 20H11.1377Z"
          fill={colors[0]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.8597 9.3368C19.9505 8.92007 20 8.47347 20 8C20 4.93823 17.931 3 16 3C14.069 3 12 4.93823 12 8C12 8.47347 12.0495 8.92007 12.1403 9.33679C11.4501 9.54249 10.8222 9.80164 10.2757 10.1039C10.0966 9.43984 10 8.73308 10 8C10 4.13401 12.6863 1 16 1C19.3137 1 22 4.13401 22 8C22 8.73308 21.9034 9.43985 21.7243 10.1039C21.1778 9.80164 20.5499 9.54249 19.8597 9.3368Z"
          fill={colors[0]}
        />
      </svg>
    ) : (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
      >
        <rect width="32" height="32" fill="white" />
        <path
          d="M26.1332 22.3092C26.5417 26.428 23.3064 30 19.1674 30L12.8326 30C8.69357 30 5.45832 26.428 5.86681 22.3092L6.81939 12.7039C6.97159 11.1693 8.26255 10 9.80475 10L22.1953 10C23.7374 10 25.0284 11.1693 25.1806 12.7039L26.1332 22.3092Z"
          stroke={colors[1]}
          strokeWidth="2"
        />
        <line
          x1="12"
          y1="17"
          x2="20"
          y2="17"
          stroke={colors[1]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="12"
          y1="21"
          x2="20"
          y2="21"
          stroke={colors[1]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.8597 9.3368C19.9505 8.92007 20 8.47347 20 8C20 4.93823 17.931 3 16 3C14.069 3 12 4.93823 12 8C12 8.47347 12.0495 8.92007 12.1403 9.33679C11.4501 9.54249 10.8222 9.80164 10.2757 10.1039C10.0966 9.43984 10 8.73308 10 8C10 4.13401 12.6863 1 16 1C19.3137 1 22 4.13401 22 8C22 8.73308 21.9034 9.43985 21.7243 10.1039C21.1778 9.80164 20.5499 9.54249 19.8597 9.3368Z"
          fill={colors[1]}
        />
      </svg>
    );
  return orderIcon;
};
export default OrderIcon;
