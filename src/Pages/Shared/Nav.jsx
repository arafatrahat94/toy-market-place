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
  const { setUser, creatUser, Update, glog, user, logout } =
    useContext(AuthContext);
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
      {user?.userType === "Admin" ? (
        <>
          <Activelink
            to="/"
            className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-2 font-bold"
          >
            <a>Home</a>
          </Activelink>
          <Activelink
            to="/Banner"
            className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-2 font-bold"
          >
            <a>Banner Customize</a>
          </Activelink>
          <Activelink
            to="/Alluser"
            className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold"
          >
            <a>All Users</a>
          </Activelink>
          <Activelink
            to="/ViewAll"
            className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold"
          >
            All Toys
          </Activelink>
          <Activelink
            to="/MyToys"
            className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold"
          >
            My Toys
          </Activelink>
          <Activelink
            to="/AddToy"
            className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold"
          >
            Add A Toy
          </Activelink>
        </>
      ) : (
        <>
          <Activelink to="/" className=" ">
            Home
          </Activelink>
          <Activelink
            to="/ViewAll"
            className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold"
          >
            All Toys
          </Activelink>
          {user !== null ? (
            <>
              {" "}
              <Activelink
                to="/MyToys"
                className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold"
              >
                My Toys
              </Activelink>
              <Activelink
                to="/AddToy"
                className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold"
              >
                Add A Toy
              </Activelink>
            </>
          ) : (
            ""
          )}
          <Activelink
            to="/Blogs"
            className=" uppercase text-[#FF2A2E]   font-Barlow text-xl mx-1 font-bold"
          >
            Blogs
          </Activelink>
        </>
      )}
      {user !== null ? (
        <button
          onClick={signOUt}
          className=" uppercase sma:my-1   font-Outfit flex items-center justify-center ring-red-500 text-xl lg:text-base  font-bold ring glass     text-white sma:p-2  border-[#FF2A2E]  lg:h-9  lg:m-0     bg-black  py-2 sma:mt-4 w-40 lg:w-24 mx-auto rounded "
        >
          Logout
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
                <div className="drawer ">
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content"></div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer"
                      className="drawer-overlay"
                    ></label>

                    <ul className="menu p-2  w-64 min-h-full bg-base-200 z-10 text-base-content">
                      {user?.userType === "Admin" ? (
                        <>
                          <h1 className="text-center text-xl font-Barlow font-bold text-red-600 mt-2">
                            Admin Profile
                          </h1>
                        </>
                      ) : (
                        <>
                          <div className="mt-3">
                            {user ? (
                              <>
                                <img
                                  className="mx-auto w-20 rounded-full lg:hidden ring-4 ring-red-500"
                                  src={user?.photo}
                                  alt=""
                                />
                                <div className="absolute right-24 top-[82px]">
                                  {user.verified === true ? (
                                    <img
                                      width="24"
                                      height="24"
                                      src="https://img.icons8.com/3d-fluency/94/verified-account.png"
                                      alt="verified-account"
                                    />
                                  ) : (
                                    <img
                                      width="24"
                                      height="24"
                                      src="https://img.icons8.com/emoji/48/cross-mark-button-emoji.png"
                                      alt="cross-mark-button-emoji"
                                    />
                                  )}
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                            <h1 className="text-center text-xl font-Barlow font-bold text-red-600 mt-2">
                              {user ? (
                                <> {user.name ? user?.name.slice(0, 20) : ""}</>
                              ) : (
                                <>Navigation Bar</>
                              )}
                            </h1>
                          </div>
                        </>
                      )}
                      <hr className="my-2 z-10 border border-red-400" />
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
          src={user?.photo}
          alt=""
        />
      </div>
      <hr className="z-[2]" />
    </div>
  );
};

export default Nav;
