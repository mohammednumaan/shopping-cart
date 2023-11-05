import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App/App";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <App />,
    },
    {
      path: "Shop",
      element: <Shop />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;