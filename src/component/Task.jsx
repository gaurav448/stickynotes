import { AiOutlineCloseSquare } from "react-icons/ai"; 
import React, { useContext } from "react";
import todoContext from "../context/todocontext";
import {motion} from "framer-motion"

function Task({ taskName, id, completed ,parentElement}) {
  const{tasks, setTasks} = useContext(todoContext)
  const deleteTaskHandler = () =>{
    const filteredtask =tasks.filter(task => task.id !== id)
    setTasks(filteredtask)
    localStorage.setItem('tasks', JSON.stringify(filteredtask))
  }
   
  const checkHandler = () => {
   const updatedTask = tasks.map(task => task.id == id ? {...task, completed: !task.completed } : task )
   setTasks(updatedTask);
   localStorage.setItem('tasks', JSON.stringify(updatedTask))
  }
  
  return (
    <motion.div drag dragConstraints={parentElement} className="w-[250px] min-h-[350px] rounded-3xl p-5
     bg-blue-300 opacity-70 shadow-2xl border m-5 relative" >
     <button className="absolute top-0 right-0 m-2" onClick={deleteTaskHandler} ><AiOutlineCloseSquare size={25}/></button>
      <p className={`text-xl ${completed && 'line-through'}`}>{taskName}</p>
      <div className="absolute bottom-0 flex right-[60px] mb-3 gap-2 text-xl" >
        <input type="checkbox" checked ={completed} onClick={checkHandler
        } name="" id={id}/>
        <label htmlFor={id}>{completed ? "Completed" : "Incompleted"}</label>
      </div>
    </motion.div>
  );
}

export default Task;
