import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import ShopPage from "../pages/Shop";
import CartPage from "../pages/CartPage";
import DetailPage, { loader as loaderDetailPage } from "../pages/DetailPage";
import CheckoutPage from "../pages/Checkout";
import LoginPage from "../pages/Login";
import ResgisterPage from "../pages/Resgister";
import Layout from "../components/Layout/Layout";
import checkAuth from "../constants/auth";
import { loader as loaderLogout } from "../pages/Logout";

const routes = createBrowserRouter([
   {
      path: "/react03",
      //Đoạn này nè, là layout chung cho toanmf bộ web
      element: <Layout />,
      loader: checkAuth,
      children: [
         { index: true, element: <HomePage /> },
         {
            path: "shop",
            children: [
               { index: true, element: <ShopPage /> },
               {
                  path: ":productId",
                  element: <DetailPage />,
                  loader: loaderDetailPage,
               },
            ],
         },
         { path: "cart", element: <CartPage /> },
         { path: "checkout", element: <CheckoutPage /> },
         { path: "resgister", element: <ResgisterPage /> },
      ],
   },
   { path: "/react03/login", element: <LoginPage /> },
   { path: "/react03/logout", loader: loaderLogout },
]);

export default routes;
