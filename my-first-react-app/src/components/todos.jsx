let calls = 0;

export function getVisibleTodos(todos, showActive) {
  console.log(`getVisibleTodos() was called ${++calls} times`);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;
  return visibleTodos;
}

export function createTodo(text, completed = false) {
  return {
    id: crypto.randomUUID(),
    text,
    completed,
  };
}

export const initialTodos = [
  { id: "initial-todo-apples", text: "Get apples", completed: true },
  { id: "initial-todo-oranges", text: "Get oranges", completed: true },
  { id: "initial-todo-carrots", text: "Get carrots", completed: false },
];
