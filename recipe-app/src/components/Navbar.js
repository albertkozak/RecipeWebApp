import React, { Component } from "react";

class Navigation extends Component {
  logout(e) {
    if (sessionStorage.getItem("auth-token") != null) {
      sessionStorage.clear();
      sessionStorage.setItem("isAuthorized", "No");
    }
  }
  render() {
    const isAllowed = sessionStorage.getItem("isAuthorized");
    // function Navigation() {

    return (
      <header class="header">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon" />
        </label>
        <ul class="menu">
          <li>
            <a href="/">Home</a>
          </li>

          {isAllowed == "yes" ? (
            <ul>
              <li>
                <a href="/Add">Add Recipe</a>
              </li>
              <li>
                <button onClick={this.logout}>Logout</button>
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
