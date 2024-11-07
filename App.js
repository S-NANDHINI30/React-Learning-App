import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import AppLayout from "./src/Layout/AppLayout";
import AuthLayout from "./src/Layout/AuthLayout";
import Register from "./src/Auth/Register";
import Login from "./src/Auth/Login";
import RestaurantBody from "./src/Components/Pages/Body";
import About from "./src/Components/Pages/About";
import Contact from "./src/Components/Pages/Contact";
import RestaurantMenu from "./src/Components/Content/RestaurantMenu";
import Error from "./src/Components/Pages/Error";
import Cart from "./src/Components/Pages/Cart";
import appStore from "./utils/AppStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" replace />, // Redirect root path to login
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "signUp", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { path: "/app", element: <RestaurantBody /> },
      { path: "restaurants", element: <RestaurantBody /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "/app/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PrimeReactProvider>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </PrimeReactProvider>
);
