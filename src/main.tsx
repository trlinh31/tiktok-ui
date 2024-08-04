import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>
);
