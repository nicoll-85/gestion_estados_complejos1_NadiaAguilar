import React from "react";

const TodoList = ({ tasks, updateTask, deleteTask }) => {
  const handleTaskUpdate = (taskId, updatedTask) => {
    updateTask(taskId, updatedTask);
  };

  const handleTaskDelete = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) =>
              handleTaskUpdate(task.id, { completed: e.target.checked })
            }
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.name}
          </span>
          <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
