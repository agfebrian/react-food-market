import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page, Container, Footer } from "~/components/layout";
import { Navigation, Button } from "~/components/ui";
import { SectionOrder, SectionDeliver } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "~/slices/alertSlice";
import { useCalculate } from "~/hooks";
import { postOrders } from "~/services/order";

export const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { food, quantity } = useSelector((state) => state.payment);
  const profile = useSelector((state) => state.profile);
  const [isLoading, setIsLoading] = useState(false);

  const total = food.price * quantity;
  const { driver, tax, grossTotal } = useCalculate(total);

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
      } = await postOrders(payload);

      if (status) {
        window.location.href = data.redirect_url;
      } else {
        dispatch(
          setAlert({
            status: true,
            message: message,
            type: "error",
          }),
        );
      }
    } catch (error) {
      dispatch(
        setAlert({
          status: true,
          message: error.message,
          type: "error",
        }),
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
        <SectionOrder
          food={food}
          summary={{ quantity, total, driver, tax, grossTotal }}
        />
        <SectionDeliver profile={profile} />
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
