import React from "react";
import IconShop from "../../assets/icons/shop.svg";

export const SplashScreen = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand">
      <img src={IconShop} alt="icon-shop" />
      <p className="mt-8 text-3xl font-medium text-black">FoodMarket</p>
    </div>
  );
};
