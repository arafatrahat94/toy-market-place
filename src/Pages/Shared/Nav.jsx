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
        className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-2 font-bold"
      >
        <a>Home</a>
      </Activelink>
      <Activelink
        to="/Alltoys"
        className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-1 font-bold"
      >
        <a>All Toys</a>
      </Activelink>
      {user !== null ? (
        <>
          {" "}
          <Activelink
            to="/MyToys"
            className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-1 font-bold"
          >
            <a>My Toys</a>
          </Activelink>
          <Activelink
            to="/AddToy"
            className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-1 font-bold"
          >
            <a>Add A Toy</a>
          </Activelink>
        </>
      ) : (
        ""
      )}
      <Activelink className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-1 font-bold">
        <a>Blogs</a>
      </Activelink>
      {user !== null ? (
        <button
          onClick={signOUt}
          className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-1 font-bold"
        >
          <a>Logout</a>
        </button>
      ) : (
        <Activelink
          to="/Login"
          className=" uppercase text-[#8c52ff]   font-Barlow text-xl mx-1 font-bold"
        >
          <a>Login</a>
        </Activelink>
      )}
    </>
  );

  return (
    <div className="navbar h-20  bg-transparent  ">
      <div className={`navbar-start `}>
        <div className="z-[1] ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeActivelinknecap="round"
                    strokeActivelinknejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navbar}
              </ul>
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
          className="rounded-full ring-[#8c52ff] ring-4 w-10  ms-auto"
          src={user?.photoURL}
          alt=""
        />
      </div>
      <hr className="z-[2]" />
    </div>
  );
};

export default Nav;
