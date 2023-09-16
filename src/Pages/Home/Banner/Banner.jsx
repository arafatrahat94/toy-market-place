import React from "react";
import img1 from "../../../assets/2.png";
import { AiOutlinePlus } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="w-[700px]">
          <div className=" mt-14 ">
            <h1 className="text-5xl ms-5 font-Barlow font-bold uppercase text-[#8c52ff]">
              Welcome to
            </h1>
            <h1 className="tracking-wide text-7xl ms-12 font-Anton font-extrabold uppercase text-[#8c52ff]">
              "Toodle toys"
            </h1>
            <h1 className="text-5xl text-end me-20 font-Barlow font-bold uppercase text-[#8c52ff]">
              Store
            </h1>
          </div>
          <div className="ms-14 mt-2">
            <h1 className="text-3xl text-[#8c52ff] font-Barlow font-medium">
              An Action figure toy store
            </h1>
            <h1 className="mt-8 ms-8 w-[400px] text-[#8c52ff] text-xl">
              Join the Toodle Toys family today and make cherished memories with
              our enchanting range of toys. Explore our website and discover the
              perfect playmate for your little one.
            </h1>
          </div>
        </div>
        <div className="w-[500px] ">
          <Swiper
            spaceBetween={50}
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
            <SwiperSlide className="  ">
              <img
                className="absolute mx-auto  w-full top-[-10px] rounded-2xl z-[-1]"
                src="https://i.ibb.co/j6C3XPh/20230916-024757-0005.png"
                alt=""
              />
              <div className="relative left-14 -bottom-[290px]">
                {" "}
                <h1 className="text-3xl text-[#8c52ff] font-Anton tracking-wider">
                  Itachi Uchiha
                </h1>
                <h1>
                  <span className="text-xl text-[#8c52ff] font-Barlow font-bold">
                    Action Figure From Naruto
                  </span>
                </h1>
                <div className="flex justify-end me-32">
                  <button className="py-4  font-Anton text-2xl shadow-md shadow-[#8c52ff] text-[#8c52ff]  flex  items-center gap-2 px-4 rounded-3xl">
                    <AiOutlinePlus className="font-bold text-2xl" /> Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="  ">
              <img
                className="absolute mx-auto  w-full top-[-10px] rounded-2xl z-[-1]"
                src="https://i.ibb.co/bb0CZn0/20230916-024757-0001.png"
                alt=""
              />
              <div className="relative left-14 -bottom-[290px]">
                {" "}
                <h1 className="text-3xl text-[#8c52ff] font-Anton tracking-wider">
                  Iam Groot
                </h1>
                <h1>
                  <span className="text-xl text-[#8c52ff] font-Barlow font-bold">
                    Action Figure From Guardiens
                  </span>
                </h1>
                <div className="flex justify-end me-32">
                  <button className="py-4  font-Anton text-2xl shadow-md shadow-[#8c52ff] text-[#8c52ff]  flex  items-center gap-2 px-4 rounded-3xl">
                    <AiOutlinePlus className="font-bold text-2xl" /> Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="  ">
              <img
                className="absolute mx-auto  w-full top-[-10px] rounded-2xl z-[-1]"
                src="https://i.ibb.co/ydtGY4S/20230916-024757-0000.png"
                alt=""
              />
              <div className="relative left-14 -bottom-[290px]">
                {" "}
                <h1 className="text-3xl text-[#8c52ff] font-Anton tracking-wider">
                  Thanos
                </h1>
                <h1>
                  <span className="text-xl text-[#8c52ff] font-Barlow font-bold">
                    Action Figure From Avengers
                  </span>
                </h1>
                <div className="flex justify-end me-32">
                  <button className="py-4  font-Anton text-2xl shadow-md shadow-[#8c52ff] text-[#8c52ff]  flex  items-center gap-2 px-4 rounded-3xl">
                    <AiOutlinePlus className="font-bold text-2xl" /> Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
