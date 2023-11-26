import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import "./bootstrap.css";
import "./bootstrap-grid.min.css";
import "./bootstrap-utilities.min.css";
import "./all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);