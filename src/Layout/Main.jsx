import React, { useEffect, useState } from "react";
import Nav from "../Pages/Shared/Nav";
import { Outlet } from "react-router-dom";
import imf1 from "../assets/2.png";
import img2 from "../assets/1.png";
import Footer from "../Pages/Shared/Footer";
import Lottie from "lottie-react";
import animation from "../assets/VbbjN4vsXz.json";
const Main = () => {
  const [isloadin, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="max-w-5xl  mx-auto">
      {isloadin ? (
        <>
          <Lottie
            className="w-56 mx-auto flex min-h-screen items-center"
            animationData={animation}
          />
        </>
      ) : (
        <>
          {" "}
          <div className="min-h-screen cust:min-h-[110vh] sma:min-h-[130vh] -z-20 lg:hidden absolute">
            <img
              className="min-h-screen cust:min-h-[110vh] sma:min-h-[130vh]  object-cover opacity"
              src={imf1}
              alt=""
            />
          </div>
          <div className="  items-center hidden lg:block  -z-20 xl:left-[200px] lg:absolute">
            <img className="  " src={img2} alt="" />
          </div>
          <Nav></Nav>
          <Outlet />
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Main;
