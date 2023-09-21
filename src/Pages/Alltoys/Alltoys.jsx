import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from "moment/moment";
import useTittle from "../../hooks";

const ToyDetails = () => {
  useTittle("Toy Details");
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { user } = useContext(AuthContext);
  console.log(user);
  // const [review, ] = useState([]);
  const [allReviews, setAllReviews] = useState([]);

  const loader = useLoaderData();
  const {
    Image_URL,
    Name,
    MadeIn,
    Recommended_Age,
    Category,
    Price,
    Quantity,
    Description,
  } = loader;
  console.log(loader);

  // ...

  const refetch = () => {
    fetch(`https://toys-server-nu.vercel.app/Review/${loader._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAllReviews(data); // Set all reviews
          // Set current reviews
        } else {
          console.error("Invalid API response for reviews:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  };

  useEffect(() => {
    refetch();
  }, []);

  const handleReview = (event) => {
    event.preventDefault();
    const reviews = event.target.reviews.value;

    const data = {
      Name: user.displayName,
      Pic: user.photoURL,
      Reviews: reviews,
      Toy_id: loader._id,
      Date: moment().subtract(10, "days").calendar(),
      Time: moment().format("LT"),
    };

    fetch(`https://toys-server-nu.vercel.app/Review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (Array.isArray(response)) {
          setAllReviews(response); // Update all reviews
          // Update current reviews
        } else {
          console.error("Invalid API response for posting review:", response);
        }
        refetch(); // Refetch reviews
      })
      .catch((error) => {
        console.error("Error posting review:", error);
      });

    event.target.reset();
  };

  // ...

  console.log(moment().subtract(10, "days").calendar());
  console.log(moment().format("LT"));

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-3xl font-bold font-Anton text-red-700 mb-8">
        Toy Details / {Name}
      </h1>
      <div className="grid lg:grid-cols-2 w-11/12 mx-auto gap-y-4">
        <div className="w-9/12 flex rounded-lg mx-auto">
          <img
            src={Image_URL}
            alt=""
            className="rounded-2xl ring-red-700 ring"
          />
        </div>
        <div
          data-aos="fade-right"
          className="bg-white h-[260px] p-4 rounded-lg ring-4 ring-red-500 bg-opacity-70"
        >
          <h1 className="font-Barlow uppercase  text-red-500 font-bold sma:text-2xl text-3xl">
            {Name} from: {Category}
          </h1>
          <h1 className="font-Barlow lg:text-xl  text-red-500 font-bold mt-2">
            Description {Description.slice(0, 240)}
          </h1>

          <div className="mt-20">
            {user ? (
              ""
            ) : (
              <>
                <div className="shadow flex justify-center shadow-red-500 lg:w-[350px]  p-4 rounded-lg">
                  <h1 className="text-xl font-semibold font-Barlow">
                    Please{" "}
                    <Link
                      to="/Login"
                      className="btn bg-red-500 px-4 text-white font-bold "
                    >
                      {" "}
                      Login
                    </Link>{" "}
                    To Give Review
                  </h1>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={`${user ? "" : "lg:mt-24 mt-10"}`}>
        {user ? (
          <>
            <form
              onSubmit={handleReview}
              className="card-body lg:w-9/12 mx-auto"
            >
              <h1 className="text-center text-xl font-bold text-red-500">
                GIVE REVIEW
              </h1>
              <div className="form-control lg:w-full">
                <textarea
                  name="reviews"
                  id=""
                  className="textarea textarea-bordered"
                  rows="5"
                  placeholder="TYPE YOUR REVIEW"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn w-7/12 mx-auto bg-red-500 text-white">
                  POST Review
                </button>
              </div>
            </form>
          </>
        ) : (
          ""
        )}
        <h1 className="lg:text-2xl text-red-500 font-Barlow text-center font-bold  italic">
          Reviews Given By the customer For This Item
        </h1>

        <div className="grid mt-6 gap-x-4 lg:grid-cols-3 w-11/12 mx-auto">
          {allReviews?.map((x) => (
            <div
              key={x.id}
              className="ring ring-red-600 flex flex-col  w-full rounded-2xl my-2 text-red-600  justify-center h-[220px]"
            >
              <div className="gap-x-6  items-center flex justify-start ms-6 mt-2">
                <img
                  src={x.Pic}
                  className="rounded-full w-12 ring-4 ring-red-600"
                  alt=""
                />
                <h1 className=" text-xl font-bold font-Barlow">
                  {x.Name.slice(0, 20)}
                </h1>
              </div>
              <div className="mx-2 mt-4  text-center font-Barlow items-center justify-center flex font-bold text-xl">
                <h1>&quot;{x.Reviews}&quot;</h1>
              </div>
              <div className="mx-2 mt-3  text-center font-Barlow items-center justify-end flex font-bold ">
                <h1>Date: {x.Date}</h1>
              </div>
              <div className="mx-2 text-center font-Barlow items-center justify-end flex font-bold ">
                <h1>Time: {x.Time}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex-col flex mx-auto my-4 w-11/12 lg:w-9/12">
        <div className="collapse rounded  collapse-plus join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title lg:text-xl font-bold font-Barlow uppercase text-start border bg-red-500 text-white border-red-400  tracking-widest">
            Toy Details
          </div>
          <div className="collapse-content border  border-red-500">
            {Description}
          </div>
        </div>
        <div className="collapse rounded  collapse-plus join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title lg:text-xl font-bold font-Barlow uppercase text-start border bg-red-500 text-white border-red-400  tracking-widest">
            Order Information
          </div>
          <div className="collapse-content border border-red-500">
            At Toodle Toys, we understand that fast and reliable shipping is
            important to our customers. That is why we make it our top priority
            to ship all in-stock orders within 1-2 business days of purchase.
            Our regular processing time is between 8AM and 9AM EST, so you can
            expect your order to be processed and shipped out quickly during
            that time frame. We use trusted shipping partners to ensure that
            your order arrives on time and in the best possible condition. If
            you have any questions or concerns about the shipping process,
            please do not hesitate to reach out to our customer service team for
            assistance.
          </div>
        </div>
        <div className="collapse rounded  collapse-plus join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title lg:text-xl font-bold font-Barlow uppercase text-start border bg-red-500 text-white border-red-400  tracking-widest">
            Ask Question
          </div>
          <div className="collapse-content border border-red-500">
            <div className="card flex-shrink-0 w-full  shadow-2xl ">
              <div className="card-body flex justify-center items-center">
                <div className="form-control gap-2 flex flex-row w-full ">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="NAME"
                      className="input w-full input-bordered"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="EMAIL"
                      className="input w-full input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    className="textarea textarea-bordered"
                    rows="7"
                    placeholder="TYPE YOUR MESSAGE"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-red-500 text-white">Asq now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
