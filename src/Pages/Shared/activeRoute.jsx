import React, { Children } from "react";

import { NavLink } from "react-router-dom";
const Activelink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "uppercase  lg:mx-3 sma:py-2 my-[3px] font-Outfit   font-bold lg:h-9   rounded-lg  bg-red-500 text-white  px-4 border-[#FF2A2E]"
          : "uppercase  lg:mx-3 sma:py-2 my-[3px] font-Outfit   font-bold lg:h-9   rounded-lg lg:text-red-800 text-red-400 shadow   bg-opacity-80 px-4 border-[#FF2A2E]"
      }
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
