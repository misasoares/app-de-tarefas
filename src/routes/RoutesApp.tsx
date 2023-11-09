import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Completes from "../pages/Completes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar children={<Home />} />,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: "/completes",
    element: <Navbar children={<Completes />} />,
  },
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
