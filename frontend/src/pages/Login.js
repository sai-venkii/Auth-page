import React, { useState } from "react";
import style from "./style.css";
import { Link } from "react-router-dom";

function Login() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  function handleSubmit(event){
    event.preventDefault();
    
  }
  return (
    <div>
      <div class="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div class="input-box">
            <input type="text" placeholder="Username" required onChange={e=>setUsername(e.target.value)}/>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" required onChange={e=>setPassword(e.target.value)}/>
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
          <div class="remember-forgot"><Link to="/forgotPassword">Forgot Password</Link></div>
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