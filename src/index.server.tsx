import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { Navbar } from "./components/Navbar/Navbar";
import ErrorBoundary from "./components/Error/Boundary/ErrorBoundary";
import { Layout } from "./components/Layout/Layout";

// Use "path" when there are multiple routes
// Example: if path is '/', it should render HomePage
export function render(path: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={path}>
        <Layout children={<AppRouter />} />
      </StaticRouter>
    </React.StrictMode>
  );
}
