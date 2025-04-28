import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{
        textDecoration: todo.done ? "line-through" : "none",
        backgroundColor: todo.done ? "#d4edda" : "white",
      }}
    >
      {todo.text}
      <div>
        <button
          className="btn btn-sm btn-primary me-2"
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.done ? "Annuler" : "Fait"}
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteTodo(todo.id)}
        >
          Supprimer
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
