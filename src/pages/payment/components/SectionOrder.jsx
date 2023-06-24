import React from "react";
import { CardProductFlex } from "~/components/ui";
import { formatCurrency } from "~/utils/numbers";

export const SectionOrder = ({ food, summary }) => {
  return (
    <div className="mt-6 bg-white px-6 py-4">
      <h2 className="mb-3 text-sm">Item Ordered</h2>
      <CardProductFlex
        title={food.name}
        subtitle={`IDR ${formatCurrency(food.price)}`}
        image={food.image}
      >
        <span className="text-brand-secondary">{summary.quantity} items</span>
      </CardProductFlex>
      <h2 className="mt-3 text-sm">Details Transaction</h2>
      <div className="mt-2 flex justify-between">
        <p className="text-sm text-brand-secondary">{food.name}</p>
        <p className="text-sm text-black">
          IDR {formatCurrency(summary.total)}
        </p>
      </div>
      <div className="mt-2 flex justify-between">
        <p className="text-sm text-brand-secondary">Driver</p>
        <p className="text-sm text-black">
          IDR {formatCurrency(summary.driver)}
        </p>
      </div>
      <div className="mt-2 flex justify-between">
        <p className="text-sm text-brand-secondary">Tax 10%</p>
        <p className="text-sm text-black">IDR {formatCurrency(summary.tax)}</p>
      </div>
      <div className="mt-2 flex justify-between">
        <p className="text-sm text-brand-secondary">Total Price</p>
        <p className="text-sm text-blue-400">
          IDR {formatCurrency(summary.grossTotal)}
        </p>
      </div>
    </div>
  );
};
