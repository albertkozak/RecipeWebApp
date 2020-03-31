﻿import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validation from "../utilities/Validation";


export class Register extends Component{
  constructor() {
    super();
    this.state = {
            username = "",
            email = "",
            password = "",
            confirmpassword = "",
            errors: {
              blankfield: false,
              matchedpassword: false
            }
        };

        this.username = this.username.bind(this);
        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.confirmpassword = this.confirmpassword.bind(this);
    }

    username(event){
        this.setState({username:event.target.value})
    }
    email(event){
        this.setState({email:event.target.value})
    }
    password(event){
        this.setState({password:event.target.value})
    }
    confirmpassword(event){
      this.setState({confirmpassword:event.target.value})
  }

handleRegister(event){
    console.log(email)
    //fetch api goes here
}

clearErrors = () => {
  this.setState({
    errors: {
      blankfield: false,
      matchedpassword: false
    }
  });
}

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
                  onChange={this.username}
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
                  onChange={this.email}
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
                  onChange={this.password}
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
                  onChange={this.confirmPassword}
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
