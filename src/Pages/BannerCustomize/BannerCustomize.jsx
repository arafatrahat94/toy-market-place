import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTittle from "../../hooks";

const BannerCustomize = () => {
  useTittle("Banner Customize");
  // Initial value for the range input
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
  const [bannerImages, SetBannerImage] = useState([]);
  const refetch = () => {
    fetch(`https://toys-server-nu.vercel.app/ImageBanner`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetBannerImage(data);
      });
  };
  useEffect(() => {
    refetch();
  }, []);
  const getdata = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = form.name.value;
    const Description = form.Description.value;

    const Image_URL = form.Image_URL.value;
    const data = {
      Name: Name,
      Description: Description,
      Image_URL: Image_URL,
    };
    fetch(`https://toys-server-nu.vercel.app/ImageBanner`, {
      method: "POST",
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
          title: `new image added`,
        });
        refetch();
      });
    console.log(data);
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`https://toys-server-nu.vercel.app/DeleteImageBanner/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            console.log(data);
          });
      }
    });
  };
  return (
    <div className="mb-10">
      <div className="grid lg:grid-cols-2">
        <form onSubmit={getdata} className=" w-11/12 mx-auto rounded-2xl">
          <div>
            <div className=" flex-col sma:h-[200px] cust:h-[200px]   lg:flex-row">
              <div className="lg:w-full  lg:ps-4 cust:h-[460px] sma:h-[460px] lg:h-[550px] flex ">
                {" "}
                <div className="card  flex sma:w-[320px] cust:w-[350px] mx-auto  lg:w-full  rounded-lg flex-shrink-0  shadow-2xl ">
                  <div className=" p-2 lg:p-5   sma:p-0">
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
                        // ref={emailref}
                        className="input input-bordered lg:outline-dotted outline-[#D71317] sma:h-10 ps-2  lg:w-[400px] cust:h-12 h-14 border-[#D71317] rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  flex-col lg:h-[490px] h-[300px] lg:flex-row">
              <div className="lg:w-[500px] mt-2">
                {" "}
                <div className="card p-0 items-center flex sma:w-[320px] cust:w-[350px] mx-auto lg:w-[450px]   flex-shrink-0  shadow-2xl ">
                  <div className=" lg:p-8 sma:p-0 w-[350px] lg:w-full flex flex-col  ">
                    <div>
                      <textarea
                        name="Description"
                        placeholder="Enter Description Of Your Toy"
                        className="rounded-xl bg-transparent textarea-bordered flex  textarea text-[#D71317] text-base lg:py-4 shadow shadow-[#D71317] bg-white lg:mt-0 mx-auto lg:w-[400px] cust:w-[320px] sma:w-[305px]"
                        id=""
                        rows="6"
                      ></textarea>
                    </div>
                    <div className="form-control  w-[200px] mx-auto lg:w-full pb-4 mt-6">
                      <button className="btn focus:text-black focus:bg-[#D71317] outline-[#D71317] text-[#D71317] btn-circle btn-outline lg:outline-dotted uppercase font-bold font-Barlow tracking-widest sma:text-xl w-full lg:ms-2 text-2xl  sma:h-10 h-16">
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <form onSubmit={getdata} className=" w-11/12 mx-auto rounded-2xl">
          <div>
            <div className=" ">
              <h1 className="text-2xl text-red-600 font-bold text-center font-Barlow">
                ALL Uploaded Banner Image
              </h1>
              <hr className="mt-4 outline-dotted outline-red-500" />

              <div className="">
                {bannerImages.map((x) => (
                  <>
                    <div className="my-2 bg-red-100 p-1 rounded-lg flex justify-between">
                      <img
                        className="w-32 rounded-lg border shadow"
                        src={x.Image_URL}
                        alt=""
                      />
                      <div className="flex sma:w-[200px] justify-between items-center ">
                        <h1 className="text-2xl mx-2 font-Barlow font-bold text-red-500">
                          {x.Name}
                        </h1>
                        <div onClick={() => handleDelete(x._id)}>
                          <img
                            width="54"
                            height="54"
                            src="https://img.icons8.com/3d-fluency/94/trash.png"
                            alt="trash"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerCustomize;
