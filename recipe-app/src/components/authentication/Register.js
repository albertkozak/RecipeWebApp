﻿import React, { Component } from "react";
import FormErrors from "../FormErrors";
import Validation from "../utilities/Validation";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      errors: {
        blankfield: false,
        matchedpassword: false,
      },
    };
  }

  handleRegister = async (event) => {
    event.preventDefault();
    //Form validation
    this.clearErrors();
    const error = Validation(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error },
      });
    }
    //fetch api
    const URL = "https://ssdrecipeapi.azurewebsites.net/api/auth/register";
    await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: this.state.email,
        Password: this.state.password,
      }),
    })
      .then((json) => {
        //alert(JSON.stringify(json));
        window.location.reload(false);
        this.props.history.push("/");
      })
      .catch(function (error) {
        alert(error);
      });
    sessionStorage.setItem("isAuthorized", "yes");
  };

  clearErrors = () => {
    this.setState({
      errors: {
        blankfield: false,
        matchedpassword: false,
      },
    });
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="reg-form">
          <FormErrors formerrors={this.state.errors} />
          <h1>Register</h1>
          <form onSubmit={this.handleRegister}>
            <div className="field">
              <input
                className="input"
                type="text"
                id="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.onInputChange}
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
                placeholder="Email"
                value={this.state.email}
                onChange={this.onInputChange}
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
                onChange={this.onInputChange}
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
                placeholder="Confirm Password"
                value={this.state.confirmpassword}
                onChange={this.onInputChange}
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
      </div>
    );
  }
}
export default Register;
