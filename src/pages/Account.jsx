import { useEffect, useState } from "react";
import "./account.css";

export default function Account(){

const [tasks,setTasks]=useState([]);

const user = JSON.parse(localStorage.getItem("user"));

useEffect(()=>{

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
setTasks(savedTasks);

},[]);

return(

<div className="account-page">

<h2>Account Details</h2>

<div className="profile-card">

<p><b>Name:</b> {user?.name || "User"}</p>

<p><b>Email:</b> {user?.email}</p>

<p><b>Phone:</b> {user?.phone || "Not added"}</p>

<p><b>Total Tasks:</b> {tasks.length}</p>

</div>

</div>

);

}