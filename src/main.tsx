import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "./index.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    
  </StrictMode>
);
