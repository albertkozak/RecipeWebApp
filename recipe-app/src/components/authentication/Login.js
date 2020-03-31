import React, { useState } from "react";
import FormErrors from "../FormErrors";
import Validation from "../utilities/Validation ";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [errors, setErrors] = useState({
    blankfield: false,
    matchedPassword: false
  });
}
