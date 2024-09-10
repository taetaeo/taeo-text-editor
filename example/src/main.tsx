import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import "vite/modulepreload-polyfill";
import "./app.css";
// import "./text.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
