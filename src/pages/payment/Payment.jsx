import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page, Container, Footer } from "~/components/layout";
import { Navigation, CardProductFlex, Button } from "~/components/ui";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "~/utils/numbers";
import { setAlert } from "~/slices/alertSlice";
import http from "~/app/http";

export const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { food, quantity } = useSelector((state) => state.payment);
  const profile = useSelector((state) => state.profile);
  const [isLoading, setIsLoading] = useState(false);

  const total = food.price * quantity;
  const driver = 50000;
  const percen = 10 / 100;
  const tax = percen * total;
  const grossTotal = total + tax + driver;

  const checkout = async () => {
    const payload = {
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      total: grossTotal,
      quantity: quantity,
      food_id: food.id,
      user_id: profile.id,
    };

    setIsLoading(true);
    try {
      const {
        data: { status, data, message },
      } = await http.post("/order", payload);

      if (status) {
        window.location.href = data.redirect_url;
      } else {
        dispatch(
          setAlert({
            status: true,
            message: message,
            type: "error",
          })
        );
      }
    } catch (error) {
      dispatch(
        setAlert({
          status: true,
          message: error.message,
          type: "error",
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Page>
      <Container>
        <Navigation
          title="Payment"
          description="You deserve better meal"
          isBack={true}
          handleBack={() => navigate(`/detail/${food.id}`)}
        />
        <div className="mt-6 bg-white px-6 py-4">
          <h2 className="mb-3 text-sm">Item Ordered</h2>
          <CardProductFlex
            title={food.name}
            subtitle={`IDR ${formatCurrency(food.price)}`}
            image={food.image}
          >
            <span className="text-brand-secondary">{quantity} items</span>
          </CardProductFlex>
          <h2 className="mt-3 text-sm">Details Transaction</h2>
          <div className="mt-2 flex justify-between">
            <p className="text-sm text-brand-secondary">{food.name}</p>
            <p className="text-sm text-black">IDR {formatCurrency(total)}</p>
          </div>
          <div className="mt-2 flex justify-between">
            <p className="text-sm text-brand-secondary">Driver</p>
            <p className="text-sm text-black">IDR {formatCurrency(driver)}</p>
          </div>
          <div className="mt-2 flex justify-between">
            <p className="text-sm text-brand-secondary">Tax 10%</p>
            <p className="text-sm text-black">IDR {formatCurrency(tax)}</p>
          </div>
          <div className="mt-2 flex justify-between">
            <p className="text-sm text-brand-secondary">Total Price</p>
            <p className="text-sm text-blue-400">
              IDR {formatCurrency(grossTotal)}
            </p>
          </div>
        </div>
        <div className="mt-6 bg-white px-6 py-4">
          <h2 className="mb-3 text-sm">Deliver To</h2>
          <div className="mt-2 flex justify-between">
            <p className="text-sm text-brand-secondary">Name</p>
            <p className="text-sm text-black">{profile.name}</p>
          </div>
          <div className="mt-2 flex justify-between">
            <p className="text-sm text-brand-secondary">Phone No</p>
            <p className="text-sm text-black">{profile.phoneNumber}</p>
          </div>
          <div className="mt-2 flex justify-between">
            <p className="text-sm text-brand-secondary">Address</p>
            <p className="text-sm text-black">{profile.address}</p>
          </div>
          <div className="mt-2 flex justify-between">
            <p className="text-sm text-brand-secondary">House No</p>
            <p className="text-sm text-blue-400">{profile.houseNumber}</p>
          </div>
          <div className="mt-2 flex justify-between">
            <p className="text-sm text-brand-secondary">City</p>
            <p className="text-sm text-blue-400">{profile.city}</p>
          </div>
        </div>
      </Container>
      <Footer>
        <Container>
          <div className="w-full px-6 pb-3 pt-2">
            <Button
              className="w-full"
              loading={isLoading}
              disabled={isLoading}
              handleClick={checkout}
            >
              Checkout Now
            </Button>
          </div>
        </Container>
      </Footer>
    </Page>
  );
};
