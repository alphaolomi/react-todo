import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import AppFooter from "./components/layout/Footer";

// import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <AppFooter />
        </div>
      </div>
    </Router>
  );
};

export default App;
