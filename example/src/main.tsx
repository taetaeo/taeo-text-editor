import React from "react";
import ReactDOM from "react-dom/client";

import "vite/modulepreload-polyfill";

import "./app.scss";
import "./app.css";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
