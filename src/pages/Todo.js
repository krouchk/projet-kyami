import React, { useState, useEffect } from "react";
import TodoList from "../components/Todo/TodoList";
import TodoItem from "../components/Todo/TodoItem";

function Todo() {
  const [todos, setTodos] = useState([]);

  // Charger les tâches depuis localStorage au démarrage
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Sauvegarder les tâches dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">📝 Ma ToDo List</h2>
      <TodoList
        todos={todos}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default Todo;
