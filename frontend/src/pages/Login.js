import React from "react";
import style from "./style.css";
import { Link } from "react-router-dom";

function login() {
  return (
    <div>
      <div class="wrapper">
        <form action="">
          <h1>Login</h1>
          <div class="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <div class="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" class="btn">
            Sign in
          </button>

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

export default login;