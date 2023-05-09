import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import TodoApp from "./components/TodoApp.js";
import Navbar from "./components/Navbar.js";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <Navbar />
    <TodoApp />
  </React.StrictMode>
);
