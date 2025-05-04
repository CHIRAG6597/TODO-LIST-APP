import React, { useEffect , useRef} from 'react';
import { useState } from 'react';
import Header from './Components/Header.jsx';
import StatsBox from './Components/StatsBox.jsx';
import './App.css';
import TaskInput from "./Components/TaskInput.jsx";
import TaskList from "./Components/TaskList.jsx";

  
function App() { 
  const [tasks, setTasks] = useState([]);  
  // useRef to track if it's the first render
  // This is used to prevent the localStorage from being set on the first render
  // because the tasks are not yet loaded from localStorage
  const isFirstRender = useRef(true);

  // useEffect to load tasks from localStorage when the component mounts
  // If there are tasks in localStorage, set them to the state
  // This will only run once when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem('tasks');
    console.log(localStorage.getItem("tasks"));
    if (storedTodos) {
      setTasks(JSON.parse(storedTodos));
    }
  }, []);

  // useEffect to save tasks to localStorage whenever the tasks state changes
  // This will run every time the tasks state changes
  // If it's the first render, it will not save to localStorage
  // This is to prevent the localStorage from being set on the first render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  // It takes the task text as an argument and adds it to the tasks state
  // It also generates a unique id for the task using Date.now()
  function addTask(taskText) {
    setTasks((prev) => [...prev, { id: Date.now(), text: taskText, completed: false }]);
  }

  // Function to toggle the completed state of a task
  // It takes the index of the task as an argument and toggles its completed state
  // It uses the map function to create a new array with the updated task
  // It also uses the spread operator to copy the previous state
 function toggleComplete(index) {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Function to delete a task
  // It takes the index of the task as an argument and removes it from the tasks state
  // It uses the filter function to create a new array without the deleted task
  function deleteTask(index) {
    setTasks((prev) => prev.filter((notneededhere_only_i_isneeded, i) => i !== index));
  }

  // Function to edit a task
  // It takes the index of the task and the new text as arguments
  // It uses the map function to create a new array with the updated task
  function editTask(index, newText) {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, text: newText } : task
      )
    );
  }

  const totalTasks = tasks.length;
  // Calculate the number of completed tasks
  // by filtering the tasks array and counting the number of tasks with completed: true
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
