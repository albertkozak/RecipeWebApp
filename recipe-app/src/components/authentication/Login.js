import React, { useState } from "react";
import Home from "../Home.js";
import FormErrors from "../FormErrors";
// import Validation from "../utilities/Validation ";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    blankfield: false,
  });

  const BASE_URL = "https://ssdrecipeapi.azurewebsites.net/api/auth/login";

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleLogin(e) {
    console.log(email);

    e.preventDefault();

    //JWT Validation
    await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status === "OK") {
          sessionStorage.setItem("auth-token", res.token);
          //localStorage.setItem("currentUserEmail", email);
          sessionStorage.setItem("isAuthorized", "yes");
          props.history.push("/");
          window.location.reload(false);
        }
        // console.log(res.token);
      })
      .catch((e) => console.log("Unable to sign-in", e));
  }

  function clearErrors() {
    setErrors({
      errors: {
        blankfield: false,
      },
    });
  }

  return (
    <div className="App">
      <div className="login">
        <FormErrors formErrors={errors} />
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          {/* enables enter to work upon submit*/}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <p className="control">
            <button className="button is-success">Login</button>
          </p>
        </form>
      </div>
    </div>
  );
}
