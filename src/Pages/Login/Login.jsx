import React, { useContext, useEffect, useRef, useState } from "react";

import { AiOutlineGoogle, AiOutlinePlus } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./Login.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTittle from "../../hooks";
const Login = () => {
  useTittle("Login");
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
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const { creatUser, Update, glog, user, signI, setUser } =
    useContext(AuthContext);
  const [erros, setErros] = useState("");
  const emailref = useRef(null);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.pass.value;
    signI(email, pass).then(() => {
      fetch(`https://toys-server-nu.vercel.app/User?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          navigate(from, { replace: true });
        });
    });
    console.log(user);
  };
  const handleForgotPass = () => {
    const email = emailref.current.value;
    console.log(email);
  };

  const glogin = () => {
    glog()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        fetch(`https://toys-server-nu.vercel.app/User?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setUser(data);
          });

        console.log("user");
      })
      .catch((error) => {});
  };
  console.log(user);
  return (
    <div className="min-h-screen mb-16  lg:mb-0">
      <div className="flex flex-col h-[460px] lg:flex-row">
        <div className="lg:w-[600px]">
          <div className="cust:mt-2 sma:mt-6 mt-14 ">
            <h1 className="text-4xl cust:ms-[80px] sma:ms-[60px] lg:text-5xl ms-5 font-Barlow font-bold uppercase text-[#FF2A2E]">
              Login to
            </h1>
            <h1 className="tracking-wide sma:text-4xl lg:text-7xl cust:text-4xl sma:ms-[130px] cust:ms-[140px] lg:ms-12 font-Anton font-extrabold uppercase text-[#FF2A2E]">
              Toodle toys
            </h1>
            <h1 className="text-5xl cust:ms-[80px] lg:text-end lg:me-20 ms-10 lg:ms-0 font-Barlow sma:ms-[50px] font-bold uppercase text-[#FF2A2E]">
              Store
            </h1>
          </div>
          <div className="lg:ms-14 hidden lg:block cust:ms-4 mt-2">
            <h1 className="text-3xl text-start me-4 cust:text-2xl text-[#FF2A2E] font-Barlow font-medium">
              Or login with
            </h1>
            <h1 className="hidden lg:block mt-8 ms-8 lg:w-[400px] text-[#FF2A2E] text-xl">
              <button
                onClick={glogin}
                className="btn focus:text-black focus:bg-[#FF2A2E] outline-[#FF2A2E] text-[#FF2A2E] btn-circle btn-outline outline-dotted uppercase font-bold font-Barlow tracking-widest text-2xl w-full h-16"
              >
                <AiOutlineGoogle className="text-2xl" />
                Google
              </button>
            </h1>
          </div>
        </div>

        <div className="lg:w-[500px] cust:h-[440px] sma:h-[430px] flex ">
          {" "}
          <form
            onSubmit={handleLogin}
            className="card sma:mt-6 flex sma:w-[320px] cust:w-[350px] mx-auto lg:w-[400px] bg-white ring ring-[#FF2A2E] rounded-lg flex-shrink-0  shadow-2xl "
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label sma:pt-2 ps-0 pb-2">
                  <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#FF2A2E] ">
                    Your Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="@mail.com"
                  name="email"
                  ref={emailref}
                  className="input input-bordered outline-dotted outline-[#FF2A2E] sma:h-10 cust:h-12 h-14 border-[#FF2A2E] rounded-lg"
                />
              </div>
              <div className="form-control">
                <label className="label ps-0 pb-2">
                  <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#FF2A2E] ">
                    Password
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="pAssw0rd"
                  name="pass"
                  className="input sma:h-10 input-bordered  outline-dotted cust:h-12 outline-[#FF2A2E] h-14 border-[#FF2A2E] rounded-lg"
                />{" "}
                <div className="my-2">
                  <label onClick={handleForgotPass} className="  ">
                    <a
                      href="#"
                      className="label-text-alt text-base text-[#FF2A2E]  link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn focus:text-black focus:bg-[#FF2A2E] outline-[#FF2A2E] text-[#FF2A2E] btn-circle btn-outline outline-dotted uppercase font-bold font-Barlow tracking-widest sma:text-xl text-2xl w-full sma:h-10 h-16">
                  Login
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-[#FF2A2E] text-end p-2">
                New In Toodle Toys?{" "}
                <Link to="/Register" className="text-xl link-hover">
                  Register
                </Link>
              </h1>
            </div>
          </form>
        </div>

        <div className="lg:ms-14 lg:hidden  mt-5">
          <h1 className="text-3xl text-center  cust:text-2xl text-[#FF2A2E] font-Anton font-medium">
            Or login with
          </h1>
          <h1 className="mt-8 text-center lg:w-[400px] text-[#FF2A2E] text-xl">
            <button
              onClick={glogin}
              className="btn focus:text-black focus:bg-[#FF2A2E] outline-[#FF2A2E] text-[#FF2A2E] btn-circle btn-outline outline-dotted uppercase font-bold font-Barlow tracking-widest text-2xl w-[250px] h-10"
            >
              <AiOutlineGoogle className="text-2xl" />
              Google
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
