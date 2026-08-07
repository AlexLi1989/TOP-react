import { useState, useEffect } from "react";
import { initialTodos, createTodo } from "./todos";

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const renderTodos = (todos) => {
    return todos.map((todo) => (
      <li key={todo.id}>{todo.completed ? <s>{todo.text}</s> : todo.text}</li>
    ));
  };
  const onAdd = (text) =>
    setTodos((prevTodos) => [...prevTodos, createTodo(text)]);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={onAdd} />
      <ul>{renderTodos(showActive ? activeTodos : todos)}</ul>
      <footer>{activeTodos.length} todos left</footer>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState("");

  function handleAddClick() {
    setText("");
    onAdd(text);
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}
