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

// удалим сверху импорт и импортируем компонент через lazy
const Menu = lazy(() => import("./pages/Menu/Menu"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
          // const { data } = await axios.get<Product>(`${PREFIX}/products/${params.id}`);
          // return data;
        },
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
