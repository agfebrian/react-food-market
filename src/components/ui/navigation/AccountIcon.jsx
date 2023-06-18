import React from "react";
import { useCurrentLocation, useColorsNavBottom } from "~/hooks";

const AccountIcon = () => {
  const currentLocation = useCurrentLocation();
  const colors = useColorsNavBottom();
  const accountIcon =
    currentLocation == "/account" ? (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31 26.4103C31 32.2737 24.2843 31.998 16 31.998C7.71573 31.998 1 32.2737 1 26.4103C1 20.547 7.71573 15 16 15C24.2843 15 31 20.547 31 26.4103Z"
          fill={colors[0]}
        />
        <circle cx="16" cy="7" r="7" fill={colors[0]} />
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
          d="M30 25.9378C30 27.3427 29.6341 28.2636 29.0691 28.9083C28.4889 29.5705 27.6 30.0543 26.3502 30.3859C24.006 31.0077 20.8 31.0036 17.0281 30.9987C16.6899 30.9982 16.3471 30.9978 16 30.9978C15.6529 30.9978 15.3101 30.9982 14.9719 30.9987C11.2 31.0036 7.99396 31.0077 5.64982 30.3859C4.39999 30.0543 3.51111 29.5705 2.93087 28.9083C2.36593 28.2636 2 27.3427 2 25.9378C2 23.1465 3.46504 20.6912 5.97477 18.8979C8.49357 17.0982 12.0319 16 16 16C19.9681 16 23.5064 17.0982 26.0252 18.8979C28.535 20.6912 30 23.1465 30 25.9378Z"
          stroke={colors[1]}
          strokeWidth="2"
        />
        <circle cx="16" cy="7" r="6" stroke={colors[1]} strokeWidth="2" />
      </svg>
    );
  return accountIcon;
};
export default AccountIcon;
