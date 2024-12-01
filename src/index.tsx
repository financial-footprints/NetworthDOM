import "@/assets/styles/base.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./router";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
