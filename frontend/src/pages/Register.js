import React from 'react'
import styles from "./style.css";
function Register() {
  return (
    <div>
      <div class="wrapper">
        <form action="">
            <h1>Register</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" required />
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" required />
            </div>
            <div class="input-box">
                <input type="password" placeholder="Confirm Password" required />
            </div>
            <div class="input-box">
                <select required>
                    <option value="" disabled selected>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="input-box">
                <input type="email" placeholder="Email" required />
            </div>
            <div class="input-box">
                <input type="date" required />
            </div>
            <button type="submit" class="btn">Register</button>

            <div class="register-link">
                <p>Already have an account?<a href="Login.html">Login</a></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Register
