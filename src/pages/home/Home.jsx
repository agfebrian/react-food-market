import React, { useState, useRef, useEffect } from "react";
import { Page, Container } from "../../components/layout";
import {
  CardProduct,
  Tab,
  ItemTab,
  Navigation,
  NavigationBottom,
  CardSkeleton,
  ProfileSkeleton,
} from "../../components/ui";
import { ProductPopular, ProductRecommended, ProductTaste } from "./components";
import { fetchAllFoods } from "../../services/home";

import ImageUser from "../../assets/images/pic-user.png";

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
    await new Promise((r) => setTimeout(r, 1000));
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
    await new Promise((r) => setTimeout(r, 1000));
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

  const hasFetchedData = useRef(false);
  useEffect(() => {
    if (hasFetchedData.current === false) {
      fetchSuggestFoods();
      fetchFoodsByCategory("new_food");
      hasFetchedData.current = true;
    }
  }, []);

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

  return (
    <Page>
      <Container>
        <Navigation
          title="FoodMarket"
          description="Let's get some foods"
          avatar={ImageUser}
        />
        <div className="flex gap-6 overflow-x-auto pb-6 pl-6 pt-6">
          {loadingFoodSuggest
            ? [1, 2, 3, 4].map((item) => <CardSkeleton key={item} />)
            : suggestFoods.map((item, index) => (
                <CardProduct
                  key={index}
                  title={item.name}
                  image={item.image}
                  rating={item.rating}
                />
              ))}
        </div>
        <Tab
          className="mb-[60px]"
          items={tabs}
          activeTab={selectedTab}
          handleChange={changeTab}
        >
          <ItemTab
            activeTab={selectedTab}
            indexTab={0}
            handleClick={() => setSelectedTab(0)}
          >
            {loadingFoodCategory ? (
              [1, 2, 3, 4].map((item) => <ProfileSkeleton key={item} />)
            ) : (
              <ProductTaste products={categoryFoods} />
            )}
          </ItemTab>
          <ItemTab
            activeTab={selectedTab}
            indexTab={1}
            handleClick={() => setSelectedTab(1)}
          >
            {loadingFoodCategory ? (
              [1, 2, 3, 4].map((item) => <ProfileSkeleton key={item} />)
            ) : (
              <ProductPopular products={categoryFoods} />
            )}
          </ItemTab>
          <ItemTab
            activeTab={selectedTab}
            indexTab={2}
            handleClick={() => setSelectedTab(2)}
          >
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
