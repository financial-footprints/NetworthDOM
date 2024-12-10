import "@/assets/styles/base.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { Layout } from "./components/Layout/Layout";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

ReactDOM.hydrateRoot(
  rootElement,
  <React.StrictMode>
    <BrowserRouter>
      <Layout children={<AppRouter />} />
    </BrowserRouter>
  </React.StrictMode>
);
