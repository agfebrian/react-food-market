import React, { useState } from "react";
import clsx from "clsx";

export const Hero = ({ image }) => {
  const [loaded, setLoaded] = useState();
  const loadImage = () => {
    setLoaded(true);
  };

  return (
    <div
      className={clsx(`${!loaded ? "blur-sm" : ""}`, "relative h-64 w-full")}
    >
      <img src={image} alt="food" loading="lazy" onLoad={loadImage} />
    </div>
  );
};
