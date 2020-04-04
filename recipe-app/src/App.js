import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveRecipe from "./components/recipe/SaveRecipe";
import Navbar from "./components/Navbar";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register.js";
import Home from "./components/Home";
import Logout from "./components/authentication/Logout";
import { useEffect, useState } from "react";
import Recipe from "./components/recipe/Recipe";
import "./App.css";
//require("dotenv").config();

export default class App extends Component {
  render() {
    const isAllowed = sessionStorage.getItem("isAuthorized");
    console.log(`isAllowed: ${isAllowed}`);
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            {isAllowed == "yes" ? (
              <div>
                <Route path="/Add" component={SaveRecipe} />
              </div>
            ) : (
              <div>
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
              </div>
            )}
          </div>
        </Router>
      </div>
    );
  }
}
