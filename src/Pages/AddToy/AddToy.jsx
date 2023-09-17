import React from "react";
import { Link } from "react-router-dom";

const AddToy = () => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 shadow-2xl shadow-black w-11/12 mx-auto rounded-2xl">
        <div>
          <div className="flex flex-col h-[510px] lg:flex-row">
            <div className="lg:w-full  lg:ps-4 cust:h-[440px] sma:h-[430px] flex ">
              {" "}
              <form
                onSubmit={"handleLogin"}
                className="card  flex sma:w-[320px] cust:w-[350px] mx-auto  lg:w-full  rounded-lg flex-shrink-0  shadow-2xl "
              >
                <div className="card-body p-2 lg:p-5 lg:flex lg:items-center lg:justify-center sma:p-0">
                  <div className="form-control mx-2">
                    <label className="label sma:pt-2 ps-0 pb-2">
                      <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#8c52ff] ">
                        Toy Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="enter your toy name"
                      name="email"
                      // ref={emailref}
                      className="input input-bordered outline-dotted outline-[#8c52ff] sma:h-10 ps-2  lg:w-[400px] cust:h-12 h-14 border-[#8c52ff] rounded-lg"
                    />
                  </div>
                  <div className="lg:flex lg:w-[400px] gap-x-4">
                    <div className="form-control lg:m-0 mx-2">
                      <label className="label ps-0 pb-2">
                        <span className="text-2xl sma:text-xl  font-bold font-Barlow text-[#8c52ff] ">
                          Made In
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Country Name"
                        name="pass"
                        className="input sma:h-10 input-bordered  outline-dotted cust:h-12  outline-[#8c52ff] h-14 lg:w-[190px] border-[#8c52ff] rounded-lg"
                      />{" "}
                      <div className="my-2"></div>
                    </div>
                    <div className="form-control mx-2">
                      <label className="label ps-0 pb-2">
                        <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#8c52ff] ">
                          Price
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Price"
                        name="pass"
                        className="input sma:h-10 input-bordered  outline-dotted cust:h-12 lg:w-[191px] outline-[#8c52ff] h-14 border-[#8c52ff] rounded-lg"
                      />{" "}
                    </div>
                  </div>
                  <div className="lg:flex gap-x-4 mb-4 ">
                    <div className="form-control mx-2">
                      <label className="label ps-0 pb-2">
                        <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#8c52ff] ">
                          Recommended Age
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="age"
                        name="age"
                        className="input sma:h-10 input-bordered  outline-dotted cust:h-12 lg:w-[191px] outline-[#8c52ff] h-14 border-[#8c52ff] rounded-lg"
                      />{" "}
                    </div>
                    <div className="form-control  mx-2">
                      <label className="label ps-0 pb-2">
                        <span className="text-2xl sma:text-xl font-bold font-Barlow text-[#8c52ff] ">
                          Category
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Price"
                        name="pass"
                        className="input sma:h-10 input-bordered  outline-dotted cust:h-12 lg:w-[191px] outline-[#8c52ff]  h-14 border-[#8c52ff] rounded-lg"
                      />{" "}
                      <div className="my-2"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  flex-col h-[460px] lg:flex-row">
            <div className="lg:w-[500px]   items-center justify-center  flex ">
              {" "}
              <form
                onSubmit={"handleLogin"}
                className="card p-0 items-center flex sma:w-[320px] cust:w-[350px] mx-auto lg:w-[450px]   flex-shrink-0  shadow-2xl "
              >
                <div className="card-body lg:p-8 sma:p-0 w-[350px] lg:w-full ">
                  <div>
                    <textarea
                      name=""
                      placeholder="Enter Description Of Your Toy"
                      className="rounded-xl bg-transparent textarea-bordered textarea text-[#8c52ff] text-base lg:py-4 shadow shadow-[#8c52ff]  lg:mt-0 mx-auto lg:w-[384px] cust:w-[350px] w-[345px]"
                      id=""
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="form-control  w-full mt-6">
                    <button className="btn focus:text-black focus:bg-[#8c52ff] outline-[#8c52ff] text-[#8c52ff] btn-circle btn-outline outline-dotted uppercase font-bold font-Barlow tracking-widest sma:text-xl w-full  text-2xl  sma:h-10 h-16">
                      Upload
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
