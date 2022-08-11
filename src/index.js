import React from "react";
import ReactDOM from "react-dom/client";
// Css import
import "./index.css";
// Component import
import App from "./App";
// Context import
import { ContextProvider } from "./contexts/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);
