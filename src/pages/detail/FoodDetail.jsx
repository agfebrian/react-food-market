import React, { useState, useRef, useEffect } from "react";
import { Page, Container } from "~/components/layout";
import {
  NavigateBack,
  Hero,
  Title,
  Counter,
  Description,
  Ingredient,
  Summary,
} from "./components";
import { fetchFood } from "~/services/home";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPayment } from "~/slices/paymentSlice";
import { useNavigate } from "react-router-dom";

export const FoodDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkout = () => {
    dispatch(
      setPayment({
        food: food,
        quantity: quantity,
      })
    );
    navigate("/payment");
  };

  const params = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(false);
  const getFood = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    try {
      const {
        data: { status, data, message },
      } = await fetchFood(params.id);
      if (status) {
        setFood(data);
        setTotal(data.price);
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const hasFetchedData = useRef(false);
  useEffect(() => {
    if (!hasFetchedData.current) {
      getFood();
      hasFetchedData.current = true;
    }
  });

  return (
    <Page>
      <NavigateBack />
      <Container>
        <div className="h-screen overflow-y-hidden">
          <Hero image={food?.image} />
          <div className="relative z-10 -mt-5 h-screen rounded-t-3xl bg-white px-4 py-7">
            <div className="flex justify-between">
              <Title
                name={food?.name}
                rating={food?.rating}
                loading={loading}
              />
              <Counter count={quantity} handleChange={setQuantity} />
            </div>
            <Description text={food?.description} loading={loading} />
            <Ingredient
              text={food?.ingredients.map((item) => item.name).join(", ")}
              loading={loading}
            />
          </div>
        </div>
      </Container>
      <Summary
        total={total * quantity}
        loading={loading}
        handleClick={checkout}
      />
    </Page>
  );
};
