import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import UsuarioProvider from "./context/UsuarioProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsuarioProvider>
        <App />
      </UsuarioProvider>
    </BrowserRouter>
  </React.StrictMode>
);
