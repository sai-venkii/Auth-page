import React, { useState } from "react";
import style from "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ message: '', color: 'green' });
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", { username, password })
      .then((res) => {
        const output = res.data;
        if (output == "Login Successful") navigate("/chat");
        else alert("Password thappu da 'VENNA'");
      })
      .catch((err) => {
        console.error(setStatus({ message: err.response.data, color: 'red' }));
    });  
  }
  return (
    <div>
      <div class="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div class="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>

          <button type="submit" class="btn">
            Sign in
          </button>
          <p style={{ color: status.color }}>{status.message}</p>
          <div class="remember-forgot">
            <Link to="/forgotPassword">Forgot Password</Link>
          </div>
          <div class="register-link">
            <p>
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
