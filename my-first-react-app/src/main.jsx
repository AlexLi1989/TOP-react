import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./components/Greeting.jsx";
import { Recipe } from "./components/Recipe.jsx";
import Practice from "./components/Practice";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Practice />
  </StrictMode>,
);
