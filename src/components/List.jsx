import React from 'react';
import Tasks from './Tasks';
import { useState } from 'react';

function List() {
  
  const [tasks, setTasks] = useState(['tarea de prueba'])
  
  function addTask () {
    const inputTask = document.getElementById('inputTask')
    console.log(inputTask.value)

    setTasks(tasks.push(inputTask.value))

  }
  
  
  return (
    <div>
      <h2>Tareas</h2>
        <Tasks myTask={tasks}/> 

      <input type="text" id="inputTask"/>
      <button onClick={addTask}>+</button>
    </div>

  );
};
export default List