import { useState } from "react";
import img from "../../assets/20230915_235212_0000.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen);
  const navForSmall = (
    <>
      {" "}
      <div className="">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>All Toys</a>
        </li>
        <li>
          <a>My Toys</a>
        </li>
        <li>
          <a>Add A Toy</a>
        </li>
        <li>
          <a>Blogs</a>
        </li>
      </div>
    </>
  );
  const navbar = (
    <>
      {" "}
      <li className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-2 font-bold">
        <a>Home</a>
      </li>
      <li className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-1 font-bold">
        <a>All Toys</a>
      </li>
      <li className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-1 font-bold">
        <a>My Toys</a>
      </li>
      <li className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-1 font-bold">
        <a>Add A Toy</a>
      </li>
      <li className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-1 font-bold">
        <a>Blogs</a>
      </li>
    </>
  );

  return (
    <div className="navbar h-20  bg-transparent  ">
      <div className={`navbar-start `}>
        <div className="z-[1] ">
          <div className={`dropdown `}>
            <label
              onClick={() => setNavOpen(!navOpen)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
        </div>
        <div>
          <img className="w-40" src={img} alt="" />
        </div>
      </div>
      <div>
        <div className="relative navbar-center lg:hidden flex justify-center ">
          <div
            className={`${
              navOpen === true ? "top-[-45px]" : "-top-96"
            } z-[2] absolute  `}
          >
            <ul
              tabIndex={0}
              className="cust:w-[380px] w-[360px] pt-12 z-[1] p-2 shadow  ring ring-black  rounded-b-xl"
            >
              <div className="">
                <h1 className="text-center text-2xl font-Barlow italic font-bold">
                  Squid Toys
                </h1>
                <div className="mx-auto">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost w-full max-w-xs"
                  />
                </div>
                {navForSmall}
                <button onClick={() => setNavOpen(!navOpen)}>Close</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="  z-[2]  border-white border-opacity-25 menu menu-horizontal px-1">
          {navbar}
        </ul>
      </div>
      <hr className="z-[2]" />
    </div>
  );
};

export default Nav;
