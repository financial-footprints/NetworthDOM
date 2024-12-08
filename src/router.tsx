import { Routes, Route } from "react-router-dom";
import { HomePage } from "./routes/home/page";
import { ImportPage } from "./routes/import/page";
import { RouteConfig } from "./utils/types";
import { ErrorPage } from "./routes/error/page";
import { FaHome } from "react-icons/fa";
import { RiImportFill } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";
import { FiscalAccountsPage } from "./routes/fiscal_accounts/page";

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <HomePage />,
    label: "Home",
    sidebar: {
      show: true,
      icon: <FaHome />,
    },
    errorElement: <ErrorPage />,
  },
  {
    path: "/fiscal_accounts",
    element: <FiscalAccountsPage />,
    label: "Fiscal Accounts",
    sidebar: {
      show: true,
      icon: <BsBank2 />,
    },
    errorElement: <ErrorPage />,
  },
  {
    path: "/import",
    element: <ImportPage />,
    label: "Import",
    sidebar: {
      show: true,
      icon: <RiImportFill />,
    },
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage type="404" />,
    label: "Error",
    sidebar: {
      show: false,
    },
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
