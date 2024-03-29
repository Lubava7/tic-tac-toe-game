import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,

  document.getElementById("root")
);

reportWebVitals();
