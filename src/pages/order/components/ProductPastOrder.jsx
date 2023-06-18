import React from "react";
import { NavLink } from "react-router-dom";
import { CardProductFlex } from "~/components/ui";
import { formatCurrency } from "~/utils/numbers";
import { dateToEpoch, epochToDate } from "~/utils/date";
import format from "date-fns/format";
import clsx from "clsx";

export const ProductPastOrder = ({ products }) => {
  const textColor = (status) => {
    let color = "text-black";
    switch (status) {
      case "CANCELED":
        color = "text-red-500";
        break;
      case "DELIVERED":
        color = "text-green-500";
        break;
      default:
        color = "text-black";
        break;
    }
    return color;
  };

  return (
    <div className="flex flex-col gap-4">
      {products.map((product, i) => (
        <NavLink key={i} to={`/order/${product.id}`}>
          <CardProductFlex
            image={product.food.image}
            title={product.food.name}
            subtitle={`${product.quantity} items - IDR ${formatCurrency(
              product.total
            )}`}
          >
            <p className="text-xs text-brand-secondary">
              {format(
                epochToDate(dateToEpoch(product.updated_at)),
                "LLL d, hh:mm"
              )}
            </p>
            <p
              className={clsx(
                textColor(product.status),
                "text-right text-xs capitalize"
              )}
            >
              {product.status}
            </p>
          </CardProductFlex>
        </NavLink>
      ))}
    </div>
  );
};
