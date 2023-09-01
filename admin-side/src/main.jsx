import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import "./index.css";

import { Provider } from "react-redux";
import store from "./stores/index.js";
import RootLayout from "./routes/RootLayout.jsx";
import Container from "./components/Container.jsx";
import ProductsPage from "./pages/ProductPage.jsx";
import AddProductPage from "./pages/AddProductPage.jsx";
import EditProductPage from "./pages/EditProductPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import EditCategoryPage from "./pages/EditCategoryPage.jsx";
import AddCategoryPage from "./pages/AddCategoryPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

const router = createBrowserRouter([
  // ini adalah nested routes
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    loader: () => {
      let token = localStorage.getItem("access_token");
      if (!token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: (
          <Container>
            <ProductsPage></ProductsPage>
          </Container>
        ),
        children: [],
      },
      {
        path: "/products",
        element: (
          <Container>
            <ProductsPage></ProductsPage>
          </Container>
        ),
      },
      {
        path: "/products/addProduct",
        element: (
          <Container>
            <AddProductPage></AddProductPage>
          </Container>
        ),
      },
      {
        path: "/products/:productId/edit",
        element: (
          <Container>
            <EditProductPage></EditProductPage>
          </Container>
        ),
      },
      {
        path: "/category",
        element: (
          <Container>
            <CategoryPage></CategoryPage>
          </Container>
        ),
      },
      {
        path: "/category/addCategory",
        element: (
          <Container>
            <AddCategoryPage></AddCategoryPage>
          </Container>
        ),
      },
      {
        path: "/category/:categoryId/edit",
        element: (
          <Container>
            <EditCategoryPage></EditCategoryPage>
          </Container>
        ),
      },
      {
        path: "/register",
        element: (
          <Container>
            <RegisterPage></RegisterPage>
          </Container>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
    loader: () => {
      let token = localStorage.getItem("access_token");
      if (token) {
        return redirect("/");
      }
      return null;
    },
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
