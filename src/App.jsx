import React from 'react';
import { useState } from 'react';
import Header from './Components/Header.jsx';
import StatsBox from './Components/StatsBox.jsx';
import './App.css';
import TaskInput from "./Components/TaskInput.jsx";
import TaskList from "./Components/TaskList.jsx";

  
function App() { 
  const [tasks, setTasks] = useState([]);

  function addTask(taskText) {
    setTasks((prev) => [...prev, { text: taskText, completed: false }]);
  }
 function toggleComplete(index) {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(index) {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  }

  function editTask(index, newText) {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, text: newText } : task
      )
    );
  }
  const totalTasks = tasks.length;
const completedTasks = tasks.filter((task) => task.completed).length;
  return (
    <div className="app">
      <Header />
      <StatsBox totalTasks={totalTasks} completedTasks={completedTasks} />
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
