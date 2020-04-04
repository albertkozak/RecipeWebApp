import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveRecipe from "./components/recipe/SaveRecipe";
import Navbar from "./components/Navbar";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register.js";
import Home from "./components/Home";
import Logout from "./components/authentication/Logout";
import "./App.css";
//require("dotenv").config();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthorized: false,
    };
  }
  componentDidMount() {
    console.log("start");
    if (sessionStorage.getItem("isAuthorized") == "yes") {
      this.setState({ isAuthorized: true });
    }
  }
  render() {
    const isAllowed = sessionStorage.getItem("isAuthorized");
    console.log(`isAllowed: ${isAllowed}`);
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            {this.state.isAuthorized ? (
              <div>
                <Route path="/Add" component={SaveRecipe} />
              </div>
            ) : (
              <div>
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route path="/Logout" component={Logout} />
              </div>
            )}
          </div>
        </Router>
      </div>
    );
  }
}
