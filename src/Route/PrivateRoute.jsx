import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import animation from "../assets/VbbjN4vsXz.json";
import Lottie from "lottie-react";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <Lottie
        className="min-h-screen flex items-center w-56 mx-auto"
        animationData={animation}
      />
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
