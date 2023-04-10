import React from "react";
import { CardProductFlex } from "../../../components/ui";
// import ImageProduct1 from "../../../assets/images/products/product-small-1.png";
import ImageProduct2 from "../../../assets/images/products/product-small-2.png";
// import ImageProduct3 from "../../../assets/images/products/product-small-3.png";

export const ProductPopular = () => {
  const products = [
    // { name: "Soup Bumil", price: "IDR 289.000", image: ImageProduct1 },
    { name: "Chicken", price: "IDR 300.000", image: ImageProduct2 },
    // { name: "Shrimp", price: "IDR 109.000", image: ImageProduct3 },
  ];

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
