import React, { useState } from "react";
import { Button } from "~/components/ui";
import { useColorStatusOrder } from "~/hooks";
import { NavLink } from "react-router-dom";
import { cancelOrders } from "~/services/order";
import { useDispatch } from "react-redux";
import { setAlert } from "~/slices/alertSlice";

export const SectionOrderStatus = ({
  food,
  isLoading,
  handleAfterCanceled,
}) => {
  const [isLoadingCancel, setIsLoadingCancel] = useState(false);
  const dispatch = useDispatch();

  const pay = () => {
    window.location.href =
      "https://simulator.sandbox.midtrans.com/bca/va/index";
  };

  const cancelOrder = async () => {
    setIsLoadingCancel(true);
    try {
      const {
        data: { status, message },
      } = await cancelOrders(food.id);

      if (status) {
        dispatch(
          setAlert({
            show: true,
            message,
            type: "success",
          }),
        );
        handleAfterCanceled();
      } else {
        dispatch(
          setAlert({
            show: true,
            message,
            type: "error",
          }),
        );
      }
    } catch (error) {
      dispatch(
        setAlert({
          show: true,
          message: error.message,
          type: "error",
        }),
      );
    } finally {
      setIsLoadingCancel(false);
    }
  };

  return (
    <div className="mt-6 bg-white px-6 py-4">
      <h2 className="mb-3 text-sm">Order Status</h2>
      <div className="flex justify-between">
        {food.status === "PENDING" ? (
          <NavLink to={food.link} className="text-blue-400">
            #{food.id}
          </NavLink>
        ) : (
          <p className="text-sm text-brand-secondary">#{food.id}</p>
        )}
        <p className={`text-sm ${useColorStatusOrder(food.status)}`}>
          {food.status}
        </p>
      </div>
      {!isLoading && food.status === "PENDING" && (
        <div className="mt-3 flex justify-between gap-3">
          <Button
            className="w-full"
            color="secondary"
            handleClick={cancelOrder}
            loading={isLoadingCancel}
            disabled={isLoadingCancel}
          >
            Cancel
          </Button>
          <Button className="w-full" handleClick={pay}>
            Pay
          </Button>
        </div>
      )}
    </div>
  );
};
