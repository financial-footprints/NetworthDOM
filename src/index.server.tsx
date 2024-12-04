import React from "react";
import ReactDOMServer from "react-dom/server";
import { HomePage } from "./routes/home/page";

// Use "path" when there are multiple routes
// Example: if path is '/', it should render HomePage
export function render(path: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>
  );
}
