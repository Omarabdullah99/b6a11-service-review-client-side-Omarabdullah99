import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Services from "../component/Services/Services";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Main from "../layout/Main";
import Blog from "../component/Blog/Blog";
import ServiceDetails from "../component/ServicesDetails/ServiceDetails";
import MyReview from "../component/MyReview/MyReview";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import AddServices from "../component/AddServices/AddServices";
import Update from "../component/Update/Update";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch(
            "https://b6a11-service-review-server-side-omarabdullah99.vercel.app/services"
          ),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-omarabdullah99.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-omarabdullah99.vercel.app/review/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
