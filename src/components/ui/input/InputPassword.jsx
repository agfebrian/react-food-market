import React, { useState } from "react";
import { Input } from "..";

export const InputPassword = ({ label, placeholder, className, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const typeInput = showPassword ? "type" : "password";

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="relative flex flex-col justify-center">
      <Input
        type={typeInput}
        label={label}
        placeholder={placeholder}
        className={className}
        {...rest}
      />
      <span
        onClick={toggleShowPassword}
        className="absolute bottom-2 right-2 z-10 max-h-fit max-w-fit cursor-pointer rounded-lg bg-neutral-400/50 px-2 py-1 text-xs font-medium shadow transition active:translate-y-[1px]"
      >
        {showPassword ? "Hide" : "Show"}
      </span>
    </div>
  );
};
