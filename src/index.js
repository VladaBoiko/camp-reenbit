import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) git remote add camp-reenbit https://github.com/VladaBoiko/camp-reenbit.git
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals https://github.com/VladaBoiko/camp-reenbit.git
reportWebVitals();
