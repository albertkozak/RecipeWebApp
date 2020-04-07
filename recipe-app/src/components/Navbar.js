import React, { Component } from "react";
import logo from "../images/logo3s.png";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      isAuthorized: false,
    };
  }
  componentDidMount() {
    if (sessionStorage.getItem("isAuthorized") === "yes") {
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
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          {this.state.isAuthorized ? (
            <ul>
              <li>
                <a href="/Recipe">Add Recipe</a>
              </li>
              <li>
                <a href="/List">List Recipes</a>
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
