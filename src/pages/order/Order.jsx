import React, { useState, useRef, useEffect } from "react";
import { Page, Container } from "~/components/layout";
import {
  Navigation,
  Tab,
  ItemTab,
  NavigationBottom,
  ProfileSkeleton,
} from "~/components/ui";
import http from "~/app/http";
import { ProductInProgress, ProductPastOrder } from "./components";
import { setAlert } from "~/slices/alertSlice";
import { useDispatch } from "react-redux";

export const Order = () => {
  const [orders, setOrders] = useState([]);
  const [isLoadedInProgress, setIsLoadedInProgress] = useState(true);
  const [isLoadedPastOrder, setIsLoadedPastOrder] = useState(true);
  const [isError, setIsError] = useState(false);
  const hasFetchedData = useRef(false);
  const dispatch = useDispatch();

  const fetchOrders = async (type) => {
    setIsLoadedInProgress(true);
    setIsLoadedPastOrder(true);
    try {
      const {
        data: { data: profile },
      } = await http.get("/auth/profile");
      const {
        data: { status, data },
      } = await http.get(`/order?userId=${profile.id}&status=${type}`);
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
      setIsLoadedInProgress(false);
      setIsLoadedPastOrder(false);
    }
  };

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchOrders(tabs[0].value);
      hasFetchedData.current = true;
    }
  }, []);

  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    { value: "1,2,3", text: "In Progress" },
    { value: "4,5", text: "Past Orders" },
  ];
  const changeTab = (index) => {
    setSelectedTab(index);
    fetchOrders(tabs[index].value);
  };

  return (
    <Page>
      <Container>
        <Navigation title="Your Orders" description="Wait for the best meal" />
        <Tab
          className="mb-[60px] mt-6 min-h-screen"
          items={tabs.map((item) => item.text)}
          activeTab={selectedTab}
          handleChange={changeTab}
        >
          <ItemTab
            activeTab={selectedTab}
            indexTab={0}
            handleClick={() => setSelectedTab(0)}
          >
            {isLoadedInProgress ? (
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
            {isLoadedPastOrder ? (
              [1, 2, 3, 4].map((item) => <ProfileSkeleton key={item} />)
            ) : (
              <ProductPastOrder products={orders} />
            )}
          </ItemTab>
        </Tab>
        <NavigationBottom />
      </Container>
    </Page>
  );
};
