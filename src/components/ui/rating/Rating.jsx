import React from "react";

export const Rating = ({ rate }) => {
  const colors = ["#FFC700", "#ECECEC"];
  return (
    <>
      <svg
        width="88"
        height="16"
        viewBox="0 0 88 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
          fill={rate >= 1 ? colors[0] : colors[1]}
        />
        <path
          d="M26 0L27.7961 5.52786H33.6085L28.9062 8.94427L30.7023 14.4721L26 11.0557L21.2977 14.4721L23.0938 8.94427L18.3915 5.52786H24.2039L26 0Z"
          fill={rate >= 2 ? colors[0] : colors[1]}
        />
        <path
          d="M44 0L45.7961 5.52786H51.6085L46.9062 8.94427L48.7023 14.4721L44 11.0557L39.2977 14.4721L41.0938 8.94427L36.3915 5.52786H42.2039L44 0Z"
          fill={rate >= 3 ? colors[0] : colors[1]}
        />
        <path
          d="M62 0L63.7961 5.52786H69.6085L64.9062 8.94427L66.7023 14.4721L62 11.0557L57.2977 14.4721L59.0938 8.94427L54.3915 5.52786H60.2039L62 0Z"
          fill={rate >= 4 ? colors[0] : colors[1]}
        />
        <path
          d="M80 0L81.7961 5.52786H87.6085L82.9062 8.94427L84.7023 14.4721L80 11.0557L75.2977 14.4721L77.0938 8.94427L72.3915 5.52786H78.2039L80 0Z"
          fill={rate >= 5 ? colors[0] : colors[1]}
        />
      </svg>
    </>
  );
};
