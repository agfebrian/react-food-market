import React from "react";
import { Alert } from "../ui";

export const Container = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-xl">
      <Alert />
      {children}
    </div>
  );
};
