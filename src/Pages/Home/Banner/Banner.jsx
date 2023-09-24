import React, { useEffect, useState } from "react";
import img1 from "../../../assets/2.png";
import { AiOutlinePlus } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./Banner.css";
import Lottie from "lottie-react";
import animation from "../../../assets/VbbjN4vsXz.json";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigation } from "react-router-dom";
const Banner = () => {
  const [bannerImage, SetBannerImage] = useState([]);
  useEffect(() => {
    fetch(`https://toys-server-nu.vercel.app/ImageBanner`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetBannerImage(data);
      });
  }, []);
  const navigation = useNavigation();
  const [isloading, Setisloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      Setisloading(false);
    }, 500);
  }, []);
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[700px]">
          <div className=" mt-14 ">
            <h1 className="text-4xl lg:text-5xl ms-5 font-Barlow font-bold uppercase text-[#FF2A2E]">
              Welcome to
            </h1>
            <h1 className="tracking-wide sma:text-5xl lg:text-7xl cust:text-5xl sma:ms-[100px] lg:ms-12 font-Anton font-extrabold uppercase   sma:glass p-2 bg-red-400 text-red-700 bg-opacity-70  ">
              Toodle toys
            </h1>
            <h1 className="text-5xl lg:text-end lg:me-20 ms-10 lg:ms-0 font-Barlow font-bold uppercase text-red-400">
              Store
            </h1>
          </div>
          <div className="lg:ms-14 cust:ms-4 mt-2">
            <h1 className="text-2xl text-end me-4 cust:text-2xl text-[#FF2A2E] font-Barlow font-medium">
              An Action figure toy store
            </h1>
            <h1 className="hidden lg:block mt-8 ms-8 lg:w-[400px] text-[#FF2A2E] text-xl">
              Join the Toodle Toys family today and make cherished memories with
              our enchanting range of toys. Explore our website and discover the
              perfect playmate for your little one.
            </h1>
          </div>
        </div>

        <div className="lg:w-[500px] lg:relative -right-5 z-0">
          {navigation.state === "loading" ? (
            <>
              <Lottie
                className="w-32 h-[50vh] my-10 mx-auto"
                animationData={animation}
              />
            </>
          ) : (
            <>
              <Swiper
                spaceBetween={80}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                onSlideChange={() => console.log("slide change")}
                className=" mySwiper rounded-b-3xl h-[480px] absolute"
              >
                {bannerImage.map((x) => (
                  <>
                    <SwiperSlide className="  ">
                      <img
                        className="absolute shadow-lg shadow-black mx-auto rounded-full sma:left-16 w-72 lg:w-80 top-[60px] lg:top-[90px]  "
                        src={x?.Image_URL}
                        alt=""
                      />
                      <div className="relative left-14 lg:-bottom-[280px] sma:-bottom-[250px]">
                        {" "}
                        <h1 className="text-3xl lg:text-red-300 text-red-500 sma:w-[240px] font-Anton tracking-wider">
                          {x.Name}
                        </h1>
                        <h1 className="w-[280px]">
                          <span className="text-xl lg:text-red-300 text-red-600 font-Barlow font-bold">
                            {x.Description}
                          </span>
                        </h1>
                        <div className="flex  justify-center me-32">
                          <button className="py-4  font-Anton text-2xl shadow-md shadow-[#FF2A2E] text-[#FF2A2E]  flex  items-center gap-2 px-4 rounded-3xl">
                            <AiOutlinePlus className="font-bold text-2xl" /> Add
                            to Cart
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </>
          )}
        </div>
        <div>
          <h1 className=" lg:hidden cust:mt-1 ms-8 lg:w-[400px] text-[#FF2A2E] ">
            Join the Toodle Toys family today and make cherished memories with
            our enchanting range of toys. Explore our website and discover the
            perfect playmate for your little one.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
