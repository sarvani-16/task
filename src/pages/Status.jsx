import { useState } from "react";

export default function Status(){

 const [tasks,setTasks] = useState(
   JSON.parse(localStorage.getItem("tasks")) || []
 );

 const changeStatus = (index,newStatus)=>{

   const updated = [...tasks];

   updated[index].status = newStatus;

   setTasks(updated);

   localStorage.setItem("tasks", JSON.stringify(updated));

 };

 return(

  <div>

   <h2>Workflow Status</h2>

   {tasks.map((task,i)=>(

    <div key={i}>

     <h3>{task.title}</h3>

     <p>Status: {task.status}</p>

     <button onClick={()=>changeStatus(i,"todo")}>
     To Do
     </button>

     <button onClick={()=>changeStatus(i,"progress")}>
     In Progress
     </button>

     <button onClick={()=>changeStatus(i,"review")}>
     Review
     </button>

     <button onClick={()=>changeStatus(i,"completed")}>
     Completed
     </button>

    </div>

   ))}

  </div>

 );

}