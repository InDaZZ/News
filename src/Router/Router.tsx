import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import { routePaths, EAppRoutes } from "./config";
import News from "../News/News";
import Modal from "../Modal/Modal";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: <Layout key="Layout" />,
      children: [
        {
          path: routePaths[EAppRoutes.MAIN],
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
