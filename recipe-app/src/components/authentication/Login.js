import React, { useState } from "react";
import FormErrors from "../FormErrors";
import Validation from "../utilities/Validation ";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    blankfield: false
  });

  clearErrors = () => {
    setErrors({
      errors: {
        blankfield: false
      }
    });
  };

  handleUsername = (e) => {
    setUsername(e.target.value);
  };
  handlePassword = (e) => {
    setPassword(e.target.value);
  };

  async function handleLogin(e) {
    e.preventDefault();

    //form validation
    clearErrors();
    const error = Validation(e, error);

    //JWT Validation
    await fetch(BASE_URL + "login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status === "OK") {
          sessionStorage.setItem("auth-token", res.token);
        }
        console.log(res.token);
      })
      .catch((e) => console.log("Unable to sign-in", e));
  }

  return (
    <div>
      <FormErrors formErrors={errors} />

      <form onSubmit={handleLogin}>
        {/* enables enter to work upon submit*/}
        <h2>Login</h2>
        <input
          type='username'
          name='username'
          placeholder='username'
          value={username}
          onChange={handleUsername}
        />
        <input
          type='password'
          name='password'
          placeholder='Enter Password'
          value={password}
          onChange={handlePassword}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
