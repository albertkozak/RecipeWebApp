import React, { Component } from "react";
import logo from "../images/logo3s.png";

function Navigation() {
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
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
