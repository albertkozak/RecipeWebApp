import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <a href='/'>Home</a>
        <a href='/login'>Login</a>
      </nav>
    );
  }
}
