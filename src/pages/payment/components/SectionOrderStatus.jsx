import React from "react";
import { Button } from "~/components/ui";
import { useColorStatusOrder } from "~/hooks";
import { NavLink } from "react-router-dom";

export const SectionOrderStatus = ({ food, isLoading }) => {
  const pay = () => {
    window.location.href =
      "https://simulator.sandbox.midtrans.com/bca/va/index";
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
          <Button className="w-full" color="secondary">
            Cancel My Order
          </Button>
          <Button className="w-full" handleClick={pay}>
            Pay
          </Button>
        </div>
      )}
    </div>
  );
};
