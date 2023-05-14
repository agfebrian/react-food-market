import React from "react";
import clsx from "clsx";
import { setAlert } from "../../../slices/alertSlice";
import { useSelector, useDispatch } from "react-redux";
import Close from "../../../assets/icons/close-circle.svg";

export const Alert = () => {
  const dispatch = useDispatch();
  const { show, message, type } = useSelector((state) => state.alert);
  const status = type === "success" ? "bg-green-500" : "bg-error";

  return (
    show && (
      <div
        className={clsx(
          status,
          "absolute left-0 top-0 z-50 flex w-full items-start justify-between p-4"
        )}
      >
        <p className="flex-1 text-sm font-normal text-white">{message}</p>
        <img
          src={Close}
          alt="icon"
          className="cursor-pointer"
          onClick={() =>
            dispatch(setAlert({ show: false, message: "", type: "" }))
          }
        />
      </div>
    )
  );
};
