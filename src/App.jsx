import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./feature/menu/Menu";
import AppLayout from "./ui/AppLayout";
import Cart from "./feature/cart/Cart";
import CreateOrder from "./feature/order/CreateOrder";
import Order from "./feature/order/Order";
import { loader as menuLoader } from "./feature/menu/Menu";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />
      },
      {
        path: '/order/:orderId',
        element: <Order />
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
