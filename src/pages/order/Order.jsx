import React, { useState, useRef, useEffect } from "react";
import { Page, Container, EmptyOrder } from "../../components/layout";
import {
  Navigation,
  Tab,
  ItemTab,
  NavigationBottom,
  ProfileSkeleton,
  CardSkeleton,
} from "../../components/ui";
import http from "../../app/http";
import { ProductInProgress, ProductPastOrder } from "./components";
import { setAlert } from "../../slices/alertSlice";
import { useDispatch } from "react-redux";

export const Order = () => {
  const [orders, setOrders] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isError, setIsError] = useState(false);
  const hasFetchedData = useRef(false);
  const dispatch = useDispatch();

  const fetchOrders = async () => {
    try {
      const {
        data: { status, data },
      } = await http.get(`/order?userId=&status=1,2,3`);
      setOrders(data);
    } catch (error) {
      setIsError(true);
      dispatch(
        setAlert({
          show: true,
          message: error.message,
          type: "error",
        })
      );
    } finally {
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchOrders();
      hasFetchedData.current = true;
    }
  }, []);

  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["In Progress", "Past Orders"];
  const changeTab = (index) => {
    setSelectedTab(index);
    const category = findCurrentActiveTab(index);
  };

  const findCurrentActiveTab = (index) => {
    let result;
    switch (index) {
      case 0:
        result = "1,2,3";
        break;
      case 1:
        result = "4,4";
        break;
    }
    return result;
  };

  return (
    <Page>
      <Container>
        {!isLoaded && !isError && !orders.length ? (
          <EmptyOrder />
        ) : (
          <>
            <Navigation
              title="Your Orders"
              description="Wait for the best meal"
            />
            <Tab
              className="mb-[60px] mt-6 min-h-screen"
              items={tabs}
              activeTab={selectedTab}
              handleChange={changeTab}
            >
              <ItemTab
                activeTab={selectedTab}
                indexTab={0}
                handleClick={() => setSelectedTab(0)}
              >
                {isLoaded ? (
                  [1, 2, 3, 4].map((item) => <ProfileSkeleton key={item} />)
                ) : (
                  <ProductInProgress products={orders} />
                )}
              </ItemTab>
              <ItemTab
                activeTab={selectedTab}
                indexTab={1}
                handleClick={() => setSelectedTab(1)}
              >
                {isLoaded ? (
                  [1, 2, 3, 4].map((item) => <CardSkeleton key={item} />)
                ) : (
                  <ProductPastOrder products={orders} />
                )}
              </ItemTab>
            </Tab>
            <NavigationBottom />
          </>
        )}
      </Container>
    </Page>
  );
};
