import React, { Children } from "react";

import { NavLink } from "react-router-dom";
const Activelink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "uppercase text-[#FF2A2E] mx-3 py-1 font-Barlow text-xl  font-bold border-b-2 border-dashed border-[#FF2A2E]"
          : "uppercase text-[#FF2A2E] mx-3  py-1 font-Barlow text-xl  font-bold"
      }
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
