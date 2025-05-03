import React from "react";
import "./App.css";

export default function List() { 
    const [tasks, setTasks] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");

    function clickhandler(event) {
        setInputValue(event.currentTarget.value);
    }
    function addTask() {
        if (inputValue.trim() !== "") {
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
    }
    function handleDelete(i) {
        const newTasks = [...tasks];
        newTasks.splice(i, 1);
        setTasks(newTasks);
    }

    return(
        <main>
        <h1>📝 To-Do List</h1>
        <input 
        type="text" 
        placeholder="Add a new task" 
        value={inputValue} 
        onChange={clickhandler}/>
        <button onClick={addTask}>Add✅</button>
        <ul>
            {tasks.map((task, i) => <li key={task}>{task}
                <button onClick={() => handleDelete(i)}>❌</button>
            </li>)}
        </ul>
        </main>
    )
}