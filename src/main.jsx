import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Restaurants from "./components/Restaurants";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Restaurants />
  </StrictMode>,
);
