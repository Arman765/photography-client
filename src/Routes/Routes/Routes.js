import { createBrowserRouter } from "react-router-dom";
import AddSevice from "../../AddService/AddSevice";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import Edit from "../../Pages/Reviews/Edit";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allservices",
        element: <AllServices></AllServices>,
        loader: () =>
          fetch(
            "https://sports-photographer-server-beta.vercel.app/services/allservices"
          ),
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://sports-photographer-server-beta.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoutes>
            <Reviews></Reviews>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/edit/:id",
        element: <Edit></Edit>,
        loader: ({ params }) =>
          fetch(
            `https://sports-photographer-server-beta.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoutes>
            <AddSevice></AddSevice>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch(
            "https://sports-photographer-server-beta.vercel.app/services/allservices"
          ),
      },
    ],
  },
]);
