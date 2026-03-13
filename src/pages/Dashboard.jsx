import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard(){

const navigate = useNavigate();

const [task,setTask]=useState("");
const [tasks,setTasks]=useState([]);
const [showSettings,setShowSettings]=useState(false);

useEffect(()=>{

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
setTasks(savedTasks);

},[]);

const addTask=()=>{

if(task.trim()==="") return;

const newTasks=[...tasks,{title:task}];

setTasks(newTasks);

localStorage.setItem("tasks",JSON.stringify(newTasks));

setTask("");

};

const toggleDarkMode=()=>{
document.body.classList.toggle("dark");
};

const logout=()=>{
localStorage.removeItem("user");
navigate("/login");
};

return(

<div className="dashboard">

<nav className="navbar">

<h2 className="logo">Task Portal</h2>

<div className="nav-buttons">

<button onClick={()=>navigate("/login")}>Signin</button>

<button onClick={()=>navigate("/")}>Signup</button>

<button onClick={()=>navigate("/status")}>Status</button>

<button onClick={()=>setShowSettings(!showSettings)}>Settings</button>

</div>

</nav>

<div className="main">

{showSettings && (

<div className="sidebar">

<h3>Settings</h3>

<button onClick={toggleDarkMode}>Dark / Light Mode</button>

<button onClick={()=>navigate("/account")}>Account Details</button>

<button onClick={logout}>Logout</button>

</div>

)}

<div className="content">

<div className="add-task">

<h2>Add Task</h2>

<div className="task-input">

<input
placeholder="Enter task"
value={task}
onChange={(e)=>setTask(e.target.value)}
/>

<button onClick={addTask}>Add Task</button>

</div>

</div>

<div className="task-list">

<h2>Task List</h2>

{tasks.map((t,i)=>(
<div key={i} className="task-card">
{t.title}
</div>
))}

</div>

</div>

</div>

</div>

);

}