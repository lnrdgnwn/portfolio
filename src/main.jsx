import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LenisScroll from "./lib/LenisScroll.jsx";
import Home from "./pages/Home.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LenisScroll />
    <Home />
  </StrictMode>
);
