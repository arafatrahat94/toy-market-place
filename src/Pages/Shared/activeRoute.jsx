import React, { Children } from "react";

import { NavLink } from "react-router-dom";
const Activelink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "uppercase  mx-3 sma:py-1 my-[3px] font-Barlow text-xl  font-bold ring glass  rounded-lg ring-red-600 bg-red-500 text-white sma:p-2  border-[#FF2A2E]"
          : "uppercase text-[#FF2A2E] mx-3 my-[3px] sma:p-2 py-0 font-Barlow text-xl  font-bold"
      }
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
