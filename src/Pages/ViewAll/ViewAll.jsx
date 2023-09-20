import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import animation from "../../assets/VbbjN4vsXz.json";
import { Link } from "react-router-dom";
import useTittle from "../../hooks";
const ViewAll = () => {
  useTittle("All Toy");
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
        `https://toys-server-nu.vercel.app/Toys?page=${pagenum}&limit=${itemPerpage}`
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
          <div>
            <div className="w-11/12 mx-auto bg-white rounded-lg p-2 ring ring-red-600 bg-opacity-40 overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th className="">Seller Name</th>
                    <th className=" ">Toy Name</th>

                    <th className="">Price</th>

                    <th className="">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((x) => (
                    <>
                      {" "}
                      <tr>
                        <td>{x?.SellerName?.slice(0, 20)}</td>
                        <td>
                          <div className="flex items-center ">
                            <div className="avatar">
                              <div className="text-xl font-Barlow font-bold w-[100px]  h-12">
                                {x.Name}
                              </div>
                            </div>
                            <div className="text-center w-[200px]">
                              {x.Category} Category
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>{x.Price}$</div>
                        </td>
                        <td>{x.Quantity}</td>
                        <td>
                          <Link to={`/TOyDetails/${x._id}`}>
                            <button className="btn bg-red-600 text-white btn-ghost btn-xs">
                              details
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </>
                  ))}

                  {/* row 2 */}
                </tbody>
                {/* foot */}
              </table>
            </div>
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
        </>
      )}
    </div>
  );
};

export default ViewAll;
