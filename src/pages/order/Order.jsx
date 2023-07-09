import React, { useState } from "react";
import { Page, Container } from "~/components/layout";
import {
  Navigation,
  Tab,
  ItemTab,
  NavigationBottom,
  ProfileSkeleton,
} from "~/components/ui";
import { ProductInProgress, ProductPastOrder, EmptyOrder } from "./components";
import { setAlert } from "~/slices/alertSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "~/hooks";
import { useLocalStorage } from "~/hooks";
import { setProfile } from "~/slices/profileSlice";
import { fetchOrders } from "~/services/order";
import { fetchProfile } from "~/services/auth";

export const Order = () => {
  const [orders, setOrders] = useState([]);
  const [isLoadedInProgress, setIsLoadedInProgress] = useState(true);
  const [isLoadedPastOrder, setIsLoadedPastOrder] = useState(true);
  const [_isError, setIsError] = useState(false);
  const [token, _setToken] = useLocalStorage("token");
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const fetchUserProfile = async () => {
    const {
      data: { data },
    } = await fetchProfile();
    dispatch(
      setProfile({
        id: data.id,
        name: data.name,
        avatar: data.avatar,
        email: data.email,
        city: data.city,
        address: data.address,
        phoneNumber: data.phone_number,
        houseNumber: data.house_number,
      }),
    );
    return data;
  };

  const fetchMyOrders = async (type) => {
    setIsLoadedInProgress(true);
    setIsLoadedPastOrder(true);
    try {
      let resUser;
      if (!profile.id) {
        resUser = await fetchUserProfile();
      }

      const profileId = profile.id || resUser.id;
      const {
        data: { data },
      } = await fetchOrders(profileId, type);
      setOrders(data);
    } catch (error) {
      setIsError(true);
      dispatch(
        setAlert({
          show: true,
          message: error.message,
          type: "error",
        }),
      );
    } finally {
      setIsLoadedInProgress(false);
      setIsLoadedPastOrder(false);
    }
  };

  useFetch(() => {
    if (token) {
      fetchMyOrders(tabs[0].value);
    }
  });

  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    { value: "1,2,3", text: "In Progress" },
    { value: "4,5", text: "Past Orders" },
  ];
  const changeTab = (index) => {
    setSelectedTab(index);
    fetchMyOrders(tabs[index].value);
  };

  return (
    <Page>
      <Container>
        <Navigation title="Your Orders" description="Wait for the best meal" />
        <Tab
          className="mb-[60px] mt-6 min-h-[300px]"
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
            ) : orders.length ? (
              <ProductInProgress products={orders} />
            ) : (
              <EmptyOrder />
            )}
          </ItemTab>
          <ItemTab
            activeTab={selectedTab}
            indexTab={1}
            handleClick={() => setSelectedTab(1)}
          >
            {isLoadedPastOrder ? (
              [1, 2, 3, 4].map((item) => <ProfileSkeleton key={item} />)
            ) : orders.length ? (
              <ProductPastOrder products={orders} />
            ) : (
              <EmptyOrder />
            )}
          </ItemTab>
        </Tab>
        <NavigationBottom />
      </Container>
    </Page>
  );
};
