import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation from "../../../assets/VbbjN4vsXz.json";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
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
  const [title, setTittle] = useState("");
  const [toys, setTOys] = useState([]);
  const [isloadin, setLoading] = useState(true);
  //   const [hiddem,setHidden] = useState
  // const Alltoys = () => {};
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    setTittle("All");
    fetch(`https://toys-server-nu.vercel.app/Alltoy`)
      .then((res) => res.json())
      .then((data) => setTOys(data));
  }, []);
  console.log(toys);
  const showToast = () => {
    Toast.fire({
      icon: "error",
      title: `You Have To Login First`,
    });
  };
  return (
    <div className="my-14 z-10 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold font-Barlow text-[#FF2A2E] text-center">
          Shop By Category
        </h1>
        <hr className="outline-dotted outline-[#FF2A2E] w-5/12 mx-auto mt-3" />
      </div>
      <div className="grid gap-5 w-8/12 mx-auto mt-8 grid-cols-2 lg:grid-cols-4">
        <div className="hover:ring shadow shadow-[#FF2A2E] ring-[#FF2A2E] bg-black relative rounded-3xl">
          <Link to="/Marvel">
            <img
              className="opacity-40 rounded-3xl"
              src="https://i.ibb.co/TYqnS2g/mulyadi-PIl-B7-BQo5bg-unsplash.jpg"
              alt=""
            />
            <div>
              <h1 className="absolute top-[75px] lg:top-[64px]  text-center text-red-400 text-3xl lg:left-[37px] left-4 font-Anton">
                Marvel
              </h1>
            </div>
          </Link>
        </div>
        <div className="hover:ring shadow shadow-[#FF2A2E] ring-[#FF2A2E] relative bg-black rounded-3xl">
          <Link to="/Dc">
            <img
              className="opacity-40 rounded-3xl"
              src="https://i.ibb.co/0rLKM0H/zakaria-ahada-0x-OCVe7n-UU0-unsplash-2.jpg"
              alt=""
            />
            <div className="">
              <h1 className="absolute top-[75px] lg:top-[64px]  text-center text-red-400 text-3xl lg:left-[60px] left-4 font-Anton">
                Dc
              </h1>
            </div>
          </Link>
        </div>
        <div className="hover:ring shadow shadow-[#FF2A2E] ring-[#FF2A2E] relative bg-black rounded-3xl">
          <Link to="/Anime">
            <div>
              <img
                className="opacity-40 rounded-3xl"
                src="https://i.ibb.co/yppQ3Tn/marcos-ferreira-QYBVbw-JYx-NA-unsplash.jpg"
                alt=""
              />
              <h1 className="absolute top-[75px] lg:top-[64px]  text-center text-red-400 text-3xl lg:left-[37px] left-4 font-Anton">
                Anime
              </h1>
            </div>
          </Link>
        </div>
        <div className="hover:ring shadow shadow-[#FF2A2E] ring-[#FF2A2E] relative bg-black rounded-3xl">
          <img
            className="opacity-0 rounded-3xl"
            src="https://i.ibb.co/yppQ3Tn/marcos-ferreira-QYBVbw-JYx-NA-unsplash.jpg"
            alt=""
          />
          <div>
            <Link
              to="/ViewAll"
              className="absolute top-[75px] lg:top-[64px]  text-center text-red-400 lg:text-3xl text-2xl lg:left-[31px] left-5 font-Anton"
            >
              View All
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-3xl  font-Barlow text-[#FF2A2E] font-bold text-center">
          Featured Toys
          <hr className="outline-dotted w-6/12 mx-auto mt-4 outline-4" />
        </h1>
        {isloadin ? (
          <>
            <Lottie className="w-32 mx-auto mt-11" animationData={animation} />
          </>
        ) : (
          <>
            {" "}
            <div></div>
            <div className="grid mt-8 lg:grid-cols-2 w-11/12 mx-auto">
              {toys.map((x, i) => (
                <>
                  <div
                    key={i}
                    data-aos="fade-right"
                    className="z-0 lg:w-[450px]     mx-auto rounded-3xl shadow  "
                  >
                    <div className="relative ring-4 ring-[#FF2A2E] my-3 rounded-[40px] lg:w-full">
                      <img
                        className="lg:w-[500px] w-[350px]  rounded-[40px] mx-auto object-cover"
                        src={x.Image_URL}
                        alt=""
                      />
                      <div className="absolute sma:top-[190px] cust:top-[197px] lg:top-[250px] pt-3 bg-black bg-opacity-20 w-full  h-[100px]">
                        <h1 className="font-Outfit tracking-wider lg:text-4xl sma:text-xl text-white text-center">
                          {x.Name}
                        </h1>
                        <h1 className="font-Barlow uppercase font-bold  tracking-wider lg:text-3xl  sma:text-2xl text-white text-center">
                          From {x.Category}
                        </h1>
                        <div className="flex gap-x-3 justify-center lg:mt-4 items-center">
                          <div className="    font-Barlow uppercase font-bold bg-gradient-to-r from-red-600 glass  to-red-400 text-black sma:w-[120px] lg:w-[110px] tracking-wider lg:py-2 lg:text-xl py-1 text-center">
                            {x.Price}$
                          </div>
                          <div className="    font-Barlow uppercase font-bold bg-gradient-to-r from-red-600 glass  to-red-400 text-black sma:w-[120px] lg:w-[160px] tracking-wider lg:py-2 lg:text-xl py-1 text-center">
                            Quantity:{x.Quantity}
                          </div>
                        </div>
                        <div
                          onClick={user ? "" : showToast}
                          className="    font-Outfit mx-auto mt-2 uppercase bg-black glass sma:w-[120px] text-white rounded tracking-wider  py-2 text-center"
                        >
                          <Link to={`/TOyDetails/${x._id}`}>View Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShopByCategory;
