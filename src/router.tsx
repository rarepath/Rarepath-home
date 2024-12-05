import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./pages/home/Home";
import DefaultLayout from "./layout/DefaultLayout";
import Error from "./pages/error/Error";

const routerElements: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
];

export default createBrowserRouter(routerElements);
