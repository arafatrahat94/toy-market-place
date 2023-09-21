import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import animation from "../../assets/VbbjN4vsXz.json";
import { Link } from "react-router-dom";
import useTittle from "../../hooks";
const CategoryWIseMarvel = () => {
  useTittle("Marvel");
  const [loading, setLoading] = useState(true);
  const [datacount, setdatacount] = useState(0);
  const itemPerpage = 10;
  const totalPages = Math.ceil(datacount / itemPerpage);
  const [product, setProduct] = useState([]);
  const [pagenum, setPageNum] = useState(0);
  const pageNumber = [...Array(totalPages).keys()];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://toys-server-nu.vercel.app/Marvel?page=${pagenum}&limit=${itemPerpage}`
      );
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, [pagenum, itemPerpage]);
  useEffect(() => {
    fetch(`https://toys-server-nu.vercel.app/productCount`)
      .then((res) => res.json())
      .then((data) => setdatacount(data.totalData));
  }, []);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  console.log(product);
  return (
    <div className="min-h-screen">
      {loading ? (
        <>
          <Lottie
            className="w-56 mx-auto min-h-screen flex items-center  justify-center"
            animationData={animation}
          />
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold font-Barlow text-center text-red-600 mb-6">
            ALL MARVEL TOY
            <hr className="mt-4 border border-red-600 outline-dotted" />
          </h1>
          <div className="grid  mt-8 lg:grid-cols-2 w-11/12 mx-auto">
            {product.map((x) => (
              <>
                <div
                  data-aos="fade-right"
                  className=" lg:w-[450px]     mx-auto rounded-3xl shadow  "
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
                      <div className="    font-Outfit mx-auto mt-2 uppercase bg-black glass sma:w-[120px] text-white rounded tracking-wider  py-2 text-center">
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
      <div className="flex items-center justify-center mt-4">
        <div className="join">
          {pageNumber.map((x) => (
            <>
              <button
                onClick={() => setPageNum(x)}
                key={x}
                className={`${
                  pagenum === x ? "bg-red-500  text-white" : ""
                } join-item btn`}
              >
                {x}
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryWIseMarvel;
