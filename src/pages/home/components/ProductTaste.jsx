import React from "react";
import { CardProductFlex } from "../../../components/ui";

export const ProductTaste = ({ products }) => {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product, i) => (
        <CardProductFlex
          key={i}
          image={product.image}
          title={product.name}
          subtitle={product.price}
        />
      ))}
    </div>
  );
};
