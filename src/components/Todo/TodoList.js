import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, addTodo, toggleTodo, deleteTodo }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      addTodo(newTask);
      setNewTask("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Ajouter une tâche..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Ajouter
        </button>
      </form>

      {todos.length === 0 ? (
        <p className="text-center">Aucune tâche pour l'instant.</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
