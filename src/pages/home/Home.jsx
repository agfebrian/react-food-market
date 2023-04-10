import React from "react";
import { useState } from "react";
import { Page, Container } from "../../components/layout";
import {
  CardProduct,
  Tab,
  ItemTab,
  Navigation,
  NavigationBottom,
} from "../../components/ui";
import { ProductPopular, ProductRecommended, ProductTaste } from "./components";

import ImageUser from "../../assets/images/pic-user.png";
import Product from "../../assets/images/products/product-1.png";

export const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["New Taste", "Popular", "Recommended"];

  const changeTab = (index) => {
    setSelectedTab(index);
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
          {[1, 2, 3].map((item, index) => (
            <CardProduct
              key={index}
              title="Cherry Healthy"
              image={Product}
              rating={4}
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
            <ProductTaste />
          </ItemTab>
          <ItemTab
            activeTab={selectedTab}
            indexTab={1}
            handleClick={() => setSelectedTab(1)}
          >
            <ProductPopular />
          </ItemTab>
          <ItemTab
            activeTab={selectedTab}
            indexTab={2}
            handleClick={() => setSelectedTab(2)}
          >
            <ProductRecommended />
          </ItemTab>
        </Tab>
        <NavigationBottom />
      </Container>
    </Page>
  );
};
