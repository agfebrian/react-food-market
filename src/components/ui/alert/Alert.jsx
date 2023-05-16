import React, { useEffect } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { setAlert } from "../../../slices/alertSlice";
import { useSelector, useDispatch } from "react-redux";

import Close from "../../../assets/icons/close-circle.svg";

export const Alert = () => {
  const dispatch = useDispatch();
  const { show, message, type } = useSelector((state) => state.alert);
  const status = type === "success" ? "bg-green-500" : "bg-error";

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAlert({ show: false, message: "", type: "" }));
    }, 3000);
  }, []);

  return (
    show && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
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
      </motion.div>
    )
  );
};
