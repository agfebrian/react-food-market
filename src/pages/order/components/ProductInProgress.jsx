import React from "react";
import { NavLink } from "react-router-dom";
import { CardProductFlex } from "~/components/ui";
import { formatCurrency } from "~/utils/numbers";

export const ProductInProgress = ({ products }) => {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product, i) => (
        <NavLink key={i} to={`/order/${product.id}`}>
          <CardProductFlex
            image={product.food.image}
            title={product.food.name}
            subtitle={`${product.quantity} items - IDR ${formatCurrency(
              product.total,
            )}`}
          />
        </NavLink>
      ))}
    </div>
  );
};
