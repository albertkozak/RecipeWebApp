import React, { Component } from "react";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar">
//         <a href="/">Home</a>
//         <a href="/login">Login</a>
//         <a href="/register">Register</a>
//       </nav>
//     );
//   }
// }

function Navigation() {
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
