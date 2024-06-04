import {
  createBrowserRouter,
} from "react-router-dom";
import BasePage from "../pages/base-page";
import NotFoundPage from "../pages/not-found-page";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ProductsPage from "../pages/products-page";
import DetailsPage from "../pages/details-page";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <BasePage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "cart",
          children: [
            {
              path: "",
              element: <CartPage />
            },
            {
              path: "details",
              element: <DetailsPage />
            }
          ]
        },
        {
          path: "products",
          element: <ProductsPage />
        }
      ]
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
  ]
);