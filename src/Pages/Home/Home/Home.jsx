import React from "react";
import Banner from "../Banner/Banner";
import Nav from "../../Shared/Nav";
import Searchbar from "../search bar/Searchbar";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import useTittle from "../../../hooks";

const Home = () => {
  useTittle("Home");
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Searchbar></Searchbar>
      <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default Home;
