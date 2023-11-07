import React,{useState} from "react";
import styles from "./style.css";
import axios  from "axios";
import { Link, useNavigate } from "react-router-dom";
import profile from '../assets/profile.png';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [status, setStatus] = useState({ message: '', color: 'green' });
  const [confirmpass,setConfirmpass] = useState('');
  const navigate = useNavigate();
  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 1mb");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }
  
  const handleSignup = (e) => {
      e.preventDefault();
      if (!image) return alert("Please upload your profile picture");
      if(password!=confirmpass){
        setStatus({ message: 'Passwords do not match', color: 'red' });
        return;
      }
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('gender', gender);
      formData.append('dob', dob);
      formData.append('image', image);
      formData.append('email',email);

      axios.post('http://localhost:5000/signup', formData)
        .then(response => {
          console.log(response.data);
          setStatus({ message: 'Registration Successful', color: 'green' });
          setTimeout(2000);
          navigate('/login');
        })
        .catch(error => {
          if(error.response.status === 400){
            setStatus({ message: error.response.data, color: 'red' });
          }
          else{
            console.error('Error uploading data and image:', error);
            setStatus({ message: 'Registration failed', color: 'red' });
          }
    });
  };

  return (
    <div>
      <div class="wrapper">
        <form action="" onSubmit={handleSignup}>
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
            <input type="text" placeholder="Username" required onChange={(e)=>{setUsername(e.target.value)}}/>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Confirm Password" required onChange={(e)=>{setConfirmpass(e.target.value)}}/>
          </div>
          <div class="input-box">
            <select required onChange={(e)=>{setGender(e.target.value)}}>
              <option value="" disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="input-box">
            <input type="email" placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div class="input-box ">
            <input type="date" required onChange={(e)=>{setDob(e.target.value)}}/>
          </div>
          <button type="submit" class="btn">
            Register
          </button>
          <p style={{ color: status.color }}>{status.message}</p>

          <div class="register-link">
            <p>
              Already have an account?<Link to="/login"> Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
