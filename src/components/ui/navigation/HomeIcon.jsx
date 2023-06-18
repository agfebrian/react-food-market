import React from "react";
import { useCurrentLocation, useColorsNavBottom } from "~/hooks";

const HomeIcon = () => {
  const currentLocation = useCurrentLocation();
  const colors = useColorsNavBottom();
  const homeIcon =
    currentLocation == "/" ? (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.22346 12.3202C2.44164 13.0741 2 14.1135 2 15.1996V28C2 30.2091 3.79086 32 6 32H26C28.2091 32 30 30.2091 30 28V15.1996C30 14.1135 29.5584 13.0741 28.7765 12.3202L16 0L3.22346 12.3202ZM16.976 20.168H20.774V18.674H16.976V14.822H15.374V18.674H11.594V20.168H15.374V24.002H16.976V20.168Z"
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
      >
        <g clipPath="url(#clip0_17_387)">
          <path
            d="M3 15.1996C3 14.385 3.33123 13.6055 3.91759 13.0401L16 1.38919L28.0824 13.0401C28.6688 13.6055 29 14.385 29 15.1996V28C29 29.6569 27.6569 31 26 31H6C4.34315 31 3 29.6569 3 28V15.1996Z"
            stroke={colors[1]}
            strokeWidth="2"
          />
          <path
            d="M20.774 20.168H16.976V24.002H15.374V20.168H11.594V18.674H15.374V14.822H16.976V18.674H20.774V20.168Z"
            fill={colors[1]}
          />
        </g>
        <defs>
          <clipPath id="clip0_17_387">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  return homeIcon;
};
export default HomeIcon;
