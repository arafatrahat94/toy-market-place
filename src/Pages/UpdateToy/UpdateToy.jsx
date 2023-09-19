import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const loader = useLoaderData();
  const { user } = useContext(AuthContext);
  const { email } = user;
  const [value, setValue] = useState(loader.Quantity); // Initial value for the range input
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
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  const getdata = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = form.name.value;
    const MadeIn = form.MadeIn.value;
    const Recommended_Age = form.Recommended_Age.value;
    const Price = form.Price.value;
    const Description = form.Description.value;
    const Category = form.Category.value;
    const Quantity = value;
    const Image_URL = form.Image_URL.value;
    const data = {
      Name: Name,
      MadeIn: MadeIn,
      Recommended_Age: Recommended_Age,
      Price: Price,
      Description: Description,
      Category: Category,
      Quantity: Quantity,
      email: email,
      Image_URL: Image_URL,
    };
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-server-94.onrender.com/Update${loader._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            event.target.reset();
            Toast.fire({
              icon: "success",
              title: `toy updated`,
            });
          });
      }
    });
  };
  return (
    <div className="min-h-screen mb-10">
      <form
        onSubmit={getdata}
        className="grid lg:grid-cols-2 shadow-2xl shadow-red-300 w-11/12 mx-auto rounded-2xl"
      >
        <div>
          <div className="flex flex-col sma:h-[650px] cust:h-[690px]  lg:h-[570px] lg:flex-row">
            <div className="lg:w-full  lg:ps-4 cust:h-[460px] sma:h-[640px]  lg:h-[550px] flex ">
              {" "}
              <div className="card  flex sma:w-[320px] cust:w-[350px] mx-auto  lg:w-full  rounded-lg flex-shrink-0  shadow-2xl ">
                <div className="card-body p-2 lg:p-5 lg:flex lg:items-center lg:justify-center sma:p-0">
                  <div className="form-control mx-2">
                    <label className="label sma:pt-2 ps-0 pb-2">
                      <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#D71317] ">
                        Toy Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="enter your toy name"
                      name="name"
                      defaultValue={loader.Name}
                      // ref={emailref}
                      className="input input-bordered lg:outline-dotted outline-[#D71317] sma:h-10 ps-2  lg:w-[400px] cust:h-12 h-14 border-[#D71317] rounded-lg"
                    />
                  </div>
                  <div className="form-control mx-2">
                    <label className="label sma:pt-2 ps-0 pb-2">
                      <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#D71317] ">
                        Image url
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="paste the url"
                      name="Image_URL"
                      defaultValue={loader.Image_URL}
                      // ref={emailref}
                      className="input input-bordered lg:outline-dotted outline-[#D71317] sma:h-10 ps-2  lg:w-[400px] cust:h-12 h-14 border-[#D71317] rounded-lg"
                    />
                  </div>
                  <div className="lg:flex lg:w-[400px] gap-x-4">
                    <div className="form-control lg:m-0 mx-2">
                      <label className="label ps-0 pb-2">
                        <span className="text-2xl sma:text-xl  font-bold font-Barlow text-[#D71317] ">
                          Made In
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Country Name"
                        name="MadeIn"
                        defaultValue={loader.MadeIn}
                        className="input sma:h-10 input-bordered  lg:outline-dotted cust:h-12  outline-[#D71317] h-14 lg:w-[190px] border-[#D71317] rounded-lg"
                      />{" "}
                      <div className="my-2"></div>
                    </div>

                    <div className="form-control mx-2">
                      <label className="label ps-0 pb-2">
                        <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#D71317] ">
                          Price
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Price"
                        name="Price"
                        defaultValue={loader.Price}
                        className="input sma:h-10 input-bordered  lg:outline-dotted cust:h-12 lg:w-[191px] outline-[#D71317] h-14 border-[#D71317] rounded-lg"
                      />{" "}
                    </div>
                  </div>
                  <div className="mx-2">
                    <label className="label ps-0 pb-2">
                      <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#D71317] ">
                        Quantity
                      </span>
                    </label>
                    <div className="flex">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        className="range w-[270px]"
                        value={value}
                        onChange={handleChange}
                      />
                      <div className="tooltip  bg-purple-600 w-[45px] text-black font-Anton">
                        {value}
                      </div>
                    </div>
                  </div>
                  <div className="lg:flex gap-x-4 mb-4 ">
                    <div className="form-control mx-2">
                      <label className="label ps-0 pb-2">
                        <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#D71317] ">
                          Recommended Age
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="age"
                        defaultValue={loader.Recommended_Age}
                        name="Recommended_Age"
                        className="input sma:h-10 input-bordered  lg:outline-dotted cust:h-12 lg:w-[191px] outline-[#D71317] h-14 border-[#D71317] rounded-lg"
                      />{" "}
                    </div>

                    <div className="form-control  mx-2">
                      <label className="label ps-0 pb-2">
                        <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#D71317] ">
                          Category
                        </span>
                      </label>

                      <select
                        name="Category"
                        defaultValue={loader.Category}
                        className="select select-secondary  lg:w-[191px] border-[#D71317] w-full"
                      >
                        <option disabled selected>
                          Select Category
                        </option>
                        <option>Marvel</option>
                        <option>Dc</option>
                        <option>Anime</option>
                        {/* <option>C#</option> */}
                      </select>
                      <div className="my-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  flex-col h-[380px] lg:h-[460px] lg:flex-row">
            <div className="lg:w-[500px]   items-center justify-center  flex ">
              {" "}
              <div className="card p-0 items-center flex sma:w-[320px] cust:w-[350px] mx-auto lg:w-[450px]   flex-shrink-0  shadow-2xl ">
                <div className="card-body h-[370px] rounded-lg lg:h-full lg:p-8 sma:p-0 w-[350px] lg:w-full ">
                  <div>
                    <textarea
                      name="Description"
                      defaultValue={loader.Description}
                      placeholder="Enter Description Of Your Toy"
                      className="rounded-xl bg-transparent textarea-bordered textarea text-[#D71317] text-base lg:py-4 shadow shadow-[#D71317] bg-white lg:mt-0 mx-auto lg:w-[384px] cust:w-[340px] w-[330px] flex"
                      id=""
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="form-control  w-full mt-6">
                    <button className="btn focus:text-black focus:bg-[#D71317] outline-[#D71317] text-[#D71317] btn-circle btn-outline lg:outline-dotted uppercase font-bold font-Barlow tracking-widest sma:text-xl lg:w-full w-9/12 mx-auto text-2xl  sma:h-10 h-16">
                      UpDate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
