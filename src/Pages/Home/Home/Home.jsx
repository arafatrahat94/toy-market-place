import React from "react";
import Banner from "../Banner/Banner";
import Nav from "../../Shared/Nav";
import Searchbar from "../search bar/Searchbar";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Searchbar></Searchbar>
    </div>
  );
};

export default Home;
