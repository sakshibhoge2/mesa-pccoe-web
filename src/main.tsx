import {
  StrictMode,
} from "react";

import {
  createRoot,
} from "react-dom/client";

import {
  HashRouter,
} from "react-router-dom";

import App from "./App";

import "./index.css";
import "./final-polish.css";


const savedTheme =
  localStorage.getItem(
    "mesa-theme"
  );

const lightMode =
  savedTheme ===
    "light" ||
  savedTheme ===
    "editorial";


document.documentElement
  .classList.toggle(
    "dark",
    !lightMode
  );

document.documentElement
  .dataset.theme =
  lightMode
    ? "editorial"
    : "night";


createRoot(
  document.getElementById(
    "root"
  )!
).render(
  <StrictMode>

    <HashRouter>

      <App />

    </HashRouter>

  </StrictMode>
);