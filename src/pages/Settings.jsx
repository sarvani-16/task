import { useNavigate } from "react-router-dom";

export default function Settings(){

const navigate = useNavigate();

const logout = () => {

localStorage.removeItem("user");

navigate("/login");

};

const toggleMode = () => {

document.body.classList.toggle("dark");

};

return(

<div style={{textAlign:"center",marginTop:"120px"}}>

<h2>Settings</h2>

<br/>

<button onClick={toggleMode}>Dark / Light Mode</button>

<br/><br/>

<button onClick={logout}>Logout</button>

</div>

);

}