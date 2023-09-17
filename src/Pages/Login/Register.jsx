import React, { useContext, useRef, useState } from "react";

import { AiOutlineGoogle, AiOutlinePlus } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./Register.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {
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

  const [erros, setErros] = useState("");
  const emailref = useRef(null);
  const { creatUser, setUser, Update, glog, user } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const pass = form.pass.value;
    const photo = form.photo.value;
    console.log(name, email, pass, photo);
    creatUser(email, pass)
      .then((result) => {
        if (photo.length > 0) {
          Update(name, photo)
            .then(() => {})
            .catch((error) => {
              Toast.fire({
                icon: "error",
                title: `${error.message.split("Firebase:").join("")}`,
              });
            });
        } else
          Update(name, result.user.photoURL)
            .then(() => {})
            .catch((error) => {
              Toast.fire({
                icon: "error",
                title: `${error.message.split("Firebase:").join("")}`,
              });
            });
        setUser([]);
        Toast.fire({
          icon: "success",
          title: `new user created`,
        });
        const user = result.user;
        const data = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        fetch(`https://toys-server-3th00c4hc-arafathsensei94.vercel.app/User`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => {
            console.error("Error:", error);
          });
        console.log(user);
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: `${error.message.split("Firebase:").join("")}`,
        });
      });
  };
  const glogin = () => {
    glog(() => {
      Toast.fire({
        icon: "success",
        title: `new user created`,
      });
      console.log("user");
    }).catch((error) => {});
  };
  console.log(user);
  return (
    <div className="">
      <div className="flex flex-col h-[460px] lg:flex-row">
        <div className="lg:w-[600px]">
          <div className="cust:mt-2 sma:mt-6 mt-14 ">
            <h1 className="text-4xl cust:ms-[80px] sma:ms-[60px] lg:text-5xl ms-5 font-Barlow font-bold uppercase text-[#8c52ff]">
              Register to
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
              Or Register with
            </h1>
            <h1 className="hidden lg:block mt-8 ms-8 lg:w-[400px] text-[#8c52ff] text-xl">
              <button
                onClick={glogin}
                className="btn focus:text-black focus:bg-[#8c52ff] outline-[#8c52ff] text-[#8c52ff] btn-circle btn-outline outline-dotted uppercase font-bold font-Barlow tracking-widest text-2xl w-full h-16"
              >
                <AiOutlineGoogle className="text-2xl" />
                Google
              </button>
            </h1>
          </div>
        </div>

        <div className="lg:w-[500px] lg:h-[450px] cust:h-[540px] cust:scale-95 sma:h-[510px] flex ">
          {" "}
          <form
            onSubmit={handleRegister}
            className="card sma:mt-6 flex sma:w-[320px] cust:w-[350px] mx-auto lg:w-[400px] ring ring-[#8c52ff] rounded-lg flex-shrink-0  shadow-2xl "
          >
            <div className="mx-6 my-2">
              <div className="lg:flex gap-x-4">
                <div className="form-control">
                  <label className="label sma:pt-2 ps-0 pb-2">
                    <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#8c52ff] ">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered outline-dotted outline-[#8c52ff] sma:h-10 cust:h-12 h-14 border-[#8c52ff] rounded-lg"
                  />
                </div>
                <div className=" lg:block form-control">
                  <label className="label  sma:pt-2 ps-0 pb-2">
                    <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#8c52ff] ">
                      Photo Url
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="paste url"
                    name="photo"
                    className="input input-bordered outline-dotted outline-[#8c52ff] sma:h-10 lg:w-[120px] cust:h-12 h-14 border-[#8c52ff] rounded-lg"
                  />
                </div>
              </div>
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
              <div className="">
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
                </div>
              </div>
              <div className="flex gap-x-6 items-center">
                <div className="form-control mt-10">
                  <button className="btn mx-auto focus:text-black focus:bg-[#8c52ff] outline-[#8c52ff] text-[#8c52ff] btn-circle btn-outline outline-dotted uppercase font-bold font-Barlow cust:w-[150px] sma:w-[140px] tracking-widest sma:text-base text-2xl w-full sma:h-10 h-16">
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[#8c52ff] text-end p-2">
                {" "}
                <Link
                  to="/Login"
                  className="text-xl font-Barlow font-bold  link-hover"
                >
                  Login?
                </Link>
              </h1>
            </div>
          </form>
        </div>

        <div className="lg:ms-14 lg:hidden  mt-5">
          <h1 className="text-3xl text-center  cust:text-2xl text-[#8c52ff] font-Anton font-medium">
            Or Register with
          </h1>
          <h1 className="mt-8 text-center lg:w-[400px] text-[#8c52ff] text-xl">
            <button
              onClick={glogin}
              className="btn focus:text-black focus:bg-[#8c52ff] outline-[#8c52ff] text-[#8c52ff] btn-circle btn-outline outline-dotted uppercase font-bold font-Barlow tracking-widest text-2xl w-[250px] h-10"
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

export default Register;
