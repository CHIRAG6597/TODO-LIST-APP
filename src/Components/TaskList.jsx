import { useState } from "react";

export default function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  function handleEdit(index, currentText) {
    setEditingIndex(index);
    setEditedText(currentText);
  }

  function handleSave(index) {
    editTask(index, editedText);
    setEditingIndex(null);
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={`task ${task.completed ? "done" : ""}`}>
          {editingIndex === index ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
          )}
          <div className="buttons">
            {editingIndex === index ? (
              <button onClick={() => handleSave(index)}>💾</button>
            ) : (
              <button onClick={() => handleEdit(index, task.text)}>✏️</button>
            )}
            <button onClick={() => deleteTask(index)}>🗑️</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
