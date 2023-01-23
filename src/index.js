import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
<nav>
<ul>
<li><Link to="/Home">Home</Link></li>
<li> <Link to="/About">About</Link></li>
<li> <Link to="/Information">Information</Link></li>
<li> <Link to="/Contact">Contact</Link></li>
</ul>
</nav>
    <App />
  </BrowserRouter>
);
