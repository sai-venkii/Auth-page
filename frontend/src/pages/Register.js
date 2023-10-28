import React,{useState} from "react";
import styles from "./style.css";
import { Link } from "react-router-dom";
import profile from '../assets/profile.png';
function Register() {
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState(null);
    function validateImg(e) {
        const file = e.target.files[0];
        if (file.size >= 1048576) {
          return alert("Max file size is 1mb");
        } else {
          setImage(file);
          setImagePreview(URL.createObjectURL(file));
        }
      }

  return (
    <div>
      <div class="wrapper">
        <form action="">
          <h1>Register</h1>
          <div class="input-box">
            <div className="signup-profile-pic__container">
              <img
                src={imagePreview || profile}
                className="signup-profile-pic"
              />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png, image/jpeg"
                onChange={validateImg}
              />
            </div>
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
              <option value="" disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="input-box">
            <input type="email" placeholder="Email" required />
          </div>
          <div class="input-box ">
            <input type="date" required />
          </div>
          <button type="submit" class="btn">
            Register
          </button>

          <div class="register-link">
            <p>
              Already have an account?<Link to="/"> Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
