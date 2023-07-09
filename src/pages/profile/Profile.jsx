import React, { useState } from "react";
import { Page, Container } from "~/components/layout";
import {
  Avatar,
  BorderAvatar,
  Tab,
  ItemTab,
  NavigationBottom,
  Button,
} from "~/components/ui";
import { Menu, Item } from "./components";
import { useFetch } from "~/hooks";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "~/slices/profileSlice";
import { setAlert } from "~/slices/alertSlice";
import { fetchProfile } from "~/services/auth";
import { setToken } from "~/utils/storage";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "~/hooks";

export const Profile = () => {
  const tabs = [
    { value: "account", text: "Account" },
    { value: "app", text: "Food Market" },
  ];
  const [selectedTab, setSelectedTab] = useState(0);
  const changeTab = (index) => {
    setSelectedTab(index);
  };

  const menus = [
    {
      data: [
        { title: "Edit Profile", link: "#" },
        { title: "Home Address", link: "#" },
        { title: "Security", link: "#" },
        { title: "Payments", link: "#" },
      ],
    },
    {
      data: [
        { title: "Rate App", link: "#" },
        { title: "Help Center", link: "#" },
        { title: "Privacy & Policy", link: "#" },
        { title: "Terms & Conditions", link: "#" },
      ],
    },
  ];

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);

  const fetchUserProfile = async () => {
    setLoading(true);
    try {
      const {
        data: { status, data, message },
      } = await fetchProfile();
      if (status) {
        dispatch(
          setProfile({
            id: data.id,
            name: data.name,
            email: data.email,
            address: data.address,
            avatar: data.avatar,
            phoneNumber: data.phone_number,
            houseNumber: data.house_number,
          }),
        );
      }
    } catch (error) {
      dispatch(
        setAlert({
          show: true,
          message: "Terjadi kesalahan server",
          type: "error",
        }),
      );
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  const [loadingSignout, setLoadingSignout] = useState(false);

  const signOut = async () => {
    setLoadingSignout(true);
    await new Promise((r) => setTimeout(r, 1000));
    setToken("");
    navigate("/login");
    dispatch(
      setProfile({
        id: "",
        name: "",
        email: "",
        address: "",
        avatar: "",
        phoneNumber: "",
        houseNumber: "",
      }),
    );
    dispatch(
      setAlert({
        show: true,
        message: "Success sign out",
        type: "success",
      }),
    );
    setLoadingSignout(false);
  };

  const [token, _setToken] = useLocalStorage("token", "");
  useFetch(() => {
    if (!profile.id && token) {
      fetchUserProfile();
    }
  });

  return (
    <Page className="min-h-screen">
      <Container>
        <section className="flex flex-col items-center bg-white py-[26px]">
          <BorderAvatar size="lg" rounded="circle">
            <Avatar
              size="lg"
              rounded="circle"
              photo={profile.avatar}
              uploadPhoto={true}
            />
          </BorderAvatar>
          {!loading ? (
            <h2 className="mt-4 text-lg font-medium text-black">
              {profile.name}
            </h2>
          ) : (
            <div className="mt-4 h-3 w-32 animate-pulse rounded-lg bg-brand-grey-1"></div>
          )}
          {!loading ? (
            <p className="mt-[4px] text-sm font-normal text-brand-secondary">
              {profile.email}
            </p>
          ) : (
            <div className="mt-4 h-3 w-24 animate-pulse rounded-lg bg-brand-grey-1"></div>
          )}
        </section>
        <section className="mt-[26px] bg-white">
          <Tab
            items={tabs.map((item) => item.text)}
            activeTab={selectedTab}
            handleChange={changeTab}
          >
            <ItemTab indexTab={0} activeTab={selectedTab}>
              <Menu>
                {menus[0].data.map((menu, i) => (
                  <Item key={i} title={menu.title} link={menu.link} />
                ))}
                <Button
                  className="w-full"
                  disabled={loadingSignout}
                  loading={loadingSignout}
                  handleClick={signOut}
                >
                  Sign Out
                </Button>
              </Menu>
            </ItemTab>
            <ItemTab indexTab={1} activeTab={selectedTab}>
              <Menu>
                {menus[1].data.map((menu, i) => (
                  <Item key={i} title={menu.title} link={menu.link} />
                ))}
              </Menu>
            </ItemTab>
          </Tab>
        </section>
      </Container>
      <NavigationBottom />
    </Page>
  );
};
