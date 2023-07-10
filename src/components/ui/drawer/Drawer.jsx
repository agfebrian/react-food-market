import React, { useState } from "react";
import { Container } from "~/components/layout";
import { Button, BorderAvatar, Avatar } from "..";
import { Menu, Item } from "~/pages/profile/components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "~/utils/storage";
import { setProfile } from "~/slices/profileSlice";
import { setAlert } from "~/slices/alertSlice";

import PlaceholderUser from "~/assets/images/placeholder-user.jpg";

export const Drawer = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile);
  const [loadingSignOut, setLoadingSignOut] = useState(false);

  const signOut = async () => {
    setLoadingSignOut(true);
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
    setLoadingSignOut(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Container className="relative">
      <div
        className={`translate fixed top-0 z-20 flex h-full w-full max-w-xl flex-col bg-white p-6 transition delay-150 duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        ${isOpen ? "opacity-100" : "opacity-0"}`}
      >
        <div>
          <div className="flex justify-end">
            <Button
              className="py-2"
              color="secondary"
              handleClick={() => handleClose(false)}
            >
              &#10006;
            </Button>
          </div>
          <div className="flex flex-col items-center border-b-2 border-brand-grey-1 py-[26px]">
            <BorderAvatar size="lg" rounded="circle">
              <Avatar
                size="lg"
                rounded="circle"
                photo={profile.avatar || PlaceholderUser}
                uploadPhoto={true}
              />
            </BorderAvatar>
            <h2 className="mt-4 text-lg font-medium text-black">
              {profile.name}
            </h2>
            <p className="mt-[4px] text-sm font-normal text-brand-secondary">
              {profile.email}
            </p>
          </div>
          <div className="mt-3">
            <Menu>
              <Item link="/account" title="Account" />
              <Item link="/orders" title="My Orders" />
            </Menu>
          </div>
        </div>
        {profile.name ? (
          <Button
            className="mt-auto w-full"
            disabled={loadingSignOut}
            loading={loadingSignOut}
            handleClick={signOut}
          >
            Sign Out
          </Button>
        ) : (
          <Button
            className="mt-auto w-full"
            handleClick={() => navigate("/login")}
          >
            Sign In
          </Button>
        )}
      </div>
    </Container>
  );
};
