import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "./Componets/Navbar";
//import Details from "./Componets/Details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
       <App />
       <Navbar

       />
     /</BrowserRouter>
     
   )
