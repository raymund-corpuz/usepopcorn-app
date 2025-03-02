import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App1 from "./App-v2.jsx";

// import StarRating from "./StarRating";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App1 />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} /> */}
  </StrictMode>
);
