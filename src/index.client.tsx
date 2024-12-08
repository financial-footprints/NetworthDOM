import "@/assets/styles/base.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { Navbar } from "./components/Navbar/Navbar";
import ErrorBoundary from "./components/Error/Boundary/ErrorBoundary";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

ReactDOM.hydrateRoot(
  rootElement,
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Navbar />
        <AppRouter />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
