import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  // Function to handle form submission
  // Prevents the default form submission behavior and adds a new task if the input is not empty 
  function handleSubmit(e) {
    e.preventDefault();
  
    if (input.trim()) {
      addTask(input.trim());
      setInput("");
    }
  }
  

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your next task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}
