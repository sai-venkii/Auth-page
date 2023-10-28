import React from "react";
import style from "./style.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
    return (
        <div class="wrapper">
        <h1>Forgot Password</h1>
        <form id="resetPasswordForm">
            <div class="input-box">
                <input type="text" placeholder="Username" required />
                <input type="password" id="password" placeholder="Reset Password" required />
                <input type="password" id="confirmPassword" placeholder="Retype Password" required />
            </div>
            <button type="submit" class="btn" id="resetButton" disabled>
                <Link to={"/login"}>Reset</Link>
            </button>
        </form>
    </div>
    );
  }

export default ForgotPassword;