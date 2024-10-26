import React from "react";
import ReactDOM from "react-dom/client";
import "./estilos/App.css";
import App from "./App"; // Componente principal de la aplicación

// Renderizado para la página principal (index.html)
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
