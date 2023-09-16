import React from "react";
import Nav from "../Pages/Shared/Nav";
import { Outlet } from "react-router-dom";
import imf1 from "../assets/filip-baotic-kwcvfHYhgwY-unsplash.jpg";
import img2 from "../assets/1.png";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div className="max-w-5xl  mx-auto">
      <div className="min-h-screen -z-20 lg:hidden absolute">
        <img className="min-h-screen object-cover opacity" src={imf1} alt="" />
      </div>
      <div className="min-h-screen  -z-20  absolute">
        <img className="object-cover  opacity" src={img2} alt="" />
      </div>
      <Nav></Nav>

      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Main;
