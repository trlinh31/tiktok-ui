import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Provider } from "react-redux";
import { store } from "@/redux/store.ts";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <ThemeProvider>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </ThemeProvider>
  </NextUIProvider>
);
