import React from "react";
import ReactDOM from "react-dom/client";
//style
import "./index.css";
// import Header from "@/components/header/Header.tsx";
// import App from "./App.tsx";

/* Routing */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "@/ErrorPage";

import App from "@/App";

import ROUTES from "@/routes/Routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: ROUTES,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
