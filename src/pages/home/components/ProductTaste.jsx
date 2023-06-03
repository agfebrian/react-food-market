import React from "react";
import { CardProductFlex } from "../../../components/ui";
import { formatCurrency } from "../../../utils/numbers";

export const ProductTaste = ({ products }) => {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product, i) => (
        <CardProductFlex
          key={i}
          image={product.image}
          title={product.name}
          subtitle={`IDR ${formatCurrency(product.price)}`}
        />
      ))}
    </div>
  );
};
