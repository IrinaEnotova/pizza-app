import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, defer } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";
import "./index.css";
import { Layout } from "./layout/Layout/Layout";
import { ProductPage } from "./pages/Product/Product";
import { PREFIX } from "./helpers/API";
import axios from "axios";
import { Product } from "./interfaces/product.interface";
import { AuthLayout } from "./layout/Auth/AuthLayout";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { RequireAuth } from "./helpers/RequireAuth";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Success } from "./pages/Success/Success";

const Menu = lazy(() => import("./pages/Menu/Menu"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
        errorElement: <>ERROR!</>,
        loader: async ({ params }) => {
          return defer({
            data: axios.get<Product>(`${PREFIX}/products/${params.id}`).then((data) => data),
          });
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
