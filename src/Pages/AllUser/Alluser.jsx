import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import SIngleUser from "./SIngleUser";
import useTittle from "../../hooks";
const Alluser = () => {
  useTittle("All User");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(true);
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
  const refetch = () => {
    if (loading === false) {
      fetch(`https://toys-server-nu.vercel.app/Allusers?email=${user?.email}`, {
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
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this user!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-server-nu.vercel.app/DUser/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Toast.fire({
              icon: "success",
              title: `User Deleted`,
            });
            refetch();
          });
      }
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if (loading === false) {
      fetch(`https://toys-server-nu.vercel.app/Allusers?email=${user?.email}`, {
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
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  console.log(localStorage.getItem("toy-access"));
  return (
    <div>
      {loading ? (
        <>
          <div className="mx-auto flex items-center">
            <span className="min-h-[80vh] loading-dots  mx-auto loading  loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          <div className="w-9/12 min-h-screen mx-auto ">
            <h1 className="text-center text-4xl font-Barlow uppercase font-bold text-red-600">
              All My Uploaded Toys
            </h1>
            {myToys?.map((x, i) => (
              <SIngleUser
                data={x}
                handleDelete={handleDelete}
                key={i}
              ></SIngleUser>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Alluser;
