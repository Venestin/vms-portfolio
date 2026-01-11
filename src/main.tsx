import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css"; // animations AOS

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/"> {/* Important pour Vercel */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
