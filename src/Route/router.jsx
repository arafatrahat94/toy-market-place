import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Alltoys from "../Pages/Alltoys/Alltoys";
import Mytoys from "../Pages/Mytoys/Mytoys";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AllToys",
        element: <Alltoys></Alltoys>,
      },
      {
        path: "/AddToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/MyToys",
        element: <Mytoys></Mytoys>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
