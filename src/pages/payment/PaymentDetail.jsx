import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Page, Container } from "~/components/layout";
import { Navigation } from "~/components/ui";
import {
  SectionOrder,
  SectionDeliver,
  SkeletonDetail,
  SectionOrderStatus,
  SkeletonFlex,
} from "./components";
import { useDispatch } from "react-redux";
import { setAlert } from "~/slices/alertSlice";
import { useCalculate, useFetch } from "~/hooks";
import { fetchDetailOrders } from "~/services/order";
import { useNavigate } from "react-router-dom";

export const PaymentDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState(null);
  const [profile, setProfile] = useState(null);
  const [total, setTotal] = useState(0);
  const [driver, setDriver] = useState(0);
  const [tax, setTax] = useState(0);
  const [grossTotal, setGrossTotal] = useState(0);
  const navigate = useNavigate();

  const fetchDetailOrder = async () => {
    setIsLoading(true);
    try {
      const {
        data: { status, data, message },
      } = await fetchDetailOrders(params.id);
      if (status) {
        const { user } = data;
        setProfile({
          id: user.id,
          name: user.name,
          image: user.avatar,
          email: user.email,
          address: user.address,
          city: user.city,
          phoneNumber: user.phone_number,
          houseNumber: user.house_number,
        });

        const {
          food: { name, image, price },
        } = data;
        const { driver, tax, grossTotal: result } = useCalculate(price);
        setTotal(price);
        setDriver(driver);
        setTax(tax);
        setGrossTotal(result);
        setFood({
          id: data.id,
          name,
          image,
          quantity: data.quantity,
          status: data.status,
          total: data.total,
          price,
          link: data.link,
          date: data.updated_at,
        });
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

  useFetch(() => fetchDetailOrder());

  return (
    <Page>
      <Container>
        <Navigation
          title="Your Order"
          description="You deserve better meal"
          isBack={true}
          handleBack={() => navigate("/orders")}
        />
        {isLoading ? (
          <SkeletonDetail />
        ) : (
          <SectionOrder
            food={food}
            summary={{
              quantity: food.quantity,
              total,
              driver,
              tax,
              grossTotal,
            }}
          />
        )}
        {isLoading ? <SkeletonDetail /> : <SectionDeliver profile={profile} />}
        {isLoading ? (
          <div className="px-6">
            <SkeletonFlex />
          </div>
        ) : (
          <SectionOrderStatus food={food} isLoading={isLoading} />
        )}
      </Container>
    </Page>
  );
};
