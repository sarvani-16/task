import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    email:"",
    password:""
  });

  const handleSignup = () => {

    localStorage.setItem("user", JSON.stringify(user));

    navigate("/login");

  };

  return (

    <div className="auth">

      <h2>Create Account</h2>

      <input
      placeholder="Email"
      onChange={(e)=>setUser({...user,email:e.target.value})}
      />

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setUser({...user,password:e.target.value})}
      />

      <button onClick={handleSignup}>
      Signup
      </button>

      <p onClick={()=>navigate("/login")}>
      Already have account? Login
      </p>

    </div>

  );
}