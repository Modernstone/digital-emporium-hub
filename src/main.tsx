
import React from "react";
import ReactDOM from "react-dom/client";
import "./polyfills"; // Import polyfills first
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
