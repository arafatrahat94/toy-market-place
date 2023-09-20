import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Alltoys from "../Pages/Alltoys/Alltoys";
import Mytoys from "../Pages/Mytoys/Mytoys";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import TOyDetails from "../Pages/Alltoys/Alltoys";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Shared/Error";
import ViewAll from "../Pages/ViewAll/ViewAll";
import CategoryWIse from "../Pages/CategoryWise/CategoryWIse";
import CategoryWIseDc from "../Pages/Home/ShopByCategory/ShopByCategoryDc";
import CategoryWIseMarvel from "../Pages/CategoryWise/CategoryWiseMarvel";
import BannerCustomize from "../Pages/BannerCustomize/BannerCustomize";
import Alluser from "../Pages/AllUser/Alluser";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        path: "/Update/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://toys-server-nu.vercel.app/Details/${params.id}`),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/Anime",
        element: <CategoryWIse></CategoryWIse>,
      },
      {
        path: "/Dc",
        element: <CategoryWIseDc></CategoryWIseDc>,
      },
      {
        path: "/Marvel",
        element: <CategoryWIseMarvel></CategoryWIseMarvel>,
      },
      {
        path: "/ViewAll",
        element: <ViewAll></ViewAll>,
      },
      {
        path: "/AllUser",
        element: <Alluser></Alluser>,
      },
      {
        path: "/Banner",
        element: <BannerCustomize></BannerCustomize>,
      },
      {
        path: "/TOyDetails/:id",
        element: (
          <PrivateRoute>
            <TOyDetails></TOyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toys-server-nu.vercel.app/Details/${params.id}`),
      },
    ],
  },
]);

export default router;
