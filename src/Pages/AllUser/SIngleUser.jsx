import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

const SIngleUser = ({ data, handleDelete }) => {
  const [verified, SetVerify] = useState(data.verified);
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
  console.log(verified);
  const verify = () => {
    SetVerify(!verified);
    fetch(`https://toys-server-nu.vercel.app/User/${data._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ verified: verified }),
    })
      .then((res) => res.json())
      .then((data) => {
        Toast.fire({
          icon: "warning",
          title: `User Verified Status ${verified}`,
        });
      });
  };

  return (
    <div>
      {" "}
      <>
        <div className="my-4 flex lg:flex-row flex-col lg:h-[130px] rounded-xl sma:items-center bg-red-100">
          <div className="w-32  sma:mt-2 rounded-3xl p-2 ">
            <img
              className="rounded-3xl  mx-auto w-full ring-red-600 ring"
              src={data?.photo}
              alt=""
            />
          </div>
          <div className="text-red-600 flex flex-col  w-[250px]  items-center lg:w-[200px] justify-center lg:ms-3">
            <h1 className="font-Barlow font-bold text-xl">
              Name: {data.name.slice(0, 20)}
            </h1>
            <h1 className="font-Barlow font-bold ">Id:{data._id}</h1>

            <h1 className="font-Barlow sma:py-2 w-[250px] text-center cursor-pointer overflow-scroll  text-sm ">
              email:{data.email}
            </h1>
          </div>

          <div className="text-red-600  flex flex-grow items-center   justify-end m-3 p-3">
            <div className="text-3xl mx-3">
              {" "}
              <label
                onClick={verify}
                className="btn btn-circle swap swap-rotate"
              >
                {/* this hidden checkbox controls the state */}
                <input
                  onChange={() => {
                    "";
                  }}
                  defaultChecked={data.verified === true ? true : false}
                  type="checkbox"
                />

                {/* hamburger icon */}
                <img
                  width="94"
                  height="94"
                  className="swap-on fill-current"
                  src="https://img.icons8.com/3d-fluency/94/verified-account.png"
                  alt="verified-account"
                />

                {/* close icon */}
                <img
                  width="48"
                  height="48"
                  className="swap-off fill-current"
                  src="https://img.icons8.com/emoji/48/cross-mark-button-emoji.png"
                  alt="cross-mark-button-emoji"
                />
              </label>
            </div>
            <div
              onClick={() => handleDelete(data._id)}
              className="text-3xl btn-circle bg-white cursor-pointer mx-3"
            >
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/3d-fluency/94/trash.png"
                alt="trash"
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SIngleUser;
