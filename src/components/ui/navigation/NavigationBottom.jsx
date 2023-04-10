import React from "react";

export const NavigationBottom = () => {
  return (
    <div className="fixed bottom-0 left-0 flex h-[60px] w-full items-center justify-center bg-white">
      <div className="flex w-full max-w-xl justify-evenly">
        {/* Svg home */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.22346 12.3202C2.44164 13.0741 2 14.1135 2 15.1996V28C2 30.2091 3.79086 32 6 32H26C28.2091 32 30 30.2091 30 28V15.1996C30 14.1135 29.5584 13.0741 28.7765 12.3202L16 0L3.22346 12.3202ZM16.976 20.168H20.774V18.674H16.976V14.822H15.374V18.674H11.594V20.168H15.374V24.002H16.976V20.168Z"
            fill="#FFC700"
          />
        </svg>
        {/* Svg home */}
        {/* Svg order */}
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
            stroke="#E2E2E2"
            stroke-width="2"
          />
          <line
            x1="12"
            y1="17"
            x2="20"
            y2="17"
            stroke="#E2E2E2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="12"
            y1="21"
            x2="20"
            y2="21"
            stroke="#E2E2E2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.8597 9.3368C19.9505 8.92007 20 8.47347 20 8C20 4.93823 17.931 3 16 3C14.069 3 12 4.93823 12 8C12 8.47347 12.0495 8.92007 12.1403 9.33679C11.4501 9.54249 10.8222 9.80164 10.2757 10.1039C10.0966 9.43984 10 8.73308 10 8C10 4.13401 12.6863 1 16 1C19.3137 1 22 4.13401 22 8C22 8.73308 21.9034 9.43985 21.7243 10.1039C21.1778 9.80164 20.5499 9.54249 19.8597 9.3368Z"
            fill="#E2E2E2"
          />
        </svg>
        {/* Svg order */}
        {/* Svg user */}
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
            stroke="#E2E2E2"
            stroke-width="2"
          />
          <circle cx="16" cy="7" r="6" stroke="#E2E2E2" stroke-width="2" />
        </svg>
        {/* Svg user */}
      </div>
    </div>
  );
};
