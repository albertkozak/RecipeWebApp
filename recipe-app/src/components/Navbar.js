import React, { Component } from "react";
import logo from "../images/logo3s.png";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      isAuthorized: false,
    };
  }
  componentWillMount() {
    if (sessionStorage.getItem("isAuthorized") == "yes") {
      this.setState({ isAuthorized: true });
    }
  }
  logout(e) {
    if (sessionStorage.getItem("auth-token") != null) {
      sessionStorage.clear();
      sessionStorage.setItem("isAuthorized", "No");
    }
  }
  render() {
    return (
      <header class="header">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon" />
        </label>
        <ul class="menu">
          <li>
            <a href="/">Home</a>
          </li>
          {this.state.isAuthorized ? (
            <ul>
              <li>
                <a href="/Add">Add Recipe</a>
              </li>
              <li>
                <a href="/Logout">Logout</a>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </ul>
          )}
        </ul>
      </header>
    );
  }
}

export default Navigation;
