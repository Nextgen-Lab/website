import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/custom-animation.css";
import "./assets/css/swiper-bundle.css";
import "./assets/css/nice-select.css";
import "./assets/css/flaticon.css";
import "./assets/css/meanmenu.css";
import "./assets/css/font-awesome-pro.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/spacing.css";
import "./assets/css/custom.css";
import "./assets/css/hover-reveal.css"
import './assets/css/swiper-bundle.css';


import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
