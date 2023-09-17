import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation from "../../../assets/VbbjN4vsXz.json";
const ShopByCategory = () => {
  const [title, setTittle] = useState("");
  const [toys, setTOys] = useState([]);
  const [isloadin, setLoading] = useState(true);
  //   const [hiddem,setHidden] = useState
  const Alltoys = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTittle("All");
    fetch(`https://toys-server-3th00c4hc-arafathsensei94.vercel.app/Alltoys`)
      .then((res) => res.json())
      .then((data) => setTOys(data));
  };

  useEffect(() => {}, []);
  console.log(toys);
  return (
    <div className="my-14">
      <div>
        <h1 className="text-3xl  font-Barlow text-[#8c52ff] text-center">
          Shop By Category
        </h1>
        <hr className="outline-dotted outline-[#8c52ff] w-5/12 mx-auto mt-3" />
      </div>
      <div className="grid gap-5 w-11/12 mx-auto mt-8 grid-cols-2 lg:grid-cols-4">
        <div
          onClick={Alltoys}
          className="hover:ring shadow shadow-[#8c52ff] ring-[#8c52ff] relative rounded-3xl"
        >
          <img
            className="opacity-40"
            src="https://i.ibb.co/K9LZYyh/20230916-024757-0000.png"
            alt=""
          />
          <div>
            <h1 className="absolute top-[95px] text-center text-[#8c52ff] text-3xl lg:left-[60px] left-4 font-Anton">
              View ALl
            </h1>
          </div>
        </div>
        <div className="hover:ring shadow shadow-[#8c52ff] ring-[#8c52ff] relative rounded-3xl">
          <img
            className="opacity-40"
            src="https://i.ibb.co/K9LZYyh/20230916-024757-0000.png"
            alt=""
          />
          <div>
            <h1 className="absolute top-[95px] text-center text-[#8c52ff] text-3xl lg:left-[65px] left-4 font-Anton">
              Marvel
            </h1>
          </div>
        </div>
        <div className="hover:ring shadow shadow-[#8c52ff] ring-[#8c52ff] relative rounded-3xl">
          <img
            className="opacity-40"
            src="https://i.ibb.co/K9LZYyh/20230916-024757-0000.png"
            alt=""
          />
          <div>
            <h1 className="absolute top-[95px] text-center text-[#8c52ff] text-3xl lg:left-[80px] left-4 font-Anton">
              Dc
            </h1>
          </div>
        </div>
        <div className="hover:ring shadow shadow-[#8c52ff] ring-[#8c52ff] relative rounded-3xl">
          <img
            className="opacity-40"
            src="https://i.ibb.co/K9LZYyh/20230916-024757-0000.png"
            alt=""
          />
          <div>
            <h1 className="absolute top-[95px] text-center text-[#8c52ff] text-3xl lg:left-[75px] left-4 font-Anton">
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
              <h1 className="text-3xl  font-Barlow text-[#8c52ff] text-center">
                Toy From <>{title}</> Category
              </h1>
            </div>
            <div className="grid lg:grid-cols-2 w-11/12 mx-auto">
              {toys.map((x) => (
                <>
                  <div className=" lg:w-[450px] lg:my-6 my-2 lg:h-[220px] sma:h-[180px]  mx-auto rounded-3xl shadow shadow-[#8c52ff] grid grid-cols-2">
                    <div className="ring ring-[#8c52ff] m-4 h-[150px] lg:h-[180px] rounded-3xl lg:w-[180px]">
                      <img
                        className="lg:w-80 w-56 mx-auto object-cover"
                        src={x.Image_URL}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h1 className="text-2xl  mt-4 text-[#8c52ff] font-Barlow font-bold tracking-wide">
                        name
                      </h1>
                      <h1 className="lg:text-2xl   text-[#8c52ff] text-xl font-Barlow tracking-wide">
                        Price: {x.Price}
                      </h1>
                      <h1 className="lg:text-2xl   text-[#8c52ff] font-Barlow tracking-wide">
                        Category: {x.Category}
                      </h1>
                      <div className="flex items-center lg:hidden gap-x-4">
                        <h1 className="text   text-[#8c52ff] font-Barlow tracking-wide">
                          Quantity: {x.Quantity}
                        </h1>
                        <h1 className="text-xs   text-[#8c52ff] font-Barlow tracking-wide">
                          Rating: {x.Rating}
                        </h1>
                      </div>
                      <div className="lg:flex hidden flex-col lg:flex-row gap-2">
                        <h1 className="text-xl   text-[#8c52ff] font-Barlow tracking-wide">
                          Quantity: {x.Quantity}
                        </h1>
                        <h1 className="text-xl   text-[#8c52ff] font-Barlow tracking-wide">
                          Rating: {x.Rating}
                        </h1>
                      </div>
                      <button className="  text-[#8c52ff] focus:bg-[#8c52ff] bg-transparent uppercase focus:text-black font-Barlow lg:w-[210px] lg:text-base sma:h-8 sma:text-xs w-[160px] mx-auto rounded-xl outline-dotted outline-[#8c52ff] lg:h-12 mt-3">
                        View Details
                      </button>
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
