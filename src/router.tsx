import { Routes, Route } from "react-router-dom";
import { HomePage } from "./routes/home/page";
import { ImportPage } from "./routes/import/page";
import { RouteConfig } from "./utils/types";
import { ErrorPage } from "./routes/error/page";

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <HomePage />,
    label: "Home",
    showInSidebar: true,
    errorElement: <ErrorPage />,
  },
  {
    path: "/import",
    element: <ImportPage />,
    label: "Import",
    showInSidebar: true,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage type="404" />,
    label: "Error",
    showInSidebar: false,
    errorElement: <ErrorPage />,
  },
];

export function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
          errorElement={route.errorElement}
        />
      ))}
    </Routes>
  );
}
