import React, { useContext, useRef } from "react";
import todoContext from "../context/todocontext";

function Addtask() {
  const {setTasks, tasks} = useContext(todoContext)
  const inputRef = useRef(null)
  const formHandler = (e) =>{
    e.preventDefault()
    const taskName = inputRef.current.value
    let newTask =
    {
      taskName : taskName,
      completed : false,
      id: tasks.length
    }
    setTasks(pre =>[...pre,newTask])
    localStorage.setItem('tasks',JSON.stringify([...tasks,newTask]))
    inputRef.current.value = ("")

  }
 

  return (
    <form
      onSubmit={formHandler}
      className="overflow-hidden rounded-3xl mx-auto mt-10 border w-fit sm:text-xl"
    >
      <input
        ref={inputRef}
        className="rounded-l-2xl px-2 outline-none"
        type="text"
        maxLength={160}
        required
      />
      <button className="px-2 bg-green-600 hover:bg-green-400 hover:text-[1.3rem] ">Add todo</button>
    </form>
  );
}

export default Addtask;
