import { createBrowserRouter } from "react-router-dom";

import "../scss/main.scss";

import MainLayout from "../layouts/Main";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Pizza from "../pages/Pizza";
import Order from "../pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/pizza/:id",
        element: <Pizza />,
      },
      {
        path: "/order/:id",
        element: <Order />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
