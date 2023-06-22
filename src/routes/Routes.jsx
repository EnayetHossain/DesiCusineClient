/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import ChefDetails from "../pages/Home/ChefDetails/ChefDetails";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Notfound from "../pages/NotFound/Notfound";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Notfound></Notfound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:chefId",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://chef-server-pied.vercel.app/chefs/${params.chefId}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <Notfound></Notfound>,
  },

  {
    path: "/register",
    element: <Register></Register>,
    errorElement: <Notfound></Notfound>,
  },
]);

export default router;
