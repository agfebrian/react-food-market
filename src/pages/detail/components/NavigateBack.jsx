import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "~/components/layout";

export const NavigateBack = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute left-0 top-0 z-10 w-full">
      <Container>
        <button
          onClick={() => navigate("/")}
          className="ml-4 mt-6 flex h-9 w-9 items-center justify-center rounded-md border border-white outline-none"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow_back_ios_24px">
              <path
                id="icon/navigation/arrow_back_ios_24px"
                d="M17.835 3.87001L16.055 2.10001L6.16501 12L16.065 21.9L17.835 20.13L9.70501 12L17.835 3.87001Z"
                fill="white"
              />
            </g>
          </svg>
        </button>
      </Container>
    </div>
  );
};
