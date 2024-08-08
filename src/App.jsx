import React, { useState } from 'react'
import Addtask from './component/Addtask'
import Tasks from './component/tasks';
import todoContext from './context/todocontext';

function App() {
  let localData = localStorage.getItem('tasks') === null ? [] :
  JSON.parse(localStorage.getItem('tasks')) 
  const [tasks, setTasks] = useState(localData)
  return (
    <todoContext.Provider value={{tasks, setTasks}}>
    <div>
    <Addtask/>
    <Tasks/>
    </div>
    </todoContext.Provider>
  )
}

export default App;