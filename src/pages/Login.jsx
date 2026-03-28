import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./account.css";   // ✅ VERY IMPORTANT

export default function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if(savedUser && savedUser.email === email && savedUser.password === password){
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }

  };

  return (
    <div className="account-page">
      <div className="profile-card">

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
}