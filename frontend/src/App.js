import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/Forgot_Password";
import Signup from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
