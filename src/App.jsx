import React from "react";
import Signup from "./Signup";
import "./App.css";
import { Link } from "react-router";
function App() {
  return (
    <div className="container">
      <Link to={"signup"}>go to SIgn up page</Link>
      <Link to={"login"}>go to login page</Link>
    </div>
  );
}

export default App;
