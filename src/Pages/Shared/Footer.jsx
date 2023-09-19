// import React from "react";
import png from "../../assets/20230915_235212_0000.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-red-200 -z-10 text-base-content">
        <aside className="flex justify-center w-full  items-center flex-col">
          <div className=" ">
            <img className="bg-red-500 rounded-3xl w-56 " src={png} alt="" />
          </div>
          <p className="text-base font-Barlow font-semibold text-center">
            An Action Figure Selling Store
            <br />
            Providing reliable toys since 2019
          </p>
        </aside>
        <h1 className="link mx-auto text-red-500">
          copy right owned by Arafath
        </h1>
      </footer>
    </div>
  );
};

export default Footer;
