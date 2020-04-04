import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar/index';
import "./pages/Home.css";
import Contact from "./pages/Contact"

function App() {
  return (
    <div>
  <Navbar/>
     
    <Router>
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
