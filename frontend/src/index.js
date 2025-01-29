import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // React.StrictMode is for development only 
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
