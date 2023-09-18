import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
const Mytoys = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    if (loading === false) {
      fetch(`https://toys-server-nu.vercel.app/MyToys?email=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("toy-access")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (!data.error) {
            setMyToys(data);
          } else navigate("/Login");
        });
    }
  }, [user, navigate, loading]);
  console.log(localStorage.getItem("toy-access"));
  return (
    <div>
      <div className="w-8/12 mx-auto ">
        <h1 className="text-center text-4xl font-Barlow uppercase font-bold text-red-600">
          All My Uploaded Toys
        </h1>
        {myToys.map((x) => (
          <>
            <div className="my-4 flex lg:flex-row flex-col lg:h-[130px] rounded-xl sma:items-center bg-red-100">
              <div className="w-32 sma:mt-2 rounded-3xl p-2 ">
                <img
                  className="rounded-3xl ring-red-600 ring"
                  src={x.Image_URL}
                  alt=""
                />
              </div>
              <div className="text-red-600 flex flex-col w-[200px] justify-center ms-3">
                <h1 className="font-Barlow font-bold text-xl">
                  Toy Name: {x.Name}
                </h1>
                <h1 className="font-Barlow font-bold text-xl">
                  Category: {x.Category}
                </h1>
                <h1 className="font-Barlow font-bold text-xl">
                  MadeIn: {x.MadeIn}
                </h1>
                <h1 className="font-Barlow font-bold text-xl">
                  For Age: {x.Recommended_Age}
                </h1>
              </div>
              <div className="text-red-600  sma:w-[190px] flex flex-col justify-top lg:mt-3">
                <h1 className="font-Barlow font-bold text-xl">
                  Quantity: {x.Quantity}
                </h1>
                <h1 className="font-Barlow font-bold text-xl">
                  Price: {x.Price} $
                </h1>
              </div>
              <div className="text-red-600  flex flex-grow items-center   justify-end m-3 p-3">
                <div className="text-3xl mx-3">
                  <Link to={`/Update/${x._id}`}>
                    {" "}
                    <BsPencilSquare />
                  </Link>
                </div>
                <div className="text-3xl mx-3">
                  <BsTrash />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Mytoys;
