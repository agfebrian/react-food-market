import React from "react";
import clsx from "clsx";

export const Footer = ({ className, children }) => {
  return (
    <footer className={clsx(className, "fixed bottom-0 w-full")}>
      {children}
    </footer>
  );
};
