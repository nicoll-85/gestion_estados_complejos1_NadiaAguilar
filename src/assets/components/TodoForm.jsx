import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      const newTask = {
        id: Math.random().toString(),
        name: taskName.trim(),
        completed: false,
      };
      addTask(newTask);
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={handleInputChange}
        placeholder="Add task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
