import React, { useState } from "react";
import { Page, Container } from "~/components/layout";
import {
  CardProduct,
  Tab,
  ItemTab,
  Navigation,
  NavigationBottom,
  CardSkeleton,
  ProfileSkeleton,
} from "~/components/ui";
import { ProductPopular, ProductRecommended, ProductTaste } from "./components";
import { fetchAllFoods } from "~/services/home";
import { fetchProfile } from "~/services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "~/slices/profileSlice";
import { setAlert } from "~/slices/alertSlice";
import { useFetch, useLocalStorage } from "~/hooks";

import ImageUser from "~/assets/images/pic-user.png";

export const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [loadingFoodSuggest, setLoadingFoodSuggest] = useState();
  const [loadingFoodCategory, setLoadingFoodCategory] = useState();
  const [suggestFoods, setSuggestFoods] = useState([]);
  const [categoryFoods, setCategoryFoods] = useState([]);
  const tabs = ["New Taste", "Popular", "Recommended"];

  const changeTab = (index) => {
    setSelectedTab(index);
    const category = findCurrentActiveTab(index);
    fetchFoodsByCategory(category);
  };

  const fetchSuggestFoods = async () => {
    setLoadingFoodSuggest(true);
    try {
      const {
        data: { status, data },
      } = await fetchAllFoods({
        category: "popular",
        perPage: 10,
      });
      if (status) {
        setSuggestFoods(data);
      }
    } catch (error) {
      console.log(data);
    } finally {
      setLoadingFoodSuggest(false);
    }
  };

  const fetchFoodsByCategory = async (category) => {
    setLoadingFoodCategory(true);
    try {
      const {
        data: { status, data },
      } = await fetchAllFoods({
        category,
        perPage: 10,
      });
      if (status) {
        setCategoryFoods(data);
      }
    } catch (error) {
      console.log(data);
    } finally {
      setLoadingFoodCategory(false);
    }
  };

  useFetch(() => {
    fetchSuggestFoods();
    fetchFoodsByCategory("new_food");
  });

  const findCurrentActiveTab = (index) => {
    let result;
    switch (index) {
      case 0:
        result = "new_food";
        break;
      case 1:
        result = "popular";
        break;
      case 2:
        result = "recomended";
        break;
    }
    return result;
  };

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const fetchUserProfile = async () => {
    try {
      const {
        data: { status, data },
      } = await fetchProfile();
      if (status) {
        dispatch(
          setProfile({
            id: data.id,
            name: data.name,
            email: data.email,
            city: data.city,
            address: data.address,
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
    }
  };

  const [token, _setToken] = useLocalStorage("token", "");
  useFetch(() => {
    if (!profile.name && token) {
      fetchUserProfile();
    }
  });

  return (
    <Page className="min-h-screen">
      <Container>
        <Navigation
          title="FoodMarket"
          description="Let's get some foods"
          avatar={ImageUser}
        />
        <div className="flex gap-6 overflow-x-auto px-6 pb-6 pt-6">
          {loadingFoodSuggest
            ? [1, 2, 3, 4].map((item) => <CardSkeleton key={item} />)
            : suggestFoods.map((item, index) => (
                <CardProduct
                  key={index}
                  id={item.id}
                  title={item.name}
                  image={item.image}
                  rating={item.rating}
                />
              ))}
        </div>
        <Tab
          className="pb-[60px]"
          items={tabs}
          activeTab={selectedTab}
          handleChange={changeTab}
        >
          <ItemTab indexTab={0} activeTab={selectedTab}>
            {loadingFoodCategory ? (
              [1, 2, 3, 4].map((item) => <ProfileSkeleton key={item} />)
            ) : (
              <ProductTaste products={categoryFoods} />
            )}
          </ItemTab>
          <ItemTab indexTab={1} activeTab={selectedTab}>
            {loadingFoodCategory ? (
              [1, 2, 3, 4].map((item) => <ProfileSkeleton key={item} />)
            ) : (
              <ProductPopular products={categoryFoods} />
            )}
          </ItemTab>
          <ItemTab indexTab={2} activeTab={selectedTab}>
            {loadingFoodCategory ? (
              [1, 2, 3, 4].map((item) => <ProfileSkeleton key={item} />)
            ) : (
              <ProductRecommended products={categoryFoods} />
            )}
          </ItemTab>
        </Tab>
        <NavigationBottom />
      </Container>
    </Page>
  );
};
