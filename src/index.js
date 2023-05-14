import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModeContextProvider } from "./context/ModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModeContextProvider>
      <App />
    </ModeContextProvider>
  </React.StrictMode>
);
