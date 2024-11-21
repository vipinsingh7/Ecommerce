import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "../components/Layout";
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
