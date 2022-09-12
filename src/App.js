import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import TonDesktop from "./screens/TonDesktop";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={TonDesktop} />
      <Route path="/TonDesktop/" exact component={TonDesktop} />
    </Router>
  );
}

export default App;
