import React, { Children } from "react";

import { NavLink } from "react-router-dom";
const Activelink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "uppercase text-[#8c52ff] mx-3 py-1 font-Barlow text-xl  font-bold border-b-2 border-dashed border-[#8c52ff]"
          : "uppercase text-[#8c52ff] mx-3  py-1 font-Barlow text-xl  font-bold"
      }
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
