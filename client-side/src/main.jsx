import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import "./index.css";

import { Provider } from "react-redux";
import store from "./store/index.js";
import RootLayout from "./routes/RootLayout.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";

const router = createBrowserRouter([
  // ini adalah nested routes
  {
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <ProductPage></ProductPage>,
      },
      {
        path: "/:productId",
        element: <DetailPage></DetailPage>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
