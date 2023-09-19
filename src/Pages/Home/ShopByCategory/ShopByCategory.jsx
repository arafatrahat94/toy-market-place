import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation from "../../../assets/VbbjN4vsXz.json";
import { Link } from "react-router-dom";
const ShopByCategory = () => {
  const [title, setTittle] = useState("");
  const [toys, setTOys] = useState([]);
  const [isloadin, setLoading] = useState(true);
  //   const [hiddem,setHidden] = useState
  // const Alltoys = () => {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setTittle("All");
    fetch(`https://toys-server-nu.vercel.app/Alltoy`)
      .then((res) => res.json())
      .then((data) => setTOys(data));
  }, []);
  console.log(toys);
  return (
    <div className="my-14 z-10 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold font-Barlow text-[#FF2A2E] text-center">
          Shop By Category
        </h1>
        <hr className="outline-dotted outline-[#FF2A2E] w-5/12 mx-auto mt-3" />
      </div>
      <div className="grid gap-5 w-8/12 mx-auto mt-8 grid-cols-2 lg:grid-cols-3">
        <div className="hover:ring shadow shadow-[#FF2A2E] ring-[#FF2A2E] bg-black relative rounded-3xl">
          <img
            className="opacity-40 rounded-3xl"
            src="https://i.ibb.co/TYqnS2g/mulyadi-PIl-B7-BQo5bg-unsplash.jpg"
            alt=""
          />
          <div>
            <h1 className="absolute top-[75px] lg:top-[95px]  text-center text-red-400 text-3xl lg:left-[65px] left-4 font-Anton">
              Marvel
            </h1>
          </div>
        </div>
        <div className="hover:ring shadow shadow-[#FF2A2E] ring-[#FF2A2E] relative bg-black rounded-3xl">
          <img
            className="opacity-40 rounded-3xl"
            src="https://i.ibb.co/0rLKM0H/zakaria-ahada-0x-OCVe7n-UU0-unsplash-2.jpg"
            alt=""
          />
          <div className="">
            <h1 className="absolute top-[75px] lg:top-[95px] text-center text-red-400 text-3xl lg:left-[80px] left-4 font-Anton">
              Dc
            </h1>
          </div>
        </div>
        <div className="hover:ring shadow shadow-[#FF2A2E] ring-[#FF2A2E] relative bg-black rounded-3xl">
          <img
            className="opacity-40 rounded-3xl"
            src="https://i.ibb.co/yppQ3Tn/marcos-ferreira-QYBVbw-JYx-NA-unsplash.jpg"
            alt=""
          />
          <div>
            <h1 className="absolute top-[75px] lg:top-[95px]  text-center text-red-400 text-3xl lg:left-[75px] left-4 font-Anton">
              Anime
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {isloadin ? (
          <>
            <Lottie className="w-32 mx-auto mt-11" animationData={animation} />
          </>
        ) : (
          <>
            {" "}
            <div>
              <h1 className="text-3xl  font-Barlow text-[#FF2A2E] text-center">
                Toy From <>{title}</> Category
              </h1>
            </div>
            <div className="grid mt-8 lg:grid-cols-2 w-11/12 mx-auto">
              {toys.map((x) => (
                <>
                  <div
                    data-aos="fade-right"
                    className="z-20 lg:w-[450px]     mx-auto rounded-3xl shadow  "
                  >
                    <div className="relative ring-4 ring-[#FF2A2E] my-3 rounded-[40px] lg:w-full">
                      <img
                        className="lg:w-[500px] w-[350px]  rounded-[40px] mx-auto object-cover"
                        src={x.Image_URL}
                        alt=""
                      />
                      <div className="absolute sma:top-[190px] cust:top-[197px] lg:top-[265px] w-full  h-[100px]">
                        <h1 className="font-Outfit tracking-wider lg:text-4xl sma:text-xl text-white text-center">
                          {x.Name}
                        </h1>
                        <h1 className="font-Barlow uppercase font-bold  tracking-wider lg:text-3xl sma:text-2xl text-white text-center">
                          From {x.Category}
                        </h1>
                        <div className="flex gap-x-3 justify-center mt-2 items-center">
                          <div className="    font-Barlow uppercase font-bold bg-gradient-to-r from-red-600 glass  to-red-400 text-black sma:w-[120px] lg:w-[110px] tracking-wider lg:py-2 lg:text-xl py-1 text-center">
                            {x.Price}$
                          </div>
                          <div className="    font-Barlow uppercase font-bold bg-gradient-to-r from-red-600 glass  to-red-400 text-black sma:w-[120px] lg:w-[160px] tracking-wider lg:py-2 lg:text-xl py-1 text-center">
                            Quantity:{x.Quantity}
                          </div>
                        </div>
                        <div className="    font-Outfit mx-auto mt-2 uppercase  glass sma:w-[120px] text-white rounded tracking-wider  py-2 text-center">
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
