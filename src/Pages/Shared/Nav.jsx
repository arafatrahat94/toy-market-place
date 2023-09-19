import { useContext, useState } from "react";
import img from "../../assets/20230915_235212_0000.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <Activelinknk> for styles
import Activelink from "./activeRoute";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
// ..
AOS.init();
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen);
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const { creatUser, Update, glog, user, logout } = useContext(AuthContext);
  const signOUt = () => {
    logout().then(() => {
      Toast.fire({
        icon: "success",
        title: `User Logged Out`,
      });
    });
  };
  const navbar = (
    <>
      {" "}
      <Activelink
        to="/"
        className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-2 font-bold"
      >
        <a>Home</a>
      </Activelink>
      <Activelink
        to="/Alltoys"
        className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold"
      >
        <a>All Toys</a>
      </Activelink>
      {user !== null ? (
        <>
          {" "}
          <Activelink
            to="/MyToys"
            className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold"
          >
            <a>My Toys</a>
          </Activelink>
          <Activelink
            to="/AddToy"
            className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold"
          >
            <a>Add A Toy</a>
          </Activelink>
        </>
      ) : (
        ""
      )}
      <Activelink className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold">
        <a>Blogs</a>
      </Activelink>
      {user !== null ? (
        <button
          onClick={signOUt}
          className=" uppercase sma:my-1   font-Barlow text-xl  font-bold ring glass     text-white sma:p-2  border-[#FF2A2E]   lg:mt-0     bg-black  py-2 sma:mt-4 w-40 mx-auto rounded "
        >
          <a>Logout</a>
        </button>
      ) : (
        <Activelink
          to="/Login"
          className=" uppercase text-[#FF2A2E]   font-Barlow text-xl glass bg-black sma:py-2 mt-4 w-40 mx-auto rounded font-bold"
        >
          <a>Login</a>
        </Activelink>
      )}
    </>
  );

  return (
    <div className="navbar h-20   bg-transparent  ">
      <div className={`navbar-start `}>
        <div className="z-[1] ">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                htmlFor="my-drawer"
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>

              <div>
                <div className="drawer">
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    {/* Page content here */}
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer"
                      className="drawer-overlay"
                    ></label>

                    <ul className="menu p-2 w-72 min-h-full bg-base-200 text-base-content">
                      <h1 className="text-center text-xl font-Barlow font-bold text-red-600 mt-2">
                        Navigation Menu
                      </h1>
                      <hr className="my-2 border border-red-400" />
                      {/* Sidebar content here */}
                      {navbar}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="w-40 hidden lg:block" src={img} alt="" />
        </div>
      </div>

      <div className="navbar-center  hidden lg:flex">
        <ul className="  z-[2]  border-white border-opacity-25 menu menu-horizontal px-1">
          {navbar}
        </ul>
      </div>
      <div className=" pe-2 w-full ">
        <img
          className="rounded-full ring-[#FF2A2E] ring-4 w-10  ms-auto"
          src={user?.photoURL}
          alt=""
        />
      </div>
      <hr className="z-[2]" />
    </div>
  );
};

export default Nav;
