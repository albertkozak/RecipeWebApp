import React, { useState } from "react";
// import FormErrors from "../FormErrors";
// import Validation from "../utilities/Validation ";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [errors, setErrors] = useState({
  //     blankfield: false
  //   });
  const BASE_URL = "http://localhost:5000/api/user/";

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  //   function handleLogin(e) {
  //     console.log(email);
  //   }

  async function handleLogin(e) {
    console.log(email);

    e.preventDefault();

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

  //   clearErrors = () => {
  //    setErrors({
  //      errors: {
  //        blankfield: false
  //      }
  //    });
  //  };

  return (
    <div>
      {/* <FormErrors formErrors={errors} /> */}
      <form onSubmit={handleLogin}>
        {/* enables enter to work upon submit*/}
        <h2>Login</h2>
        <input
          type='email'
          name='email'
          placeholder='Enter Email Address'
          value={email}
          onChange={handleEmail}
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
