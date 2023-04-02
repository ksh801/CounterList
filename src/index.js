import React from "react";
import reactdom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";


reactdom.render(<App />, document.getElementById("root")); // same result as above
