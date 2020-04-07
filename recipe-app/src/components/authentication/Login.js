import React, { useState } from "react";
import FormErrors from "../FormErrors";

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
          sessionStorage.setItem("isAuthorized", "yes");
          props.history.push("/");
          window.location.reload(false);
        }
      })
      .catch((e) => console.log("Unable to sign-in", e));
  }

  return (
    <div className="App">
      <div className="login">
        <FormErrors formErrors={errors} />
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
