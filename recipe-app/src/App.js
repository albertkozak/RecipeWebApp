import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveRecipe from "./components/recipe/SaveRecipe";
import Navbar from "./components/Navbar";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register.js";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Recipe from "./components/recipe/Recipe";
import "./App.css";
//require("dotenv").config();

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route path="/Add" component={SaveRecipe} />
        </div>
      </Router>
    </div>
  );
};

export default App;
