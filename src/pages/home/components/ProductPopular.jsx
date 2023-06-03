import React from "react";
import { CardProductFlex, Rating } from "../../../components/ui";
import { formatCurrency } from "../../../utils/numbers";

export const ProductPopular = ({ products }) => {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product, i) => (
        <CardProductFlex
          key={i}
          image={product.image}
          title={product.name}
          subtitle={`IDR ${formatCurrency(product.price)}`}
        >
          <div className="flex items-center">
            <Rating rate={product.rating} />
            <span className="ml-1 text-sm font-normal text-brand-secondary">
              {product.rating}
            </span>
          </div>
        </CardProductFlex>
      ))}
    </div>
  );
};
