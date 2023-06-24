import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Protected } from "./components/layout/Protected";
import {
  SignIn,
  SignUp,
  Address,
  Home,
  FoodDetail,
  Payment,
  PaymentDetail,
  Order,
  Profile,
} from "./pages";
import "./index.css";
import store from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <FoodDetail />,
  },
  {
    path: "/payment",
    element: (
      <Protected>
        <Payment />
      </Protected>
    ),
  },
  {
    path: "/orders",
    element: (
      <Protected>
        <Order />
      </Protected>
    ),
  },
  {
    path: "/order/:id",
    element: (
      <Protected>
        <PaymentDetail />
      </Protected>
    ),
  },
  {
    path: "/account",
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: (
      <Protected>
        <SignIn />
      </Protected>
    ),
  },
  {
    path: "/register",
    element: (
      <Protected>
        <SignUp />
      </Protected>
    ),
  },
  {
    path: "/register/address",
    element: (
      <Protected>
        <Address />
      </Protected>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
