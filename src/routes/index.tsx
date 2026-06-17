import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layout/RootLayout";
import NotFound from "@/pages/NotFound";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
