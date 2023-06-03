import React, { useState } from "react";
import { Page, Container } from "../../components/layout";
import {
  Hero,
  Title,
  Counter,
  Description,
  Ingredient,
  Summary,
} from "./components";
import Image from "../../assets/images/products/product-1.png";

export const FoodDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const total = 100000;

  const checkout = () => {
    console.log("total ", total, quantity);
  };

  return (
    <Page>
      <Container>
        <div className="h-screen overflow-y-hidden">
          <Hero image={Image} />
          <div className="relative z-10 -mt-5 h-screen rounded-t-2xl bg-white px-4 py-7">
            <div className="flex justify-between">
              <Title name="Cherry Healthy" rating={4} />
              <Counter count={quantity} handleChange={setQuantity} />
            </div>
            <Description text="Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan teratur." />
            <Ingredient text="Seledri, telur, blueberry, madu." />
          </div>
        </div>
      </Container>
      <Summary total={total * quantity} handleClick={checkout} />
    </Page>
  );
};
