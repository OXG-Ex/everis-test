import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {App} from "./app/ui/App";
import "./shared/styles/_base.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
