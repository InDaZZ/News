import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import { routePaths, EAppRoutes } from "./config";
import News from "../News/News";
import Modal from "../Modal/Modal";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: routePaths[EAppRoutes.MAIN],
      element: <Layout key="Layout" />,
      children: [
        {
          path: routePaths[EAppRoutes.NEWS],
          element: [<News key="News" />],
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};
