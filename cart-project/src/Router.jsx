import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App/App";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/Checkout/Checkout";


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/Shop",
      element: <Shop />,
    },
    {
      path : "/Cart",
      element: <Cart />,
    },
    {
      path : "/Checkout",
      element: <CheckOut />
    },

  ]);

  return <RouterProvider router={router} />;
};

export default Router;