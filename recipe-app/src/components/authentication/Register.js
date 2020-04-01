﻿import React, { Component } from "react";
import FormErrors from "../FormErrors";
import Validation from "../utilities/Validation";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      errors: {
        blankfield: false,
        matchedpassword: false
      }
    };

    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(event) {
    console.log(this.set.email);
    //fetch api goes here
  }

  clearErrors = () => {
    this.setState({
      errors: {
        blankfield: false,
        matchedpassword: false
      }
    });
  };

  render() {
    return (
      <div className="reg-form">
        <h1>Register</h1>
        <FormErrors formerrors={this.state.errors} />
        <form onSubmit={this.handleRegister}>
          <div className="field">
            <input
              className="input"
              type="text"
              id="username"
              placeholder="Enter username"
              value={this.state.username}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <div className="field">
            <input
              className="input"
              type="email"
              id="email"
              placeholder="Enter email"
              value={this.state.email}
              ref={emailInput => (this.email = emailInput)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
          <div className="field">
            <input
              className="input"
              type="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <div className="field">
            <input
              className="input"
              type="password"
              id="confirmpassword"
              placeholder="Confirm password"
              value={this.state.confirmpassword}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">Register</button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
export default Register;
