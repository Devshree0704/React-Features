import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FormContextProvider from "./Hooks/FormContext.jsx";

createRoot(document.getElementById("root")).render(
  <FormContextProvider>
    <App />
  </FormContextProvider>
);
