import React, { useContext, useRef } from 'react'
import Task from './Task';
import todoContext from '../context/todocontext';

function Tasks() {
  const {tasks} = useContext(todoContext)
  const parentElement = useRef(null);
  return (
    <div ref={parentElement} className='flex justify-center flex-wrap mt-2 mb-0'>
    {
        tasks.map(task => <Task key={task.id} {...task} parentElement = {parentElement}/>)
    }
    </div>
    

  );
}

export default Tasks;
