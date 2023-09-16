import React, { useRef, useState } from "react";

import { AiOutlineGoogle, AiOutlinePlus } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./Login.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Login = () => {
  const [erros, setErros] = useState("");
  const emailref = useRef(null);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.pass.value;
    console.log(email, pass);
  };
  const handleForgotPass = () => {
    const email = emailref.current.value;
    console.log(email);
  };
  return (
    <div className="">
      <div className="flex flex-col h-[460px] lg:flex-row">
        <div className="lg:w-[600px]">
          <div className="cust:mt-6 sma:mt-6 mt-14 ">
            <h1 className="text-4xl cust:ms-[80px] sma:ms-[60px] lg:text-5xl ms-5 font-Barlow font-bold uppercase text-[#8c52ff]">
              Login to
            </h1>
            <h1 className="tracking-wide sma:text-4xl lg:text-7xl cust:text-4xl sma:ms-[130px] cust:ms-[140px] lg:ms-12 font-Anton font-extrabold uppercase text-[#8c52ff]">
              Toodle toys
            </h1>
            <h1 className="text-5xl cust:ms-[80px] lg:text-end lg:me-20 ms-10 lg:ms-0 font-Barlow sma:ms-[50px] font-bold uppercase text-[#8c52ff]">
              Store
            </h1>
          </div>
          <div className="lg:ms-14 hidden lg:block cust:ms-4 mt-2">
            <h1 className="text-3xl text-start me-4 cust:text-2xl text-[#8c52ff] font-Barlow font-medium">
              Or login with
            </h1>
            <h1 className="hidden lg:block mt-8 ms-8 lg:w-[400px] text-[#8c52ff] text-xl">
              <button className="btn focus:text-black focus:bg-[#8c52ff] outline-[#8c52ff] text-[#8c52ff] btn-circle btn-outline outline-dotted uppercase font-bold font-Barlow tracking-widest text-2xl w-full h-16">
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
            className="card sma:mt-6 flex sma:w-[320px] cust:w-[350px] mx-auto lg:w-[400px] ring ring-[#8c52ff] rounded-lg flex-shrink-0  shadow-2xl "
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label sma:pt-2 ps-0 pb-2">
                  <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#8c52ff] ">
                    Your Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="@mail.com"
                  name="email"
                  ref={emailref}
                  className="input input-bordered outline-dotted outline-[#8c52ff] sma:h-10 cust:h-12 h-14 border-[#8c52ff] rounded-lg"
                />
              </div>
              <div className="form-control">
                <label className="label ps-0 pb-2">
                  <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#8c52ff] ">
                    Password
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="pAssw0rd"
                  name="pass"
                  className="input sma:h-10 input-bordered  outline-dotted cust:h-12 outline-[#8c52ff] h-14 border-[#8c52ff] rounded-lg"
                />{" "}
                <div className="my-2">
                  <label onClick={handleForgotPass} className="  ">
                    <a
                      href="#"
                      className="label-text-alt text-base text-[#8c52ff]  link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn focus:text-black focus:bg-[#8c52ff] outline-[#8c52ff] text-[#8c52ff] btn-circle btn-outline outline-dotted uppercase font-bold font-Barlow tracking-widest sma:text-xl text-2xl w-full sma:h-10 h-16">
                  Login
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-[#8c52ff] text-end p-2">
                New In Toodle Toys?{" "}
                <button className="text-xl link-hover">SignUp</button>
              </h1>
            </div>
          </form>
        </div>

        <div className="lg:ms-14 lg:hidden  mt-5">
          <h1 className="text-3xl text-center  cust:text-2xl text-[#8c52ff] font-Anton font-medium">
            Or login with
          </h1>
          <h1 className="mt-8 text-center lg:w-[400px] text-[#8c52ff] text-xl">
            <button className="btn focus:text-black focus:bg-[#8c52ff] outline-[#8c52ff] text-[#8c52ff] btn-circle btn-outline outline-dotted uppercase font-bold font-Barlow tracking-widest text-2xl w-[250px] h-10">
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
