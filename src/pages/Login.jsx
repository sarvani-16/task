import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if(savedUser && savedUser.email === email && savedUser.password === password){

      alert("Login Successful");

      navigate("/dashboard");   // 🔹 This sends user to dashboard

    } else {

      alert("Invalid Email or Password");

    }

  };

  return (

    <div>

      <h2>Login</h2>

      <input
      type="email"
      placeholder="Enter Email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>

      <input
      type="password"
      placeholder="Enter Password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  );
}