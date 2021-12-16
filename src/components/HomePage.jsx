import React from "react";
import CardSection from "./customAssets/CardSection";
import MainFooter from "./customAssets/footer/MainFooter";
import SelectSection from "./customAssets/selectSection/SelectSection";
import MainTable from "./customAssets/table/mainTable/MainTable";
import TopBarJr from "./customAssets/TopBarJr";
import TopBarSr from "./customAssets/TopBarSr";

const HomePage = () => {
  return (
    <div>
      <TopBarJr />
      <TopBarSr />
      <CardSection />
      <SelectSection />
      <MainTable />
      <MainFooter />
    </div>
  );
};

export default HomePage;
