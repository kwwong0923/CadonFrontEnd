import React, { useState } from "react";

// Components
import Modal from "../UI/Modal";
// Services
import AuthService from "../../services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState();
  return <div>Login</div>;
};

export default Login;
