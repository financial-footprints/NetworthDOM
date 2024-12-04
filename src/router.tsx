import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ImportPage } from "@/routes/import/page";
import { ErrorPage } from "@/routes/error/page";
import { HomePage } from "@/routes/home/page";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/import",
      element: <ImportPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
